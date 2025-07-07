import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <>
      <div className="relative -mt-13 pt-20 w-full h-[500px] md:h-screen flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/collective.svg"
          alt="Featured content"
          fill
          className="object-cover rounded-lg shadow-2xl"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-3xl text-center px-4">
          <h2 className="text-3xl md:text-6xl font-bold mb-4">Join The Collective</h2>
          <p className="text-base md:text-lg text-zinc-200 mb-8">
            Explore a vast collection of exclusive NFTs minted by artists worldwide, own a piece of
            music history and support your favorite artists directly.
          </p>

          {/* CTA Button */}
          <div className=" m-auto mt-20 w-2/12 flex">
            <Link href="/" className="bg-[#D2045B] hover:bg-pink-700 text-white p-5 rounded-lg font-medium flex flex-col shadow-lg transition">
              <FiArrowUpRight className="text-3xl mb-4 ml-15" />
              <span className='text-base text-left'>Join the AudioBlock Collective</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
