'use client';

import React from 'react';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { Menu } from 'lucide-react';

function Header({ toggleSidebar }) {
  return (
    <header className="w-full px-6 py-2 border-b flex items-center justify-between bg-gradient-to-r from-[#1d1d1f] to-[#3b82f6]">
      <button
        className="md:hidden text-white"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>

      {/* Logo + Title */}
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-full" />
        <span className="text-white text-lg font-semibold">AI Shorts</span>
      </div>

      {/* Search Bar */}
<div className="flex-1 mx-6 hidden md:block">
  <input
    type="text"
    placeholder="Search..."
    className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-transparent text-white placeholder-white"
  />
</div>


      {/* User */}
      <div className="scale-125">
        <UserButton />
      </div>
    </header>
  );
}

export default Header;
