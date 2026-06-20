"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, User, Settings, LogOut, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePlayer } from "@/app/context/playercontext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { stopPlayer } = usePlayer();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    stopPlayer();
    setOpen(false);
    router.push("/login");
  };

  return (
    <nav className="w-full bg-black text-white">
      <div className="flex w-full items-center justify-between gap-3 px-3 py-3 sm:px-4">
        <div className="flex flex-1 items-center gap-3">
          <Link href="/">
            <Image
              src="/icons8-spotify-96.png"
              alt="Spotify"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>

          <Link href="/" className="hidden sm:block">
            <Image
              src="/icons8-home-48.png"
              alt="Home"
              width={40}
              height={40}
              className="rounded-full bg-[#1f1f1f] p-2 invert"
            />
          </Link>

          <div className="hidden w-full max-w-xl items-center rounded-full bg-[#1f1f1f] px-4 py-3 md:flex">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="What do you want to play?"
              className="ml-3 w-full bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm font-semibold sm:gap-5">
          <Link
            href="/components/upgrade"
            className="hidden rounded-full bg-white px-4 py-2 text-black transition hover:scale-105 lg:block"
          >
            Explore Premium
          </Link>

          <div className="hidden cursor-pointer items-center gap-2 opacity-75 transition hover:scale-105 hover:opacity-100 lg:flex">
            <Image
              src="/icons8-insert-100.png"
              alt="Install"
              width={20}
              height={20}
            />
            <p>Install App</p>
          </div>

        
          <Image
            src="/icons8-friends-100.png"
            alt="Friends"
            width={20}
            height={20}
            className="hidden cursor-pointer invert opacity-75 transition hover:scale-110 hover:opacity-100 sm:block"
          />

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 rounded-full bg-black p-1 transition hover:bg-[#1f1f1f]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a00772] font-bold">
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
              <div className="absolute right-0 top-12 z-50 w-56 overflow-hidden rounded-md border border-zinc-700 bg-[#282828] shadow-2xl">
                <Link
                  href="/components/account"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-[#3e3e3e]"
                >
                  <User size={18} />
                  Account
                </Link>

                <Link
                  href="/components/profile"
                  className="block px-4 py-3 hover:bg-[#3e3e3e]"
                >
                  Profile
                </Link>

                <Link
                  href="/components/settings"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-[#3e3e3e]"
                >
                  <Settings size={18} />
                  Settings
                </Link>

                <Link
                  href="/components/upgrade"
                  className="block px-4 py-3 hover:bg-[#3e3e3e] lg:hidden"
                >
                  Upgrade to Premium
                </Link>

                <hr className="border-zinc-700" />

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left text-red-400 hover:bg-[#3e3e3e]"
                >
                  <LogOut size={18} />
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-3 pb-3 md:hidden">
        <div className="flex items-center rounded-full bg-[#1f1f1f] px-4 py-3">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="ml-3 w-full bg-transparent text-sm text-white placeholder:text-gray-400 focus:outline-none"
          />
        </div>
      </div>
    </nav>
  );
}