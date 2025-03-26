'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import { Home, PlusCircle, Video } from 'lucide-react';

function SideNav({ isOpen, toggleSidebar }) {
  const { user } = useUser();
  const sideNavRef = useRef();

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        sideNavRef.current &&
        !sideNavRef.current.contains(event.target)
      ) {
        toggleSidebar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, toggleSidebar]);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden" />
      )}

      {/* Sidebar */}
      <aside
        ref={sideNavRef}
        className={`fixed top-0 left-0 h-full w-64 bg-[#0f172a] text-white p-6 flex flex-col justify-between z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:block`}
      >
        <div>
          <h1 className="text-2xl font-bold mb-8">AI Shorts</h1>
          <nav className="space-y-4">
            <Link href="/dashboard" className="flex items-center gap-2 hover:text-indigo-400 transition">
              <Home size={20} /> Dashboard
            </Link>
            <Link href="/dashboard/createnew" className="flex items-center gap-2 hover:text-indigo-400 transition">
              <PlusCircle size={20} /> Create Video
            </Link>
            <Link href="/my-videos" className="flex items-center gap-2 hover:text-indigo-400 transition">
              <Video size={20} /> My Videos
            </Link>
          </nav>
        </div>

        {/* User Info at Bottom */}
        <div className="mt-auto pt-90 flex items-center gap-3">
          <UserButton afterSignOutUrl="/" />
          <div className="text-sm">
            <p className="font-medium">{user?.fullName || 'Guest'}</p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default SideNav;
