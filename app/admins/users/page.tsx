"use client";

import {
  Users,
  Search,
  Trash2,
  Plus,
} from "lucide-react";
import {
  Music,
  Users as UsersIcon,
  ListMusic,
  PlayCircle,
  TrendingUp,
  Settings,
  LogOut,
  Mic2,
  Album,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function UsersPage() {
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

  const users = [
    { id: 1, name: "John Doe", email: "john@email.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@email.com", status: "Active" },
    { id: 3, name: "Mike Ross", email: "mike@email.com", status: "Blocked" },
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
          className="flex items-center gap-2 text-red-400"
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8">

        {/* HEADER */}
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Users /> Users
          </h1>

          <button className="bg-[#1DB954] px-4 py-2 rounded-xl flex items-center gap-2">
            <Plus size={18} />
            Add User
          </button>
        </div>

        {/* SEARCH */}
        <div className="flex items-center bg-[#181818] px-4 py-3 rounded-xl mb-6 w-[400px]">
          <Search size={18} />
          <input
            placeholder="Search users..."
            className="bg-transparent outline-none ml-3 w-full"
          />
        </div>

        {/* TABLE */}
        <div className="bg-[#181818] rounded-xl p-6">
          <table className="w-full">
            <thead className="text-zinc-400">
              <tr>
                <th className="text-left">Name</th>
                <th className="text-left">Email</th>
                <th className="text-left">Status</th>
                <th className="text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-t border-zinc-800">
                  <td className="py-3">{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.status}</td>
                  <td>
                    <button className="text-red-400">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}