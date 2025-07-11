"use client"
import Slider from 'react-slick';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const categories = ['Trending', 'Merches', 'Tickets', 'Recently Added'];

const trackData:any = {
  Trending: [/*...*/],
  Merches: [/*...*/],
  Tickets: [/*...*/],
  'Recently Added': [/*...*/],
};

// Dummy data
const dummyTrack = {
  title: 'Echoes of the Soul',
  artist: 'Misty Brown',
  left: '10/1000 Left',
  price: '0.005Ξ',
  image: '/home/sound.jpg', // Replace with your image
};

categories.forEach((cat) => {
  trackData[cat] = Array(6).fill(dummyTrack); // 6 items per category
});

const Discover = () => {

   const [activeTab, setActiveTab] = useState('Trending');
  let sliderRef = useState<Slider | null>(null)[0];

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      <div className="flex justify-between items-center w-4/5 mx-auto mt-10">
        <h1 className="font-semibold text-[#A3A3A3] text-4xl leading-[100%] tracking-[0%] capitalize font-poppins">
          Buy, Sell <span className="text-white"> & Discover </span> Tracks
        </h1>
        <button className="bg-[#1E181D] hover:bg-[#885FA8] text-[#F2AFC9] hover:text-[#1E181D] cursor-pointer rounded-full p-5">
          <ArrowRight className="text-7xl -rotate-45 " />
        </button>
      </div>

      <div className="flex w-4/5 justify-between pt-6 m-auto">
          {/* Sidebar */}
          <aside className="mr-6 space-y-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`block px-4 py-2 rounded-full text-sm font-medium ${
                  activeTab === cat
                    ? 'bg-pink-600 text-white'
                    : 'hover:text-pink-400 text-white/70'
                }`}
              >
                {cat}
              </button>
            ))}

            <div className="flex gap-2 mt-8">
              <button
                onClick={() => sliderRef?.slickPrev()}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => sliderRef?.slickNext()}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </aside>

          <div className="w-11/12">
            <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
              {trackData[activeTab].map((track, index) => (
                <div key={index} className="px-2">
                  <div className="hover:bg-[#111] p-4 rounded-lg">
                    <Image
                      src={track.image}
                      alt={track.title}
                      height={300}
                      width={300}
                      className="rounded-sm mb-4  h-48 w-full object-cover"
                    />
                    <h3 className="text-white font-semibold text-sm">
                      {track.title}
                    </h3>
                    <p className="text-xs text-white/60 mb-1">{track.artist}</p>
                    <p className="text-xs text-white/60 mb-4">{track.left}</p>
                    <div className="flex items-center justify-between text-sm">
                      <button className="bg-white text-black px-4 py-1 rounded-md text-xs font-semibold">
                        Buy Now
                      </button>
                      <span>{track.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
    </>
  );
};

export default Discover;
