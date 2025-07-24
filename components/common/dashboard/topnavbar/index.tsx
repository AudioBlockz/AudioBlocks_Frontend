'use client';

import { FiSearch } from 'react-icons/fi';
import { Bell } from 'lucide-react';
import Image from 'next/image';
import UserMenu from './UserMenu';

const TopNavbar = () => {
  return (
    <header className="w-full px-4 md:px-6 py-4 shadow-md bg-[#161616] flex items-center justify-between">
      {/* Left Side: Welcome + Date */}
      <div>
        <h2 className="text-sm md:text-base font-semibold">Welcome, Pete Lisk</h2>
        <p className="text-xs text-gray-400">May 2025 | 11:00 AM GMT</p>
      </div>

      {/* Center: Search */}
      <div className="flex-1 mx-4 max-w-2xl hidden md:flex">
        <div className="flex items-center w-full bg-[#1E1E1E] rounded-xl px-4 py-2">
          <FiSearch className="text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search by artists, songs or albums"
            className="ml-3 w-full bg-transparent outline-none text-sm text-gray-200 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Right: Notifications + Avatar */}
      <div className="flex items-center gap-4">
        <button className="relative">
          <Bell className="text-white" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <UserMenu />
      </div>
    </header>
  );
};

export default TopNavbar;
