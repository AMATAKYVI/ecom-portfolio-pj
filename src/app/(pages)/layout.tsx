'use client';
import HeaderTop from '@/components/HeaderTop';
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
      <HeaderTop />
      {/* depend on the auth state navbar will change */}
      <Navbar />
      {children}
    </>
  );
}
