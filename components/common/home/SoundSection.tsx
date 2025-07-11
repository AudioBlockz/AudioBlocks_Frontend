'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const albums = {
  latest: Array(8).fill({
    title: 'Echoes of the Soul',
    artist: 'Misty Brown',
    tag: 'New Album',
    image: '/home/sound.jpg', // Replace with real paths
  }),
  trending: Array(8).fill({
    title: 'Solar Flare',
    artist: 'Lenny S.',
    tag: 'Trending Now',
    image: '/home/sound.jpg',
  }),
  popular: Array(8).fill({
    title: 'Golden Hour',
    artist: 'Nova',
    tag: 'Top Chart',
    image: '/home/sound.jpg',
  }),
};

export default function SoundsSection() {
  return (
    <section className="text-white w-4/5 mx-auto py-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-semibold text-[#A3A3A3] text-4xl leading-[100%] tracking-[0%] capitalize font-poppins">
          Sounds <span className="text-white">You Shouldn’t </span> Miss
        </h1>
        <button className="bg-[#1E181D] hover:bg-[#885FA8] text-[#F2AFC9] hover:text-[#1E181D] cursor-pointer rounded-full p-5">
          <ArrowRight className="text-7xl -rotate-45" />
        </button>
      </div>

      <Tabs.Root defaultValue="latest" className="flex  relative gap-10">
        <div className='absolute -z-10 md:-left-90 -left-14 top-2 bg-[#490D3E80] rounded-full w-70 md:w-100 h-100 blur-[150px]'/>
        
        {/* Tabs Trigger */}
        <Tabs.List className="flex flex-col gap-4">
          {['latest', 'trending', 'popular'].map((type) => (
            <Tabs.Trigger
              key={type}
              value={type}
              className="capitalize px-4 py-1 rounded-full text-sm font-medium focus:outline-none data-[state=active]:bg-[#D2045B]"
            >
              {type}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {/* Tabs Content */}
        <div className="flex-1">
          {Object.entries(albums).map(([key, items]) => (
            <Tabs.Content value={key} key={key} className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {items.map((item, index) => (
                <div key={index} className="hover:bg-[#121212] p-4 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="w-full rounded-2xl h-48 object-cover"
                  />
                  <div className="py-6">
                    <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                    <p className="text-[#A3A3A3] text-xs">{item.artist}</p>
                    <p className="text-white text-xs">{item.tag}</p>
                  </div>
                </div>
              ))}
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </section>
  );
}
