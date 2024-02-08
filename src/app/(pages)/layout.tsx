'use client';
import Navbar from '@/components/Navbar';
import { useSession } from 'next-auth/react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session } = useSession();
  return (
    <>
      {/* depend on the auth state navbar will change */}
      <Navbar />
      {children}
    </>
  );
}
