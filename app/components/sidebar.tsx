"use client";

import { usePlayer } from "@/app/context/playercontext";
import Image from "next/image";
import { Link, Plus } from "lucide-react";
import { useEffect, useState } from "react";
// import {
// getTrendingTracks,
// getTrendingByGenre,
// type UiSong,
// } from "@/app/lib/audius";

import { getTrendingTracks, getTrendingByGenre, type UiSong } from "../api/api";

export default function sidebar() {
  const { playSong } = usePlayer();

  // These now hold live Audius data, same shape your JSX already expects:
  // { id, title, artist, src, image }
  const [songs, setSongs] = useState<UiSong[]>([]);
  const [playlists, setPlaylists] = useState<UiSong[]>([]);

  // One row per genre, keyed by section title, so each section looks distinct
  const [sectionTracks, setSectionTracks] = useState<Record<string, UiSong[]>>({
    "Made For You": [],
    "Recently played": [],
    "Your top mixes": [],
    "Recommended radio": [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        setLoading(true);

        // Sidebar "Your Library" -> general trending
        const trending = await getTrendingTracks({ limit: 10 });

        // Playlist grid -> a different slice of trending so it doesn't
        // look identical to the sidebar
        const trendingForGrid = await getTrendingTracks({ limit: 8 });

        // Each scroll section pulls a different genre so they feel distinct.
        // Swap these genre strings for whatever fits your app best.
        const [madeForYou, recentlyPlayed, topMixes, recommendedRadio] =
          await Promise.all([
            getTrendingByGenre("Electronic", 20),
            getTrendingByGenre("Hip-Hop/Rap", 20),
            getTrendingByGenre("Pop", 20),
            getTrendingByGenre("R&B/Soul", 20),
          ]);

        if (!isMounted) return;

        setSongs(trending);
        setPlaylists(trendingForGrid);
        setSectionTracks({
          "Made For You": madeForYou,
          "Recently played": recentlyPlayed,
          "Your top mixes": topMixes,
          "Recommended radio": recommendedRadio,
        });
        setError(null);
      } catch (err: any) {
        console.error("Failed to load Audius tracks:", err);
        if (isMounted) setError("Couldn't load tracks right now.");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="flex gap-2 px-2">
      {/* SIDEBAR */}
      <div className="hidden lg:flex w-[292px] bg-[#1a1a1a] h-screen rounded-2xl p-4 flex-col shrink-0">
        <div className="flex justify-between items-center text-white p-3">
          <h2 className="text-[16px] font-bold">Your Library</h2>

          <Link href="/upload-song">
            <Plus />
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto">
          {loading && (
            <p className="text-zinc-400 text-sm px-2 py-3">Loading...</p>
          )}

          {!loading && error && (
            <p className="text-red-400 text-sm px-2 py-3">{error}</p>
          )}

          {!loading &&
            !error &&
            songs.map((song) => (
              <div
                key={song.id}
                onClick={() =>
                  playSong({
                    title: song.title,
                    artist: song.artist,
                    src: song.src,
                    image: song.image,
                  })
                }
                className="flex items-center gap-3 px-2 py-3 hover:bg-zinc-800 rounded-md cursor-pointer"
              >
                <div className="w-12 h-12 overflow-hidden border border-zinc-600 rounded-full shrink-0">
                  <Image
                    src={song.image}
                    alt={song.title}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-white text-sm font-medium truncate">
                    {song.title}
                  </h3>
                  <p className="text-zinc-400 text-xs truncate">
                    {song.artist}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* MOBILE LIBRARY BUTTON */}
      <Link
        href="/upload-song"
        className="fixed bottom-24 left-5 bg-black w-10 h-10 grid place-items-center text-white rounded-full z-50 cursor-pointer lg:hidden"
      >
        <Plus />
      </Link>

      {/* MAIN CONTENT */}
      <div className="flex-1 rounded-2xl h-screen overflow-y-auto overflow-x-hidden bg-[#1a1a1a]">
        {/* FILTER BUTTONS */}
        <div className="flex w-full rounded-t-2xl bg-[#1a1a1a] items-center gap-2 px-4 py-3 sticky top-0 z-10 overflow-x-auto">
          <button className="bg-[#333] hover:bg-[#444] rounded-full text-sm text-white py-2 px-4 shrink-0">
            All
          </button>
          <button className="bg-[#333] hover:bg-[#444] rounded-full text-sm text-white py-2 px-4 shrink-0">
            Music
          </button>
          <button className="bg-[#333] hover:bg-[#444] rounded-full text-sm text-white py-2 px-4 shrink-0">
            Podcast
          </button>
        </div>

        {/* PLAYLIST GRID */}
        <div className="px-3 sm:px-4 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              onClick={() =>
                playSong({
                  title: playlist.title,
                  artist: playlist.artist,
                  src: playlist.src,
                  image: playlist.image,
                })
              }
              className="flex items-center cursor-pointer h-16 relative group bg-[#2a2a2a] rounded-md overflow-hidden hover:bg-[#333] transition"
            >
              <Image
                src={playlist.image}
                alt={playlist.title}
                width={64}
                height={64}
                className="h-16 w-16 object-cover shrink-0"
              />

              <p className="text-white text-sm px-3 font-bold truncate">
                {playlist.title}
              </p>

              <button className="absolute right-3 bg-green-500 text-black w-9 h-9 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                ▶
              </button>
            </div>
          ))}
        </div>

        {/* SECTIONS cool */}
        {[
          "Made For You",
          "Recently played",
          "Your top mixes",
          "Recommended radio",
        ].map((section) => (
          <div key={section} className="px-4 sm:px-6 lg:px-8 mt-6">
            <p className="text-white text-xl sm:text-2xl font-bold mb-3">
              {section}
            </p>

            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
              {sectionTracks[section]?.map((mix) => (
                <div
                  key={mix.id}
                  onClick={() =>
                    playSong({
                      title: mix.title,
                      artist: mix.artist,
                      src: mix.src,
                      image: mix.image,
                    })
                  }
                  className="relative group shrink-0 w-[145px] sm:w-[170px] md:w-[180px] rounded-lg p-3 hover:bg-[#2a2a2a] cursor-pointer"
                >
                  <div className="relative w-full aspect-square rounded-md overflow-hidden">
                    <Image
                      src={mix.image}
                      alt={mix.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* test */}
                  <button className="absolute top-[105px] sm:top-[130px] right-4 bg-green-500 text-black w-10 h-10 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    ▶
                  </button>

                  <h3 className="text-white font-semibold mt-3 truncate">
                    {mix.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-1 line-clamp-2 whitespace-normal">
                    {mix.description || mix.artist}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
