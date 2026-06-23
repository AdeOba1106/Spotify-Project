"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, User, Settings, LogOut, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePlayer } from "@/app/context/playercontext";
import { searchTracks, UiSong } from "../api/api";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState<UiSong[]>([]);
  const [searching, setSearching] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { stopPlayer } = usePlayer();

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!searchValue.trim()) {
        setResults([]);
        return;
      }

      try {
        setSearching(true);
        const data = await searchTracks(searchValue, 6);
        setResults(data);
      } catch (error) {
        console.error("Search failed:", error);
        setResults([]);
      } finally {
        setSearching(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

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

  const handleSelectSong = (song: UiSong) => {
    setSearchValue("");
    setResults([]);
    router.push(`/track/${song.id}`);
  };

  const SearchResults = () => (
    <>
      {searchValue && (
        <div className="absolute left-0 top-14 z-50 w-full overflow-hidden rounded-md bg-[#282828] shadow-2xl">
          {searching && (
            <p className="px-4 py-3 text-sm text-gray-400">Searching...</p>
          )}

          {!searching && results.length === 0 && (
            <p className="px-4 py-3 text-sm text-gray-400">No songs found</p>
          )}

          {!searching &&
            results.map((song) => (
              <button
                key={song.id}
                type="button"
                onClick={() => handleSelectSong(song)}
                className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-[#3e3e3e]"
              >
                <Image
                  src={song.image}
                  alt={song.title}
                  width={42}
                  height={42}
                  className="h-[42px] w-[42px] rounded object-cover"
                />

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-white">
                    {song.title}
                  </p>
                  <p className="truncate text-xs text-gray-400">
                    {song.artist}
                  </p>
                </div>
              </button>
            ))}
        </div>
      )}
    </>
  );

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

          <div className="relative hidden w-full max-w-xl md:block">
            <div className="flex items-center rounded-full bg-[#1f1f1f] px-4 py-3">
              <Search size={20} className="text-gray-400" />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="What do you want to play?"
                className="ml-3 w-full bg-transparent text-white placeholder:text-gray-400 focus:outline-none"
              />
            </div>

            <SearchResults />
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm font-semibold sm:gap-5">
          <Link
            href="/components/upgrade"
            className="hidden rounded-full bg-white px-4 py-2 text-black transition hover:scale-105 lg:block"
          >
            Explore Premium
          </Link>

          <a
            href="https://www.spotify.com/download"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 opacity-75 transition hover:scale-105 hover:opacity-100 lg:flex"
          >
            <Image
              src="/icons8-insert-100.png"
              alt="Install App"
              width={20}
              height={20}
            />
            <p>Install App</p>
          </a>

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

      <div className="relative px-3 pb-3 md:hidden">
        <div className="flex items-center rounded-full bg-[#1f1f1f] px-4 py-3">
          <Search size={20} className="text-gray-400" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="What do you want to play?"
            className="ml-3 w-full bg-transparent text-sm text-white placeholder:text-gray-400 focus:outline-none"
          />
        </div>

        <SearchResults />
      </div>
    </nav>
  );
}