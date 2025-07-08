'use client';

import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Share = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex justify-center items-center px-6 md:px-20 text-white"
      style={{
        backgroundImage: "url('/smart.svg')", // Replace with your actual image path
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        {/* Right Text */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Share your sound</h1>
          <p className="mt-4 text-sm md:text-base text-white/80">
            Mint your music as NFTs, earn royalties on every resale, and connect directly with fans
            who believe in your art.
          </p>
        </div>

        {/* Left Box */}
        <Link href="#" className="bg-[#1E181D] flex flex-col justify-between items-end md:mt-50 text-white p-8 rounded-xl">
          <div className="mb-3">
            <ArrowUpRight className="h-8 w-8 text-right text-white" />
          </div>
          <p className="text-base text-left font-semibold">Sign Up <br/> As Artist </p>
        </Link>
      </div>
    </section>
  );
};

export default Share;
