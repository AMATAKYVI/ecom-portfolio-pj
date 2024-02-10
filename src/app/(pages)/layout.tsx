'use client';
import Footer from '@/components/Footer';
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
      <div className="">
        <HeaderTop />
      </div>
      <div className="">
        <Navbar />
      </div>
      {children}
      <div className="">
        <Footer />
      </div>
    </>
  );
}
