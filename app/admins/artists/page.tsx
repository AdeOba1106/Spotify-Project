"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Music,
  Users,
  ListMusic,
  PlayCircle,
  Bell,
  Search,
  Settings,
  LogOut,
  TrendingUp,
  Plus,
  Mic2,
  Album,
} from "lucide-react";

export default function ArtistsPage() {
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

  const artists = [
    { name: "Burna Boy", listeners: "12.4M" },
    { name: "Rema", listeners: "10.1M" },
    { name: "Davido", listeners: "9.8M" },
    { name: "Wizkid", listeners: "11.2M" },
    { name: "Asake", listeners: "8.6M" },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white flex">

      {/* SIDEBAR */}
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
            className="text-red-400 mt-6 flex items-center gap-2"
          >
            <LogOut size={18} />
            Logout
          </button>
        </aside>

      {/* MAIN */}
      <main className="flex-1 p-8">

        <h1 className="text-2xl font-bold mb-6">Artists</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {artists.map((artist) => (
            <div key={artist.name} className="bg-[#181818] p-6 rounded-2xl border border-zinc-800">
              <h2 className="text-lg font-semibold">{artist.name}</h2>
              <p className="text-zinc-400 mt-2">{artist.listeners} listeners</p>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}