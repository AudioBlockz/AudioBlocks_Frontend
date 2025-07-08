'use client';

import Navbar from '@/layouts/navbar';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col bg-[url(/circle-bg.svg)] w-1/2 h-screen m-auto bg-contain bg-no-repeat bg-center mt-2 bg items-center justify-center min-h-screen bg-black text-[#A3A3A3] relative overflow-hidden">
        {/* Content */}
        <div className="z-10 text-center px-4">
          {/* Logo */}
          <Image
            src="/logo2.png" // Replace with your logo path
            alt="AudioBlocks Logo"
            width={150}
            height={150}
            className="mx-auto mb-2"
          />

          <h1 className="text-2xl md:text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="max-w-md mx-auto text-xs md:text-sm">
            The page you're looking for can't be found. Double-check the URL and try again. Or click
            the button below.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block bg-[#D2045B] hover:bg-[#B8043F] text-white px-6 py-2 rounded-full transition-all duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};
export default NotFound;
