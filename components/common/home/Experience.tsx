'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Experience = () => {
  return (
    <section className='mb-15 w-4/5 m-auto'>
      <div className="max-w-2xl px-4 md:px-0 text-center mx-auto mt-10">
        <h1 className="font-semibold text-[#A3A3A3] text-2xl mb-6 md:text-5xl leading-[100%] tracking-[0%] capitalize font-poppins">
          <span className="text-white">Upgrade</span> Your{' '}
          <span className="text-white">Experience </span>
          with Audioblocks
        </h1>
        <p className="text-[#A3A3A3] max-w-lg m-auto text-sm font-medium">
          No more passive listening, Stream and enjoy your music while earning on Audioblocks
        </p>
      </div>
      <div className="flex flex-col justify-center mt-6 md:flex-row gap-4">
        <Link
          href="#"
          className="bg-[#D2045B] flex items-center justify-between text-white font-medium px-5 py-2 rounded-full text-sm hover:bg-[#b8034b] transition"
        >
          Stream Now
          <div className="bg-black rounded-full p-1 ml-2">
            <ArrowRight className="h-4 w-4 rotate-[300deg] text-white" />
          </div>
        </Link>
        <Link
          href="#"
          className="border flex items-center justify-between border-[#F2AFC9] text-white font-medium px-5 py-2 rounded-full text-sm hover:bg-white/10 transition"
        >
          Join Waitlist
          <div className="bg-[#D2045B] rounded-full p-1 ml-2">
            <ArrowRight className="h-4 w-4 rotate-[300deg] text-white" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Experience;
