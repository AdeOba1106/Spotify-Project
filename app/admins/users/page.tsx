"use client";

import { useState } from "react";
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
  X,
} from "lucide-react";

export default function AdminDashboard() {
  const pathname = usePathname();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const stats = [
    { title: "Total Songs", value: "12,584", icon: <Music size={24} /> },
    { title: "Users", value: "8,291", icon: <Users size={24} /> },
    { title: "Playlists", value: "1,245", icon: <ListMusic size={24} /> },
    { title: "Streams", value: "1.2M", icon: <PlayCircle size={24} /> },
  ];

  const songs = [
    { id: 1, title: "Calm Down", artist: "Rema", plays: "950K", status: "Active" },
    { id: 2, title: "Last Last", artist: "Burna Boy", plays: "700K", status: "Active" },
    { id: 3, title: "Unavailable", artist: "Davido", plays: "500K", status: "Active" },
  ];

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
              className="h-auto w-8 cursor-pointer"
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
                className={`flex items-center gap-3 p-3 rounded-xl transition ${
                  isActive
                    ? "bg-[#1DB954] text-black font-semibold"
                    : "text-zinc-300 hover:bg-zinc-800"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => router.push("/login")}
          className="flex items-center gap-2 text-red-400 hover:text-red-500 mt-6"
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-8">
        {/* TOP BAR */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center bg-[#181818] px-4 py-3 rounded-xl w-[400px]">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search songs, artists..."
              className="bg-transparent outline-none ml-3 w-full"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#1DB954] hover:bg-green-500 text-black font-semibold px-4 py-2 rounded-xl flex items-center gap-2"
            >
              <Plus size={18} />
              Add Song
            </button>

            <Bell className="cursor-pointer" />

            <img
              src="https://i.pravatar.cc/100"
              alt="admin"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* STATS */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8">
          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-[#181818] p-6 rounded-2xl border border-zinc-800"
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-zinc-400">{item.title}</p>
                  <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
                </div>

                <div className="text-[#1DB954]">{item.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ANALYTICS */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-[#181818] rounded-2xl p-6 border border-zinc-800">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="text-[#1DB954]" />
              <h2 className="text-xl font-semibold">Streaming Analytics</h2>
            </div>

            <div className="h-64 flex items-end gap-4">
              {[30, 60, 45, 90, 70, 120, 80].map((h, i) => (
                <div
                  key={i}
                  className="bg-[#1DB954] flex-1 rounded-t-lg"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="bg-[#181818] rounded-2xl p-6 border border-zinc-800">
            <h2 className="text-xl font-semibold mb-5">Top Artists</h2>

            <div className="space-y-4">
              {["Burna Boy", "Rema", "Davido", "Asake", "Wizkid"].map(
                (artist, i) => (
                  <div key={artist} className="flex justify-between">
                    <span>
                      {i + 1}. {artist}
                    </span>
                    <span className="text-[#1DB954]">
                      {(2.5 - i * 0.3).toFixed(1)}M
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* SONGS */}
        <div className="bg-[#181818] rounded-2xl border border-zinc-800 p-6 overflow-x-auto">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Music className="text-[#1DB954]" />
            Recent Songs
          </h2>

          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="text-zinc-400 border-b border-zinc-800">
                <th className="text-left py-4">Song</th>
                <th className="text-left">Artist</th>
                <th className="text-left">Plays</th>
                <th className="text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {songs.map((song) => (
                <tr
                  key={song.id}
                  className="border-b border-zinc-900 hover:bg-zinc-900 transition"
                >
                  <td className="py-4">{song.title}</td>
                  <td>{song.artist}</td>
                  <td>{song.plays}</td>
                  <td>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                      {song.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="w-full max-w-lg rounded-2xl bg-[#181818] border border-zinc-800 p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Add New Song</h2>

              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-zinc-400 hover:text-white"
              >
                <X size={22} />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowModal(false);
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Song Title"
                className="w-full bg-[#282828] p-3 rounded-xl outline-none focus:ring-2 focus:ring-[#1DB954]"
              />

              <input
                type="text"
                placeholder="Artist Name"
                className="w-full bg-[#282828] p-3 rounded-xl outline-none focus:ring-2 focus:ring-[#1DB954]"
              />

              <input
                type="text"
                placeholder="Album Name"
                className="w-full bg-[#282828] p-3 rounded-xl outline-none focus:ring-2 focus:ring-[#1DB954]"
              />

              <input
                type="file"
                accept="image/*"
                className="w-full bg-[#282828] p-3 rounded-xl"
              />

              <input
                type="file"
                accept="audio/*"
                className="w-full bg-[#282828] p-3 rounded-xl"
              />

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2 rounded-xl bg-zinc-700 hover:bg-zinc-600"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#1DB954] text-black font-semibold hover:bg-green-500"
                >
                  Upload Song
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}