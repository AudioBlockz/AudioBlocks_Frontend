'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen text-white py-35 overflow-hidden">
      <div className='absolute right-40 top-2 bg-[#490D3E80] rounded-full w-100 h-100 blur-[100px]'/>
      <div className="w-4/5 mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Text Content */}
        <div className="">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
            Discover Tomorrow’s <br className="hidden md:block" /> Music Today
          </h1>
          <p className="text-[#DACFD3] font-normal text-base md:text-lg leading-[1.6] mb-8">
            Stream authentic, ad-free music from emerging voices. <br className="hidden md:block" />
            Built for listeners who care and artists who dare.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href="#"
              className="bg-[#D2045B] flex items-center justify-between text-white font-medium px-6 py-3 rounded-full text-sm hover:bg-[#b8034b] transition"
            >
              Stream Now
              <div className="bg-black rounded-full p-1 ml-2">
                <ArrowRight className="h-4 w-4 rotate-[300deg] text-white" />
              </div>
            </Link>
            <Link
              href="#"
              className="border flex items-center justify-between border-[#F2AFC9] text-white font-medium px-6 py-3 rounded-full text-sm hover:bg-white/10 transition"
            >
              Join Waitlist
              <div className="bg-[#D2045B] rounded-full p-1 ml-2">
                <ArrowRight className="h-4 w-4 rotate-[300deg] text-white" />
              </div>
            </Link>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-[250px] h-[250px] z-20 rounded-2xl overflow-hidden border border-[#D9D9D9]">
            <Image
              src="/home/frame1.jpg"
              alt="Main Artist"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>

          <div className="absolute -top-15 -left-14 scale-x-[-1]  w-[250px] h-[250px] z-10 border border-[#885FA833] rounded-2xl overflow-hidden">
            <Image
              src="/home/frame2.jpg"
              alt="Secondary Artist"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl opacity-90"
            />
          </div>
        </div>
      </div>

      {/* Bottom Wave Graphic */}
      <div className="bottom-0 left-0 w-full">
        <Image
          src="/home/hero2.svg"
          alt="Waveform"
          width={1600}
          height={100}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
