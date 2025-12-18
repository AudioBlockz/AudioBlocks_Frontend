'use client';

import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';
import Cookies from 'js-cookie';
import { useAuthFlow } from '@/hooks/useAuthFlow';
import FullScreenLoader from './FullScreenLoader';
import {  useState } from 'react';
import AuthChoiceModal from './AuthChoiceModal';

const Hero = () => {
  const route = useRouter();
  const { isConnected } = useAccount();
  const token = Cookies.get('audioblocks_jwt');

  const { loading, startLogin, startRegister } = useAuthFlow();

  const [showAuthChoice, setShowAuthChoice] = useState(false);

  const handleStream = () => {
    if (!isConnected || !token) {
      setShowAuthChoice(true);
      return;
    } else {
      route.push('/dashboard/profile/edit');
    }
  };
  return (
    <section className="relative md:min-h-screen h-auto text-white pt-40 overflow-hidden">
      <div className="absolute right-40 top-2 bg-[#490D3E80] rounded-full h-auto md:w-[400px] md:h-[400px] blur-[100px]" />
      <div className="w-4/5 mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="h-auto md:w-2/5 w-full flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
            Discover Tomorrow’s <br className="hidden md:block" /> Music Today
          </h1>
          <p className="text-[#DACFD3] font-normal text-base md:text-lg leading-[1.6] mb-8">
            Stream authentic, ad-free music from emerging voices. <br className="hidden md:block" />
            Built for listeners who care and artists who dare.
          </p>
          <div className="flex flex-col md:w-full w-3/5 m-auto sm:flex-row gap-4 sm:w-auto justify-center md:justify-start">
            <button
              onClick={handleStream}
              className="bg-[#D2045B] cursor-pointer flex items-center justify-between text-white font-medium px-6 py-2 rounded-full text-sm hover:bg-[#6C022F] hover:text-black transition"
            >
              Stream Now
              <div className="bg-black rounded-full p-1 ml-2">
                <ArrowRight className="h-4 w-4 rotate-[300deg] text-white" />
              </div>
            </button>
            <Link
              href="#"
              className="border flex items-center justify-between border-[#F2AFC9] text-white font-medium px-6 py-2 rounded-full text-sm hover:bg-[#885FA8] hover:text-black transition"
            >
              Join Waitlist
              <div className="bg-[#D2045B] rounded-full p-1 ml-2">
                <ArrowRight className="h-4 w-4 rotate-[300deg] text-white" />
              </div>
            </Link>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-[250px] h-[250px] z-20 rounded-2xl overflow-hidden border border-[#D9D9D9]">
            <Image
              src="/home/frame1.jpg"
              alt="Main Artist"
              fill
              className="rounded-2xl object-cover"
            />
          </div>

          <div className="absolute -top-15 -left-14 scale-x-[-1]  w-[250px] h-[250px] z-10 border border-[#885FA833] rounded-2xl overflow-hidden">
            <Image
              src="/home/frame2.jpg"
              alt="Secondary Artist"
              fill
              className="rounded-2xl object-cover opacity-90"
            />
          </div>
        </div>
      </div>

      <div className="bottom-0 left-0 md:block hidden w-full">
        <Image
          src="/home/hero2.svg"
          alt="Waveform"
          width={1600}
          height={100}
          className="w-full h-auto"
        />
      </div>

      {/* Auth choice modal */}
      <AuthChoiceModal
        open={showAuthChoice}
        onClose={() => setShowAuthChoice(false)}
        onLogin={() => {
          setShowAuthChoice(false);
          startLogin();
        }}
        onRegister={() => {
          setShowAuthChoice(false);
          startRegister();
        }}
      />

      {loading && <FullScreenLoader />}
    </section>
  );
};

export default Hero;
