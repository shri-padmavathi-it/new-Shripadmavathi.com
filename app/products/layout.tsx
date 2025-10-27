import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Products",
  description:
    "",
}
export default function ProductsLayout({
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
