import NextAuth from 'next-auth/next';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import GoogleProvider from 'next-auth/providers/google';
import type { Adapter } from 'next-auth/adapters';
import clientPromise from '@/lib/MongoClient';
import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise) as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID! || '',
      clientSecret: process.env.GOOGLE_SECRET! || '',
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async session({ session, user }: { session: any; user: any }) {
      // session.user.id = user.id;
      return session;
    },
  },
  //   pages: {
  //     signIn: '/auth/signin',
  //     signOut: '/auth/signout',
  //     error: '/auth/error',
  //   },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
