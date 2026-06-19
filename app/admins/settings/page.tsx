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

export default function SettingsPage() {
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
          className="text-red-400 mt-6 flex items-center gap-2"
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8">

        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <div className="bg-[#181818] p-6 rounded-2xl border border-zinc-800 space-y-4">
          <input className="w-full p-3 bg-black rounded" placeholder="Admin Name" />
          <input className="w-full p-3 bg-black rounded" placeholder="Email" />
          <button className="bg-[#1DB954] px-4 py-2 rounded-xl">
            Save Changes
          </button>
        </div>

      </main>
    </div>
  );
}