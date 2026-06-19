"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Howl } from "howler";

type Song = {
  title: string;
  artist: string;
  src: string;
  image?: string;
};

type PlayerContextType = {
  currentSong: Song | null;
  isPlaying: boolean;

  playSong: (song: Song, index?: number, list?: Song[]) => void;
  togglePlay: () => void;

  nextSong: () => void;
  prevSong: () => void;

  shuffle: boolean;
  repeat: "off" | "all" | "one";

  toggleShuffle: () => void;
  toggleRepeat: () => void;

  currentTime: number;
  duration: number;
  seek: (time: number) => void;

  volume: number;
  setVolume: (v: number) => void;

  stopPlayer: () => void;
};

const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider = ({ children }: any) => {
  const soundRef = useRef<Howl | null>(null);

  const [queue, setQueue] = useState<Song[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState<"off" | "all" | "one">("off");

  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [volume, setVolumeState] = useState(100);

  const stopPlayer = () => {
  if (soundRef.current) {
    soundRef.current.stop();
  }

  setIsPlaying(false);
  setCurrentSong(null);
  setCurrentTime(0);
  setDuration(0);
};

  // 🎵 PLAY SONG
  const playSong = (song: Song, index = 0, list: Song[] = []) => {
    setQueue(list);
    setCurrentIndex(index);
    setCurrentSong(song);

    if (soundRef.current) {
      soundRef.current.stop();
    }

    const sound = new Howl({
      src: [song.src],
      html5: true,
      volume: volume / 100,

      onload: () => {
        setDuration(sound.duration());
      },

      onend: () => {
        nextSong();
      },
    });

    soundRef.current = sound;
    sound.play();
    setIsPlaying(true);
  };

  // ⏯ TOGGLE PLAY
  const togglePlay = () => {
    if (!soundRef.current) return;

    if (isPlaying) {
      soundRef.current.pause();
      setIsPlaying(false);
    } else {
      soundRef.current.play();
      setIsPlaying(true);
    }
  };

  // ⏭ NEXT
  const nextSong = () => {
    if (!queue.length) return;

    let newIndex;

    if (shuffle) {
      newIndex = Math.floor(Math.random() * queue.length);
    } else {
      newIndex =
        currentIndex < queue.length - 1
          ? currentIndex + 1
          : repeat === "all"
          ? 0
          : currentIndex;
    }

    setCurrentIndex(newIndex);
    playSong(queue[newIndex], newIndex, queue);
  };

  // ⏮ PREV
  const prevSong = () => {
    if (!queue.length) return;

    let newIndex =
      currentIndex > 0
        ? currentIndex - 1
        : repeat === "all"
        ? queue.length - 1
        : 0;

    setCurrentIndex(newIndex);
    playSong(queue[newIndex], newIndex, queue);
  };

  // 🔀 SHUFFLE
  const toggleShuffle = () => {
    setShuffle((prev) => !prev);
  };

  // 🔁 REPEAT
  const toggleRepeat = () => {
    setRepeat((prev) =>
      prev === "off" ? "all" : prev === "all" ? "one" : "off"
    );
  };

  // ⏩ SEEK
  const seek = (time: number) => {
    soundRef.current?.seek(time);
    setCurrentTime(time);
  };

  // 🔊 VOLUME
  const setVolume = (v: number) => {
    setVolumeState(v);
    soundRef.current?.volume(v / 100);
  };

  // ⏱ TRACK TIME
  useEffect(() => {
    let interval: any;

    if (isPlaying && soundRef.current) {
      interval = setInterval(() => {
        setCurrentTime(soundRef.current?.seek() as number);
      }, 500);
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        playSong,
        togglePlay,

        nextSong,
        prevSong,

        shuffle,
        repeat,
        toggleShuffle,
        toggleRepeat,

        currentTime,
        duration,
        seek,

        volume,
        setVolume,
        stopPlayer,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) throw new Error("usePlayer must be used inside PlayerProvider");
  return context;
};