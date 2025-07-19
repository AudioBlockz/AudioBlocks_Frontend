'use client';

import { Inter } from 'next/font/google';
import { Search } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const inter = Inter({
  subsets: ['latin'],
  weight: '600',
  display: 'swap',
});

// Sample data
const musicData = [
  {
    id: 'music-1',
    image: '/wif.jpg',
    artistName: 'Wiffi Drips',
    songName: 'Bigger',
    price: '0.5 ETH',
  },
  {
    id: 'music-2',
    image: '/chilli.jpg',
    artistName: 'Mchivir',
    songName: 'ASILW',
    price: '0.3 ETH',
  },
  {
    id: 'music-3',
    image: '/cat.png',
    artistName: 'Soldier Cat',
    songName: 'Bad Guy',
    price: '0.7 ETH',
  },
  {
    id: 'music-4',
    image: '/moon.webp',
    artistName: 'Lost',
    songName: 'Circles',
    price: '0.4 ETH',
  },
];

const eventData = [
  {
    id: 'event-1',
    image: '/AFRO.jpg',
    artistName: 'Wiffi Drips Tour',
    eventName: 'World Tour',
    price: '1.2 ETH',
  },
  {
    id: 'event-2',
    image: '/tech.jpg',
    artistName: 'Ara',
    eventName: 'Sweetener World Tour',
    price: '0.9 ETH',
  },
  {
    id: 'event-3',
    image: '/rap.png',
    artistName: 'Rap Battle',
    eventName: 'Mat Tour',
    price: '0.8 ETH',
  },
];

const merchData = [
  {
    id: 'merch-1',
    image: '/audio.jpg',
    artistName: 'AudioBlocks',
    itemName: 'T-Shirts',
    price: '0.2 ETH',
  },
  {
    id: 'merch-2',
    image: '/ad.jpg',
    artistName: 'AudioBlocks',
    itemName: 'Folklore Vinyl',
    price: '0.15 ETH',
  },
  {
    id: 'merch-3',
    image: '/ads.jpg',
    artistName: 'BTS',
    itemName: 'Official T-Shirt',
    price: '0.1 ETH',
  },
];

const MusicCard = ({ item }: { item: any }) => (
  <div
    className="bg-transparent hover:bg-[#1E1E1E] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    style={{
      width: '208.921875px',
      height: '309.40625px',
      borderRadius: '6.38px',
      padding: '16px',
      position: 'relative',
    }}
  >
    <div className="flex justify-center">
      <Image
        src={item.image || '/placeholder.svg'}
        alt={item.songName}
         height={200}
        width={200}
        className="w-44 h-44 object-cover relative rounded-2xl -top-1 left-0.5"
      />
    </div>
    <div
      className="mt-3 flex flex-col justify-between"
      style={{ height: 'calc(100% - 176px - 12px)' }}
    >
      <div>
        <h3 className="font-semibold text-base text-white">{item.artistName}</h3>
        <p className="text-[#A3A3A3] text-sm mb-2">{item.songName}</p>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <button className="border-gray-600 border text-white px-4 py-2 rounded-2xl transition-colors text-sm mb-2">
          Buy Now
        </button>
        <span className="font-bold text-sm text-[#A3A3A3]">{item.price}</span>
      </div>
    </div>
  </div>
);

const EventCard = ({ item }: { item: any }) => (
  <div
    className="bg-transparent hover:bg-[#1E1E1E] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    style={{
      width: '208.921875px',
      height: '309.40625px',
      borderRadius: '6.38px',
      padding: '16px',
      position: 'relative',
    }}
  >
    <div className="flex justify-center">
      <Image
        src={item.image || '/placeholder.svg'}
        alt={item.eventName}
        height={200}
        width={200}
        className="w-44 h-44 object-cover relative rounded-2xl -top-1 left-0.5"
      />
    </div>
    <div
      className="mt-3 flex flex-col justify-between"
      style={{ height: 'calc(100% - 176px - 12px)' }}
    >
      <div>
        <h3 className="font-semibold text-base text-white">{item.artistName}</h3>
        <p className="text-[#A3A3A3] text-sm mb-2">{item.eventName}</p>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <button className="border-gray-600 border text-white px-4 py-2 rounded-2xl transition-colors text-sm mb-2">
          Buy Ticket
        </button>
        <span className="font-bold text-sm text-[#A3A3A3]">{item.price}</span>
      </div>
    </div>
  </div>
);

const MerchCard = ({ item }: { item: any }) => (
  <div
    className="bg-transparent shadow-lg overflow-hidden hover:shadow-xl hover:bg-[#1E1E1E] transition-shadow duration-300"
    style={{
      width: '208.921875px',
      height: '309.40625px',
      borderRadius: '6.38px',
      padding: '16px',
      position: 'relative',
    }}
  >
    <Image
      src={item.image || '/placeholder.svg'}
      alt={item.itemName}
      height={200}
      width={200}
      className="w-44 h-44 relative object-cover rounded-2xl -top-1 left-0.5"
    />
    <div
      className="mt-3 flex flex-col justify-between"
      style={{ height: 'calc(100% - 176px - 12px)' }}
    >
      <div>
        <h3 className="font-semibold text-base text-white">{item.artistName}</h3>
        <p className="text-[#A3A3A3] text-sm mb-2">{item.itemName}</p>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <button className="border-gray-600 border text-white px-4 py-2 rounded-2xl transition-colors text-sm mb-2">
          Buy Merch
        </button>
        <span className="font-bold text-sm text-[#A3A3A3]">{item.price}</span>
      </div>
    </div>
  </div>
);

export default function NftCollection() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Latest', 'Tickets', 'Merches'];

  const getAllData = () => {
    return [...musicData, ...eventData, ...merchData];
  };

  const getTabData = () => {
    switch (activeTab) {
      case 'Latest':
        return musicData;
      case 'Event Tickets':
        return eventData;
      case 'Merches':
        return merchData;
      default:
        return getAllData();
    }
  };

  const renderCard = (item: any) => {
    if (eventData.some((event) => event.id === item.id)) {
      return <EventCard key={item.id} item={item} />;
    } else if (merchData.some((merch) => merch.id === item.id)) {
      return <MerchCard key={item.id} item={item} />;
    } else {
      return <MusicCard key={item.id} item={item} />;
    }
  };

  return (
    <div className="min-h-screen max-w-11/12 m-auto bg-black px-8 py-12">
      {/* Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-12">
        <h1
          className={`${inter.className} capitalize text-3xl sm:text-4xl md:text-[48px] font-semibold leading-tight tracking-normal`}
        >
          Trending <span className="text-gray-400">NFT</span> Collections
        </h1>

        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search collections..."
            className="w-full sm:w-80 h-11 pl-10 pr-5 py-2 rounded-full border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-full mx-auto mb-7">
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative text-lg font-medium px-3 py-2 w-24 rounded-3xl transition-all duration-300 ease-in-out
          ${
            activeTab === tab
              ? 'bg-[#885FA8] text-white scale-105'
              : 'text-gray-500 hover:text-gray-700'
          }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {getTabData().map((item) => renderCard(item))}
        </div>
      </div>
    </div>
  );
}
