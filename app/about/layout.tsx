import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "About",
  description:
    "",
}

export default function ConnectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </>
  );
}
