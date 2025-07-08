import { ArrowRight } from 'lucide-react';
import React from 'react';
import MusicBrowser from './ArtistContentSection';

const Featured = () => {
  return (
    <>
    
    <div className="flex justify-between items-center w-11/12 mx-auto mt-10">
      <h1 className="font-semibold text-4xl leading-[100%] tracking-[0%] capitalize font-poppins">
        Sounds You Shouldn’t Miss
      </h1>
      <button className="bg-[#1E181D] cursor-pointer rounded-full p-5">
        <ArrowRight className="text-7xl -rotate-45 text-[#F2AFC9]" />
      </button>
    </div>

    <MusicBrowser />
    </>
  );
};

export default Featured;
