"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Music,
  Users,
  ListMusic,
  PlayCircle,
  Settings,
  LogOut,
  TrendingUp,
  Mic2,
  Album,
} from "lucide-react";

export default function AlbumsPage() {
  const pathname = usePathname();
  const router = useRouter();

  const menu = [
    { name: "Dashboard", href: "/admins", icon: <Music size={18} /> },
    { name: "Songs", href: "/admins/songs", icon: <Mic2 size={18} /> },
    { name: "Artists", href: "/admins/artists", icon: <Users size={18} /> },
    { name: "Albums", href: "/admins/albums", icon: <Album size={18} /> },
    { name: "Playlists", href: "/admins/playlists", icon: <ListMusic size={18} /> },
    { name: "Users", href: "/admins/users", icon: <Users size={18} /> },
    { name: "Analytics", href: "/admins/analytics", icon: <TrendingUp size={18} /> },
    { name: "Settings", href: "/admins/settings", icon: <Settings size={18} /> },
  ];

  const albums = [
    { title: "Timeless", artist: "Davido", year: 2023 },
    { title: "Mr. Money With The Vibe", artist: "Asake", year: 2022 },
    { title: "Made in Lagos", artist: "Wizkid", year: 2020 },
    { title: "Love, Damini", artist: "Burna Boy", year: 2022 },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white flex">

      {/* SIDEBAR */}
      <aside className="w-64 h-screen sticky top-0 bg-[#181818] border-r border-zinc-800 p-6 flex flex-col">

        <div className="flex items-center gap-2 mb-10">
                 <div className="w-9 h-9 bg-[#1DB954] rounded-lg flex items-center justify-center">
                    <Image
                               src="/icons8-spotify-96.png"
                               alt="Spotify"
                               width={40}
                               height={40}
                               className=" h-auto w-8 cursor-pointer"
                             />
                 </div>
                 <h1 className="text-xl font-bold">Spotify Admin</h1>
               </div>
       

        <nav className="space-y-2 flex-1">
          {menu.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 p-3 rounded-xl
                ${isActive ? "bg-[#1DB954] text-black" : "text-zinc-300 hover:bg-zinc-800"}`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => router.push("/login")}
          className="flex items-center gap-2 text-red-400 mt-6"
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8">

        <h1 className="text-2xl font-bold mb-6">Albums</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {albums.map((album) => (
            <div
              key={album.title}
              className="bg-[#181818] p-6 rounded-2xl border border-zinc-800 hover:bg-zinc-900 transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <Album className="text-[#1DB954]" />
                <h2 className="text-lg font-semibold">{album.title}</h2>
              </div>

              <p className="text-zinc-400">{album.artist}</p>
              <p className="text-zinc-500 text-sm mt-2">{album.year}</p>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}