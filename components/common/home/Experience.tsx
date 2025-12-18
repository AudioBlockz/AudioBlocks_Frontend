'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';
import Cookies from 'js-cookie';
import { useAuthFlow } from '@/hooks/useAuthFlow';
import { useState } from 'react';
import AuthChoiceModal from './AuthChoiceModal';

const Experience = () => {
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
    <section className="mb-15 w-4/5 m-auto">
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

      <div className="flex flex-col md:w-full mt-4 w-3/5 mx-auto sm:flex-row gap-4 sm:w-auto justify-center">
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
    </section>
  );
};

export default Experience;
