'use client';

import { useEffect, useRef, useState } from 'react';
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaRandom,
  FaRedo,
  FaHeart,
  FaVolumeUp,
  FaVolumeMute,
} from 'react-icons/fa';
import Image from 'next/image';
import {
  Dot,
  Ellipsis,
  Heart,
  ListPlus,
  MessageSquare,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
} from 'lucide-react';
import CommentPanel from './dashboard/Comment';

const track = {
  title: 'Relax and Unwind',
  artist: 'Rozé',
  cover: '/AFRO.jpg', // Replace with actual track cover image path
  duration: 207, // in seconds
  url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Replace with actual audio file path
};

export default function Player() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const trackId = 'track-001'

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current && isPlaying) {
        setProgress(audioRef.current.currentTime);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeToggle = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#272727] px-6 py-3 shadow-lg z-50">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Left Controls */}
        <div className="flex items-center gap-3">
          <button className="text-gray-300 hover:text-white">
            <Shuffle size={16} />
          </button>
          <button className="text-gray-300 hover:text-white">
            <SkipBack size={16} />
          </button>
          <button
            onClick={togglePlay}
            className="p-2 rounded-full bg-white flex items-center justify-center"
          >
            {isPlaying ? (
              <FaPause size={14} className="text-gray-500" />
            ) : (
              <FaPlay size={14} className="text-gray-500" />
            )}
          </button>
          <button className="text-gray-300 hover:text-white">
            <SkipForward size={15} />
          </button>
          <button className="text-gray-300 hover:text-white">
            <Repeat size={16} />
          </button>
        </div>
        <div>
          <Image
            src={track.cover}
            alt={track.title}
            width={40}
            height={40}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex items-center gap-4 w-2/5">
          <div className="flex-1">
            <div className="flex items-center justify-center mb-3">
              <div className="text-white font-medium mr-4 text-sm truncate">{track.title}</div>
              <div className="text-gray-400 flex items-center text-xs truncate">
                <Dot size={20} className="mr-4 text-white" /> {track.artist}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-white w-8">{formatTime(progress)}</span>
              <div className="w-full h-1 bg-gray-600 rounded">
                <div
                  className="h-1 bg-[#D2045B] rounded"
                  style={{ width: `${(progress / track.duration) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-white w-8 text-right">
                {formatTime(track.duration)}
              </span>
            </div>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center border-l-2 pl-4 gap-4">
          <button className="text-gray-300 cursor-pointer hover:text-white " onClick={() => setShowComments(true)}>
            <MessageSquare size={16} />
          </button>
          <button className="text-gray-300 cursor-pointer hover:text-white">
            <ListPlus size={16} />
          </button>
          <button className="text-gray-300 cursor-pointer hover:text-white">
            <Heart size={16} />
          </button>
          <button className="text-gray-300 cursor-pointer hover:text-white">
            <Ellipsis size={16} />
          </button>
          <button className="text-gray-300 cursor-pointer hover:text-white" onClick={handleVolumeToggle}>
            {isMuted || volume === 0 ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
          </button>
        </div>

        <audio
          ref={audioRef}
          src={track.url}
          onEnded={() => setIsPlaying(false)}
          onLoadedMetadata={(e) => setProgress(e.currentTarget.currentTime)}
        />
      </div>
      {showComments && <CommentPanel onClose={() => setShowComments(false)} trackId={trackId} />}
    </div>
  );
}
