import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { MongoClient } from "mongodb";
import { connectToDb } from "@/lib/db";
import { UserModel } from "@/models/User";
import { verifyPassword } from "@/lib/auth/password";

const mongoUri = process.env.MONGODB_URI;
const hasValidMongoUri = typeof mongoUri === "string" && /^mongodb(\+srv)?:\/\//.test(mongoUri);
const mongoClient = hasValidMongoUri ? new MongoClient(mongoUri) : null;

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const hasGoogleAuth = !!googleClientId && !!googleClientSecret;

const providers: NextAuthOptions["providers"] = [
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials) {
      if (!credentials?.email || !credentials.password) {
        return null;
      }

      await connectToDb();

      const user = await UserModel.findOne({ email: credentials.email }).lean();
      if (!user?.password) {
        return null;
      }

      const isValid = verifyPassword(credentials.password, user.password);
      if (!isValid) {
        return null;
      }

      return {
        id: String(user._id),
        email: user.email,
        name: user.name,
        role: user.role,
      };
    },
  }),
];

if (hasGoogleAuth) {
  providers.push(
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  );
}

export const authOptions: NextAuthOptions = {
  ...(mongoClient ? { adapter: MongoDBAdapter(mongoClient) as NextAuthOptions["adapter"] } : {}),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id || "";
        session.user.role = (token.role as "customer" | "admin") || "customer";
      }
      return session;
    },
  },
};
