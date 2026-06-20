"use client";

import Image from "next/image";
import { usePlayer } from "@/app/context/playercontext";
import {
  IoMdPause,
  IoMdPlay,
  IoMdVolumeHigh,
  IoMdVolumeOff,
} from "react-icons/io";
import { LuRepeat, LuShuffle } from "react-icons/lu";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { Heart } from "lucide-react";

export default function MusicPlayer() {
  const {
    currentSong,
    isPlaying,
    togglePlay,
    currentTime,
    duration,
    seek,
    volume,
    setVolume,
    nextSong,
    prevSong,
    shuffle,
    repeat,
    toggleShuffle,
    toggleRepeat,
  } = usePlayer();

  if (!currentSong) return null;

  const formatTime = (s: number = 0): string => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-zinc-800 bg-[#181818] px-3 py-3 text-white sm:px-5">
      <div className="grid items-center gap-3 md:grid-cols-[1fr_1.5fr_1fr]">
        {/* LEFT */}
        <div className="flex min-w-0 items-center gap-3">
          <Image
            src={currentSong.image || "/album-cover.jpg"}
            alt={currentSong.title}
            width={56}
            height={56}
            className="h-14 w-14 rounded-md object-cover"
          />

          <div className="min-w-0">
            <p className="truncate text-sm font-medium hover:underline">
              {currentSong.title}
            </p>
            <p className="truncate text-xs text-zinc-400 hover:text-white">
              {currentSong.artist}
            </p>
          </div>

          <button className="hidden text-zinc-400 hover:text-white sm:block">
            <Heart size={18} />
          </button>
        </div>

        {/* CENTER */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-5">
            <button
              onClick={toggleShuffle}
              className={shuffle ? "text-[#1DB954]" : "text-zinc-400 hover:text-white"}
            >
              <LuShuffle size={18} />
            </button>

            <button onClick={prevSong} className="text-zinc-400 hover:text-white">
              <IoPlaySkipBack size={24} />
            </button>

            <button
              onClick={togglePlay}
              className="grid h-9 w-9 place-items-center rounded-full bg-white text-black transition hover:scale-105"
            >
              {isPlaying ? <IoMdPause size={20} /> : <IoMdPlay size={20} />}
            </button>

            <button onClick={nextSong} className="text-zinc-400 hover:text-white">
              <IoPlaySkipForward size={24} />
            </button>

            <button
              onClick={toggleRepeat}
              className={
                repeat !== "off" ? "relative text-[#1DB954]" : "text-zinc-400 hover:text-white"
              }
            >
              <LuRepeat size={18} />

              {repeat === "one" && (
                <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#1DB954]" />
              )}
            </button>
          </div>

          <div className="mt-2 flex w-full max-w-xl items-center gap-2">
            <span className="w-10 text-right text-[11px] text-zinc-400">
              {formatTime(currentTime)}
            </span>

            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={(e) => seek(Number(e.target.value))}
              className="h-1 w-full cursor-pointer accent-white"
            />

            <span className="w-10 text-[11px] text-zinc-400">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden items-center justify-end gap-3 md:flex">
          <button
            onClick={() => setVolume(volume === 0 ? 70 : 0)}
            className="text-zinc-400 hover:text-white"
          >
            {volume === 0 ? (
              <IoMdVolumeOff size={22} />
            ) : (
              <IoMdVolumeHigh size={22} />
            )}
          </button>

          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="h-1 w-28 cursor-pointer accent-white"
          />
        </div>
      </div>
    </div>
  );
}