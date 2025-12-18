'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { ArrowRight, Play, Pause } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Hls from 'hls.js';

const albums = {
  latest: [
    {
      title: 'Echoes of the Soul',
      artist: 'Misty Brown',
      tag: 'New Album',
      image: '/home/sound.jpg',
      song: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8', // HLS example
    },
    {
      title: 'Lost Horizons',
      artist: 'Kai Nova',
      tag: 'Featured',
      image: '/home/sound.jpg',
      song: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    },
  ],
  trending: [
    {
      title: 'Solar Flare',
      artist: 'Lenny S.',
      tag: 'Trending Now',
      image: '/home/sound.jpg',
      song: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    },
  ],
  popular: [
    {
      title: 'Golden Hour',
      artist: 'Nova',
      tag: 'Top Chart',
      image: '/home/sound.jpg',
      song: 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Jahzzar/Tumbling_Dishes_Like_Old-Mans_Wishes/Jahzzar_-_Siesta.mp3',
    },
  ],
};

export default function SoundsSection() {
  const [activeTab, setActiveTab] = useState('latest');
  const [currentSong, setCurrentSong] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [pausedTime, setPausedTime] = useState(0); // store where playback stopped

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hlsRef = useRef<Hls | null>(null);

  const playSong = async (songUrl: string) => {
    const audio = audioRef.current;
    if (!audio) return;

    // if same song is playing -> toggle pause/play
    if (currentSong === songUrl) {
      if (audio.paused) {
        // resume from paused position
        audio.currentTime = pausedTime;
        await audio.play();
      } else {
        // pause and save current time
        setPausedTime(audio.currentTime);
        audio.pause();
      }
      return;
    }

    // different song selected
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    setProgress(0);
    setPausedTime(0);

    if (Hls.isSupported() && songUrl.endsWith('.m3u8')) {
      const hls = new Hls();
      hls.loadSource(songUrl);
      hls.attachMedia(audio);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        audio.play();
      });
      hlsRef.current = hls;
    } else {
      audio.src = songUrl;
      await audio.play();
    }

    setCurrentSong(songUrl);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) setProgress((audio.currentTime / audio.duration) * 100);
    };

    const resetSong = () => {
      setCurrentSong(null);
      setProgress(0);
      setPausedTime(0);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', resetSong);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', resetSong);
    };
  }, []);

  return (
    <section className="text-white w-4/5 mx-auto py-5">
      <audio ref={audioRef} hidden />
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-semibold text-[#A3A3A3] text-4xl leading-[100%] capitalize font-poppins">
          Sounds <span className="text-white">You Shouldn’t </span> Miss
        </h1>
        <Link
          href="#"
          className="bg-[#1E181D] hover:bg-[#885FA8] text-[#F2AFC9] hover:text-[#1E181D] cursor-pointer rounded-full p-5 transition-all"
        >
          <ArrowRight className="text-7xl -rotate-45" />
        </Link>
      </div>

      <Tabs.Root
        value={activeTab}
        onValueChange={setActiveTab}
        className="flex md:flex-row flex-col relative gap-10"
      >
        <div className="absolute -z-10 md:-left-90 -left-14 top-2 bg-[#490D3E80] rounded-full w-70 md:w-100 h-100 blur-[150px]" />

        {/* Tabs Triggers */}
        <Tabs.List className="flex flex-row md:flex-col gap-4">
          {Object.keys(albums).map((type) => (
            <Tabs.Trigger
              key={type}
              value={type}
              className="capitalize px-4 py-1 rounded-full text-sm font-medium transition-all focus:outline-none data-[state=active]:bg-[#D2045B]"
            >
              {type}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {/* Tabs Content */}
        <div className="flex-1 overflow-hidden relative">
          <AnimatePresence mode="wait">
            {Object.entries(albums).map(([key, items]) =>
              key === activeTab ? (
                <Tabs.Content
                  value={key}
                  key={key}
                  forceMount
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                >
                  {items.map((item, index) => {
                    const isPlaying = currentSong === item.song && !audioRef.current?.paused;
                      const isActive = currentSong === item.song;
                    return (
                      <div
                        key={index}
                        onClick={() => playSong(item.song)}
                        className="relative group rounded-2xl overflow-hidden shadow-md cursor-pointer"
                      >
                        <div className="relative">
                          <div className="relative w-full h-48 rounded-2xl overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-300 md:group-hover:scale-105"
                            />
                          </div>

                          {/* Overlay */}
                          <div
                            className={`
    absolute inset-0 flex flex-col items-center justify-center space-y-3
    transition-all
    ${isActive ? 'opacity-100 bg-black/40' : 'opacity-0 md:group-hover:opacity-100 bg-black/30'}
  `}
                          >
                            {isPlaying ? (
                              <Pause className="text-white w-10 h-10" />
                            ) : (
                              <Play className="text-white w-10 h-10" />
                            )}

                           {isActive && (
        <div className="w-2/3 h-1.5 bg-white/30 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'linear', duration: 0.1 }}
            className="h-full bg-[#FF4FA3]"
          />
        </div>
      )}
                          </div>
                        </div>

                        <div className="py-4">
                          <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                          <p className="text-[#A3A3A3] text-xs">{item.artist}</p>
                          <p className="text-white text-xs">{item.tag}</p>
                        </div>
                      </div>
                    );
                  })}
                </Tabs.Content>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </Tabs.Root>
    </section>
  );
}
