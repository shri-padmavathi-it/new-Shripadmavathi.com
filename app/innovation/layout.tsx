import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Innovation",
  description:
    "",
}
export default function InnovationLayout({
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
