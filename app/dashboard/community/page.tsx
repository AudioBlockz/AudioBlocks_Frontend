'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import ShareModal from '@/components/common/dashboard/Share';
import { SquareCheck, UserRound } from 'lucide-react';

const artists = [
  {
    name: 'Daniel Allan',
    image: '/tech.jpg',
    genre: 'Electronic',
    description: 'Genre-bending electronic artist...',
    votes: 1203,
  },
  {
    name: 'Mira Solis',
    image: '/tech.jpg',
    genre: 'Indie Pop',
    description: 'Dreamy melodies and poetic lyrics...',
    votes: 842,
  },
  {
    name: 'Kairo Flux',
    image: '/AFRO.jpg',
    genre: 'Electronica',
    description: 'Future-forward soundscapes and ethereal tones...',
    votes: 756,
  },
  {
    name: 'Nova Aerin',
    image: '/tech.jpg',
    genre: 'R&B',
    description: 'Smooth vocals with a cosmic twist...',
    votes: 659,
  },
  {
    name: 'Jax Orion',
    image: '/tech.jpg',
    genre: 'Hip-Hop',
    description: 'Futuristic beats. Sharp rhymes...',
    votes: 643,
  },
  {
    name: 'Sera Lune',
    image: '/tech.jpg',
    genre: 'Acoustic',
    description: 'Raw acoustic ballads with haunting harmonies...',
    votes: 611,
  },
  {
    name: 'Leo Vanta',
    image: '/tech.jpg',
    genre: 'Future Bass',
    description: 'Bass-heavy drops and catchy hooks...',
    votes: 599,
  },
  {
    name: 'Aya Rynn',
    image: '/dashboard/category4.jpg',
    genre: 'Neo-Soul',
    description: 'Soulful rhythms and deep lyrical introspection...',
    votes: 512,
  },
  {
    name: 'Zeke Hollow',
    image: '/dashboard/category2.jpg',
    genre: 'Grunge',
    description: 'Dark riffs and emotional depth...',
    votes: 488,
  },
  {
    name: 'Nomi Wav',
    image: '/dashboard/category3.jpg',
    genre: 'Hyperpop',
    description: 'Distorted vocals and glittering chaos...',
    votes: 470,
  },
];



const CommunityTabs = () => {
  const [filter, setFilter] = useState('All');
  const [selectedTab, setSelectedTab] = useState('vote');

  const genres = ['All', 'Electronic', 'Pop', 'Contemporary'];
  const filteredArtists =
    filter === 'All' ? artists : artists.filter((a) => a.genre.includes(filter));

  return (
    <>
      <p className="text-xs capitalize font-medium text-left text-[#A3A3A3] mb-2">Community / <span className='text-white'>{selectedTab}</span>  </p>
      <div className="border-b mt-7">
        <h1 className="text-[#DACFD3] text-3xl font-bold mb-2">Community</h1>
      </div>

      <Tabs
        defaultValue="vote"
        value={selectedTab}
        onValueChange={(value) => {
          setSelectedTab(value);
          console.log('Selected Tab:', value);
        }}
        className="w-full"
      >
        <TabsList className="flex gap-4 py-4">
          <TabsTrigger
            value="vote"
            className="data-[state=active]:bg-[#D2045B] font-medium text-sm cursor-pointer data-[state=active]:text-white text-[#A3A3A3] bg-[#1C2022] px-3 py-2 rounded-xl"
          >
            Vote
          </TabsTrigger>
          <TabsTrigger
            value="leaderboard"
            className="data-[state=active]:bg-[#D2045B] font-medium text-sm cursor-pointer data-[state=active]:text-white text-[#A3A3A3] bg-[#1C2022] px-3 py-2 rounded-xl"
          >
            Leaderboards
          </TabsTrigger>
        </TabsList>

        <TabsContent value="vote">
          <p className="text-white text-sm mb-6">
            The Artist Voting section lets you explore up-and-coming musicians and cast your vote to
            help them gain recognition
          </p>

          <div className="flex flex-col md:flex-row mb-6">
            <div className="flex items-center bg-transparent border rounded-full px-4 py-2 mr-6">
              <FiSearch className="text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Search by artists"
                className="ml-3 w-full bg-transparent outline-none text-sm text-gray-200 placeholder:text-[#A3A3A3]"
              />
            </div>

            <div className="flex gap-2">
              {genres.map((g) => (
                <button
                  key={g}
                  className={`px-4 py-1 font-medium cursor-pointer text-sm rounded-2xl border ${filter === g ? 'bg-[#D2045B] text-white' : 'bg-[#1C2022] text-[#A3A3A3]'}`}
                  onClick={() => setFilter(g)}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
            {filteredArtists.map((artist, i) => (
              <Card
                key={i}
                className="hover:bg-[#1E1E1E] bg-transparent border-none p-4 rounded-xl text-white flex justify-center flex-col items-center"
              >
                <Image
                  src={artist.image}
                  alt={artist.name}
                  width={300}
                  height={300}
                  className="w-2/3 m-auto h-20 object-cover rounded-md"
                />
                <div className="text-[#A3A3A3] text-center -mt-4">
                  <h3 className="text-lg text-white font-bold">{artist.name}</h3>
                  <p className="text-sm font-medium mb-1">{artist.genre}</p>
                  <p className="text-xs mb-1 line-clamp-2">{artist.description}</p>
                  <div className="py-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <SquareCheck size={15} />
                      <span className="text-[10px] ml-1 font-bold">{artist.votes} Votes</span>
                    </div>
                    <div className="flex items-center">
                      <UserRound size={15} />
                      <span className="text-[10px] ml-1 font-bold">1.2k</span>
                    </div>
                    <ShareModal
                      link={`https://audioblocks.com/vote/${artist.name.replace(/\s+/g, '-').toLowerCase()}`}
                    />
                  </div>
                  <button className="mt-auto bg-[#D2045B] w-full hover:bg-pink-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow">
                    Vote
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="leaderboard">
          <p className="text-white text-sm mb-10">
            The Leaderboard highlights our most dedicated music fans! See who’s spending the most
            time listening and engaging with the platform.
          </p>

          <table className="w-full text-sm text-left text-gray-300 border border-gray-800 rounded-lg overflow-hidden">
            <thead className="text-[#A3A3A3] font-semibold text-sm">
              <tr>
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Top Listeners</th>
                <th className="px-6 py-3">Listening Hours</th>
                <th className="px-6 py-3">Onchain Actions</th>
              </tr>
            </thead>
            <tbody>
              {artists.slice(0, 5).map((a: any, i: any) => (
                <tr
                  key={i}
                  className="text-[#666C6C] hover:border cursor-pointer hover:bg-[#121212B8]"
                >
                  <td className="px-6 py-6 font-normal">{i + 1}</td>
                  <td className="px-6 py-6 font-medium text-[#DACFD3]">{a.name}</td>
                  <td className="px-6 py-6">{Math.floor(Math.random() * 1000)} hrs</td>
                  <td className="px-6 py-6">{Math.floor(Math.random() * 100)} txns</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default CommunityTabs;
