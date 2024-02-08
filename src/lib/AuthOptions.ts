import GoogleProvider from 'next-auth/providers/google';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { NextAuthOptions } from 'next-auth';
import clientPromise from './MongoClient';
import { Adapter } from 'next-auth/adapters';
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
      return session;
    },
  },
};
