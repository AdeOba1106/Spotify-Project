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
    <div className="fixed bottom-0 left-0 w-full h-24 bg-[#181818] border-t border-zinc-800 z-50 flex items-center px-4">

      {/* LEFT - SONG INFO */}
      <div className="flex items-center gap-3 w-[30%]">
        <Image
          src={currentSong.image || "/album-cover.jpg"}
          alt="song image"
          width={56}
          height={56}
          className="rounded-md"
        />

        <div className="leading-tight">
          <p className="text-white text-sm font-medium hover:underline cursor-pointer">
            {currentSong.title}
          </p>
          <p className="text-zinc-400 text-xs hover:text-white cursor-pointer">
            {currentSong.artist}
          </p>
        </div>
      </div>

      {/* CENTER - CONTROLS */}
      <div className="flex flex-col items-center w-[40%]">

        {/* CONTROL BUTTONS */}
        <div className="flex items-center gap-5 text-white">

          {/* SHUFFLE */}
          <button
            onClick={toggleShuffle}
            className={`transition ${
              shuffle ? "text-green-500" : "text-zinc-400 hover:text-white"
            }`}
          >
            <LuShuffle size={20} />
          </button>

          {/* PREVIOUS */}
          <button
            onClick={prevSong}
            className="text-zinc-400 hover:text-white transition"
          >
            <IoPlaySkipBack size={22} />
          </button>

          {/* PLAY / PAUSE */}
          <button
            onClick={togglePlay}
            className="bg-white text-black p-3 rounded-full hover:scale-105 active:scale-95 transition"
          >
            {isPlaying ? <IoMdPause size={18} /> : <IoMdPlay size={18} />}
          </button>

          {/* NEXT */}
          <button
            onClick={nextSong}
            className="text-zinc-400 hover:text-white transition"
          >
            <IoPlaySkipForward size={22} />
          </button>

          {/* REPEAT */}
          <button
            onClick={toggleRepeat}
            className={`relative transition ${
              repeat !== "off"
                ? "text-green-500"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <LuRepeat size={20} />

            {repeat === "one" && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full"></span>
            )}
          </button>
        </div>

        {/* PROGRESS BAR */}
        <div className="flex items-center gap-2 w-full mt-2">

          <span className="text-[11px] text-zinc-400 w-10 text-right">
            {formatTime(currentTime)}
          </span>

          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={(e) => seek(Number(e.target.value))}
            className="w-full accent-white h-1 cursor-pointer"
          />

          <span className="text-[11px] text-zinc-400 w-10">
            {formatTime(duration)}
          </span>

        </div>
      </div>

      {/* RIGHT - VOLUME */}
      <div className="flex items-center justify-end gap-3 w-[30%]">

        <button className="text-zinc-400 hover:text-white transition">
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
          className="w-[100px] accent-white h-[3px] cursor-pointer"
        />
      </div>
    </div>
  );
}