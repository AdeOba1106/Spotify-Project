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

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
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
      soundRef.current.unload();
      soundRef.current = null;
    }

    setIsPlaying(false);
    setCurrentSong(null);
    setCurrentTime(0);
    setDuration(0);
    setQueue([]);
    setCurrentIndex(0);
  };

  const playSong = (song: Song, index = 0, list: Song[] = []) => {
    if (soundRef.current) {
      soundRef.current.stop();
      soundRef.current.unload();
    }

    setQueue(list.length ? list : [song]);
    setCurrentIndex(index);
    setCurrentSong(song);
    setCurrentTime(0);

    const sound = new Howl({
      src: [song.src],
      html5: true,
      volume: volume / 100,

      onload: () => {
        setDuration(sound.duration());
      },

      onend: () => {
        if (repeat === "one") {
          sound.seek(0);
          sound.play();
          return;
        }

        nextSong();
      },
    });

    soundRef.current = sound;
    sound.play();
    setIsPlaying(true);
  };

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

  const nextSong = () => {
    if (!queue.length) {
      stopPlayer();
      return;
    }

    if (repeat === "one" && currentSong) {
      playSong(currentSong, currentIndex, queue);
      return;
    }

    let newIndex = currentIndex;

    if (shuffle) {
      newIndex = Math.floor(Math.random() * queue.length);
    } else if (currentIndex < queue.length - 1) {
      newIndex = currentIndex + 1;
    } else if (repeat === "all") {
      newIndex = 0;
    } else {
      stopPlayer();
      return;
    }

    playSong(queue[newIndex], newIndex, queue);
  };

  const prevSong = () => {
    if (!queue.length) return;

    let newIndex =
      currentIndex > 0
        ? currentIndex - 1
        : repeat === "all"
        ? queue.length - 1
        : 0;

    playSong(queue[newIndex], newIndex, queue);
  };

  const toggleShuffle = () => {
    setShuffle((prev) => !prev);
  };

  const toggleRepeat = () => {
    setRepeat((prev) =>
      prev === "off" ? "all" : prev === "all" ? "one" : "off"
    );
  };

  const seek = (time: number) => {
    soundRef.current?.seek(time);
    setCurrentTime(time);
  };

  const setVolume = (v: number) => {
    setVolumeState(v);
    soundRef.current?.volume(v / 100);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isPlaying && soundRef.current) {
      interval = setInterval(() => {
        const time = soundRef.current?.seek();

        if (typeof time === "number") {
          setCurrentTime(time);
        }
      }, 500);
    }

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      soundRef.current?.stop();
      soundRef.current?.unload();
    };
  }, []);

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

  if (!context) {
    throw new Error("usePlayer must be used inside PlayerProvider");
  }

  return context;
};