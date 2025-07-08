import { ArrowRight } from 'lucide-react';
import React from 'react';
import MusicSlider from './MusicSlider';

const Discover = () => {
  return (
    <>
      <div className="flex justify-between items-center w-11/12 mx-auto mt-10">
        <h1 className="font-semibold text-4xl leading-[100%] tracking-[0%] capitalize font-poppins">
          Buy, Sell & Discover Tracks
        </h1>
        <button className="bg-[#1E181D] cursor-pointer rounded-full p-5">
          <ArrowRight className="text-7xl -rotate-45 text-[#F2AFC9]" />
        </button>
      </div>

      <MusicSlider/>
    </>
  );
};

export default Discover;
