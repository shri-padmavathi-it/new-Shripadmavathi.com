import Image from 'next/image';
import Link from 'next/link';
import { FaRegCopyright } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 px-4 mt-1 border-t border-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

        {/* Logo Section */}
        <div className="flex items-center md:space-x-3 space-x-1 justify-center md:justify-start">
          <div className="w-30 h-30 flex items-center justify-center text-xl font-bold text-white">
            <Image src="/logo.png" alt="Logo" width={80} height={80} />
          </div>
          <span className="md:text-xl text-md font-semibold tracking-wide text-black">Shri Padmavathi Consultants</span>
        </div>

        {/* Links Section */}
        <div className="flex justify-center space-x-6 text-sm font-medium">
          <Link href="/about/aboutUs" className="text-black hover:text-blue-600 transition">About Us</Link>
          <Link href="/about/contactUs" className="text-black hover:text-orange-500 transition">Contact Us</Link>
        </div>

        {/* Copyright Section */}
        <div className="w-full text-gray-600 text-sm flex flex-col md:flex-row items-center justify-center md:justify-end text-center md:text-right">
            <div className="flex items-center space-x-1">
                <FaRegCopyright />
                <span>{new Date().getFullYear()} Shri Padmavathi Consultants.</span>
            </div>
            <div className="md:ml-2">
                <span>All rights reserved.</span>
            </div>
        </div>
      </div>
    </footer>
  );
}