'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ItemProps {
  title: string | ReactNode;
  content: string;
}

const Collective = ({ title, content }: ItemProps) => {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center px-6 md:px-20 text-white"
      style={{
        backgroundImage: "url('/collective.svg')",
      }}
    >
      <div className="flex flex-col md:flex-row justify-between w-full gap-12">
        {/* Left Box */}
        <Link
          href="#"
          className="bg-[#1E181D] md:mt-50 flex flex-col justify-between items-end text-white p-8 rounded-xl"
        >
          <div className="mb-3">
            <ArrowUpRight className="h-8 w-8 text-white" />
          </div>
          <p className="text-base text-left font-semibold">
            Join the <br /> Collective
          </p>
        </Link>

        {/* Right Text */}
        <div className="max-w-xl text-center md:text-right">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">{title}</h1>
          <p className="mt-4 text-sm md:text-base text-white/80">{content} </p>
        </div>
      </div>
    </section>
  );
};

export default Collective;
