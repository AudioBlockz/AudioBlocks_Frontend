'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from './Members/navigation';

const OurCollective = () => {
  const collectiveArtists = [
    {
      name: 'Music is my Way',
      role: 'Misty Brown',
      image: '/AFRO.jpg', // Replace with actual image path
    },
    {
      name: 'Music is my Way',
      role: 'Misty Brown',
      image: '/audio.jpg', // Replace with actual image path
    },
    {
      name: 'Music is my Way',
      role: 'Misty Brown',
      image: '/image1.jpg', // Replace with actual image path
    },
    {
      name: 'Music is my Way',
      role: 'Misty Brown',
      image: '/cat.png', // Extra for sliding
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="text-white">
        {/* Meet The Collective Section */}
        <section className="max-w-11/12 mx-auto py-12">
          <div className="flex justify-between border-b border-[#151515] pb-5 items-center">
            <h1 className="font-semibold text-2xl md:text-4xl leading-[100%] tracking-[0%] capitalize font-poppins">
              Our <span className="text-[#DACFD3]">Collection</span>
            </h1>
            <button className="bg-[#1E181D] cursor-pointer rounded-full p-5">
              <ArrowRight className="text-7xl -rotate-45 text-[#F2AFC9]" />
            </button>
          </div>

          <div className="relative py-8">
            <Slider {...settings}>
              {collectiveArtists.map((artist, index) => (
                <div key={index} className="px-4">
                  <div className="w-full h-64 rounded-xl overflow-hidden mb-2 mx-auto">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="py-1  text-center md:text-left text-white">
                    <p className="text-xl font-bold">{artist.name}</p>
                    <p className="text-lg font-medium">{artist.role}</p>
                    <p className="text-xs font-light">New Album | Category</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurCollective;
