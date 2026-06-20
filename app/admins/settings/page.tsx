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
  Bell,
  Shield,
  Lock,
  Mail,
  User,
  Save,
  Globe,
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
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="mt-1 text-zinc-400">
            Manage admin profile, security, notifications and platform preferences.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {/* PROFILE SETTINGS */}
          <section className="xl:col-span-2 rounded-2xl border border-zinc-800 bg-[#181818] p-6">
            <div className="mb-6 flex items-center gap-3">
              <User className="text-[#1DB954]" />
              <div>
                <h2 className="text-xl font-semibold">Admin Profile</h2>
                <p className="text-sm text-zinc-400">
                  Update your admin account information.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="Admin Name"
                className="w-full rounded-xl bg-[#282828] p-4 outline-none focus:ring-2 focus:ring-[#1DB954]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl bg-[#282828] p-4 outline-none focus:ring-2 focus:ring-[#1DB954]"
              />

              <input
                type="text"
                placeholder="Role e.g Super Admin"
                className="w-full rounded-xl bg-[#282828] p-4 outline-none focus:ring-2 focus:ring-[#1DB954]"
              />

              <select className="w-full rounded-xl bg-[#282828] p-4 outline-none focus:ring-2 focus:ring-[#1DB954]">
                <option>Nigeria</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Ghana</option>
              </select>
            </div>

            <button className="mt-6 flex items-center gap-2 rounded-xl bg-[#1DB954] px-5 py-3 font-semibold text-black hover:bg-green-500">
              <Save size={18} />
              Save Profile
            </button>
          </section>

          {/* ACCOUNT STATUS */}
          <section className="rounded-2xl border border-zinc-800 bg-[#181818] p-6">
            <h2 className="mb-5 text-xl font-semibold">Account Status</h2>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-[#1DB954] text-3xl font-bold text-black">
                A
              </div>

              <h3 className="font-bold">Admin Account</h3>
              <p className="text-sm text-zinc-400">Super Admin</p>

              <span className="mt-4 rounded-full bg-green-500/20 px-4 py-1 text-sm text-green-400">
                Active
              </span>
            </div>
          </section>
        </div>

        {/* SECURITY */}
        <section className="mt-6 rounded-2xl border border-zinc-800 bg-[#181818] p-6">
          <div className="mb-6 flex items-center gap-3">
            <Shield className="text-[#1DB954]" />
            <div>
              <h2 className="text-xl font-semibold">Security</h2>
              <p className="text-sm text-zinc-400">
                Keep your admin account protected.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full rounded-xl bg-[#282828] p-4 outline-none focus:ring-2 focus:ring-[#1DB954]"
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full rounded-xl bg-[#282828] p-4 outline-none focus:ring-2 focus:ring-[#1DB954]"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-xl bg-[#282828] p-4 outline-none focus:ring-2 focus:ring-[#1DB954]"
            />
          </div>

          <button className="mt-6 flex items-center gap-2 rounded-xl bg-zinc-700 px-5 py-3 font-semibold hover:bg-zinc-600">
            <Lock size={18} />
            Update Password
          </button>
        </section>

        {/* PREFERENCES */}
        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-[#181818] p-6">
            <div className="mb-5 flex items-center gap-3">
              <Bell className="text-[#1DB954]" />
              <h2 className="text-xl font-semibold">Notifications</h2>
            </div>

            <div className="space-y-4">
              {[
                "Email me when a new song is uploaded",
                "Notify me about new user registrations",
                "Send weekly streaming reports",
              ].map((item) => (
                <label
                  key={item}
                  className="flex items-center justify-between rounded-xl bg-[#121212] p-4"
                >
                  <span className="text-sm text-zinc-300">{item}</span>
                  <input type="checkbox" className="h-5 w-5 accent-[#1DB954]" />
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-[#181818] p-6">
            <div className="mb-5 flex items-center gap-3">
              <Globe className="text-[#1DB954]" />
              <h2 className="text-xl font-semibold">Platform Preferences</h2>
            </div>

            <div className="space-y-4">
              <select className="w-full rounded-xl bg-[#282828] p-4 outline-none focus:ring-2 focus:ring-[#1DB954]">
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
              </select>

              <select className="w-full rounded-xl bg-[#282828] p-4 outline-none focus:ring-2 focus:ring-[#1DB954]">
                <option>Dark Theme</option>
                <option>Light Theme</option>
              </select>

              <select className="w-full rounded-xl bg-[#282828] p-4 outline-none focus:ring-2 focus:ring-[#1DB954]">
                <option>Auto approve songs: Off</option>
                <option>Auto approve songs: On</option>
              </select>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}