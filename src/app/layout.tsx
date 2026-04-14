import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import { AppProviders } from '@/components/providers/AppProviders';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Ama Storefront',
  description:
    'Modern e-commerce platform with Next.js, MongoDB, NextAuth, and Stripe.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} font-[var(--font-manrope)]`}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
