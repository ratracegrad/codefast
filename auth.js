import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import clientPromise from './libs/mongodb';
import Resend from 'next-auth/providers/resend';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Resend({
      // If your environment variable is named differently than default
      apiKey: process.env.RESEND_KEY,
      from: 'no-reply@resend.werise.tech',
      name: 'Email',
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
});
