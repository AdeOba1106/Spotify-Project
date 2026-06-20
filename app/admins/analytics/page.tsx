"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Music,
  Users,
  ListMusic,
  Settings,
  LogOut,
  TrendingUp,
  Mic2,
  Album,
  PlayCircle,
  Clock,
  Headphones,
  Download,
} from "lucide-react";

export default function AnalyticsPage() {
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

  const stats = [
    { title: "Total Streams", value: "1.2M", icon: <PlayCircle size={24} /> },
    { title: "Active Listeners", value: "84.5K", icon: <Headphones size={24} /> },
    { title: "Avg. Listen Time", value: "3m 45s", icon: <Clock size={24} /> },
    { title: "Downloads", value: "42.8K", icon: <Download size={24} /> },
  ];

  const monthlyStreams = [45, 70, 55, 90, 65, 120, 95, 140, 110, 160, 130, 180];

  const topSongs = [
    { title: "Calm Down", artist: "Rema", streams: "950K" },
    { title: "Last Last", artist: "Burna Boy", streams: "700K" },
    { title: "Unavailable", artist: "Davido", streams: "500K" },
    { title: "Lonely At The Top", artist: "Asake", streams: "420K" },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white flex">
      {/* SIDEBAR */}
      <aside className="hidden lg:flex w-64 h-screen sticky top-0 bg-[#181818] border-r border-zinc-800 p-6 flex-col">
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
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-x-hidden">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="text-zinc-400 mt-1">
              Track streams, listeners and music performance.
            </p>
          </div>

          <button className="w-fit rounded-xl bg-[#1DB954] px-5 py-3 font-semibold text-black hover:bg-green-500">
            Export Report
          </button>
        </div>

        {/* STATS */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 mb-8">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-800 bg-[#181818] p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400">{item.title}</p>
                  <h2 className="mt-2 text-2xl font-bold">{item.value}</h2>
                </div>

                <div className="text-[#1DB954]">{item.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CHART + TOP SONGS */}
        <div className="grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2 rounded-2xl border border-zinc-800 bg-[#181818] p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">Monthly Streams</h2>
                <p className="text-sm text-zinc-400">
                  Performance over the last 12 months
                </p>
              </div>

              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                +24.8%
              </span>
            </div>

            <div className="flex h-72 items-end gap-3">
              {monthlyStreams.map((height, index) => (
                <div key={index} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-lg bg-[#1DB954] hover:bg-green-400 transition"
                    style={{ height: `${height}px` }}
                  />
                  <span className="text-xs text-zinc-500">
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#181818] p-6">
            <h2 className="mb-5 text-xl font-semibold">Top Songs</h2>

            <div className="space-y-4">
              {topSongs.map((song, index) => (
                <div
                  key={song.title}
                  className="flex items-center justify-between rounded-xl bg-[#121212] p-4"
                >
                  <div>
                    <p className="font-semibold">
                      {index + 1}. {song.title}
                    </p>
                    <p className="text-sm text-zinc-400">{song.artist}</p>
                  </div>

                  <span className="text-sm font-semibold text-[#1DB954]">
                    {song.streams}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LOWER CARDS */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-[#181818] p-6">
            <h2 className="mb-5 text-xl font-semibold">Listener Sources</h2>

            <div className="space-y-4">
              {[
                ["Search", "42%"],
                ["Playlists", "31%"],
                ["Artist Profile", "18%"],
                ["Direct Link", "9%"],
              ].map(([name, value]) => (
                <div key={name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>{name}</span>
                    <span className="text-zinc-400">{value}</span>
                  </div>

                  <div className="h-2 rounded-full bg-zinc-800">
                    <div
                      className="h-2 rounded-full bg-[#1DB954]"
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#181818] p-6">
            <h2 className="mb-5 text-xl font-semibold">Top Countries</h2>

            <div className="space-y-4">
              {[
                ["Nigeria", "58.2K listeners"],
                ["United States", "21.6K listeners"],
                ["United Kingdom", "14.4K listeners"],
                ["Ghana", "9.7K listeners"],
              ].map(([country, listeners]) => (
                <div
                  key={country}
                  className="flex justify-between border-b border-zinc-800 pb-3 last:border-0"
                >
                  <span>{country}</span>
                  <span className="text-zinc-400">{listeners}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}