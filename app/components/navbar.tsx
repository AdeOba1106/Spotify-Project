"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, User, Settings, LogOut } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-black">
      <div className="flex w-full justify-between items-center p-3 px-4">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4 flex-1 max-w-xl">
          <Image
            src="/icons8-spotify-96.png"
            alt="Spotify"
            width={40}
            height={40}
            className="cursor-pointer"
          />

          <Image
            src="/icons8-home-48.png"
            alt="Home"
            width={40}
            height={40}
            className="bg-[#1f1f1f] p-2 rounded-full cursor-pointer invert"
          />

          {/* Fixed the w-110 bug with w-full + a parent max-width container */}
          <input
            type="text"
            placeholder="What do you want to play?"
            className="text-white placeholder:text-gray-400 bg-[#1f1f1f] focus:outline-none focus:ring-2 focus:ring-white p-3 px-5 w-full rounded-full opacity-75 focus:opacity-100 shadow-2xl transition-all duration-200"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center text-sm font-semibold gap-6 text-white">
          <p className="text-black bg-white rounded-full px-4 py-2 cursor-pointer transition-transform duration-300 hover:scale-105">
            Explore premium
          </p>

          <div className="flex items-center opacity-75 hover:opacity-100 gap-2 cursor-pointer transition-transform duration-300 hover:scale-105">
            <Image
              src="/icons8-insert-100.png"
              alt="Install"
              width={20}
              height={20}
            />
            <p>Install App</p>
          </div>

          <Image
            src="/icons8-notification-bell-100.png"
            alt="Notifications"
            width={20}
            height={20}
            className="opacity-75 hover:opacity-100 cursor-pointer transition-transform duration-300 hover:scale-110"
          />

          <Image
            src="/icons8-friends-100.png"
            alt="Friends"
            width={20}
            height={20}
            className="opacity-75 hover:opacity-100 cursor-pointer transition-transform duration-300 hover:scale-110 invert"
          />

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 bg-black hover:bg-[#1f1f1f] rounded-full p-1 transition"
            >
              <div className="bg-[#a00772] rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                A
              </div>

              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <div className="absolute right-0 top-12 w-56 bg-[#282828] rounded-md shadow-2xl overflow-hidden z-50 border border-zinc-700">
                <button className="w-full text-left px-4 py-3 hover:bg-[#3e3e3e] flex items-center gap-3">
                  <User size={18} />
                   <Link href="/app/components/account">Account</Link>
                </button>

                <button className="w-full text-left px-4 py-3 hover:bg-[#3e3e3e] flex items-center gap-3">
                  <Settings size={18} />
                  Settings
                </button>

                <button className="w-full text-left px-4 py-3 hover:bg-[#3e3e3e]">
                  Upgrade to Premium
                </button>

                <button className="w-full text-left px-4 py-3 hover:bg-[#3e3e3e]">
                  Profile
                </button>

                <hr className="border-zinc-700" />

                <button className="w-full text-left px-4 py-3 hover:bg-[#3e3e3e] text-red-400 flex items-center gap-3">
                  <LogOut size={18} />
                  <Link href="/login">Log out</Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
