"use client"; 
import Link from "next/link";

import {
  User,
  Mail,
  Lock,
  CreditCard,
  Bell,
  Shield,
  Music,
  LogOut,
} from "lucide-react";
import Navbar from "../navbar";

export default function AccountPage() {
  return (

   
    <main className="min-h-screen bg-[#121212] text-white">
        <Navbar />
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold sm:text-4xl">Account</h1>
          <p className="mt-2 text-sm text-zinc-400">
            Manage your Spotify account, plan, security and preferences.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="rounded-2xl bg-[#181818] p-4">
            <div className="mb-6 flex items-center gap-3 rounded-xl bg-[#1db954]/10 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1db954]">
                <User size={24} />
              </div>

              <div>
                <h2 className="font-semibold">MARVEL-Tech</h2>
                <p className="text-sm text-zinc-400">Premium User</p>
              </div>
            </div>

            <nav className="space-y-2 text-sm">
              {[
                ["Profile", User], 
                ["Email & Password", Lock],
                ["Subscription", CreditCard],
                ["Notifications", Bell],
                ["Privacy", Shield],
                ["Music Preferences", Music],
              ].map(([label, Icon]: any) => (
                <button
                  key={label}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-zinc-300 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon size={18} />
                  {label}
                </button>
              ))}

              <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-red-400 transition hover:bg-red-500/10">
                <LogOut size={18} />
                <Link href="/login">Log out </Link>
              </button>
            </nav>
          </aside>

          {/* Content */}
          <div className="space-y-6">
            {/* Profile Card */}
            <section className="rounded-2xl bg-[#181818] p-6">
              <h2 className="text-xl font-bold">Profile</h2>
              <p className="mt-1 text-sm text-zinc-400">
                Your public account information.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-zinc-400">Display Name</label>
                  <input
                    type="text"
                    defaultValue="Adeoye Marvelous"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-3 text-sm outline-none focus:border-[#1db954]"
                  />
                </div>

                <div>
                  <label className="text-sm text-zinc-400">Username</label>
                  <input
                    type="text"
                    defaultValue="Obalolu87"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-3 text-sm outline-none focus:border-[#1db954]"
                  />
                </div>

                <div>
                  <label className="text-sm text-zinc-400">Email</label>
                  <div className="mt-2 flex items-center gap-3 rounded-xl border border-white/10 bg-[#121212] px-4 py-3">
                    <Mail size={18} className="text-zinc-400" />
                    <input
                      type="email"
                      defaultValue="adeoyemarvelous15@email.com"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-zinc-400">Country</label>
                  <select className="mt-2 w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-3 text-sm outline-none focus:border-[#1db954]">
                    <option>Nigeria</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </div>

              <button className="mt-6 rounded-full bg-[#1db954] px-6 py-3 text-sm font-bold text-black transition hover:scale-105 hover:bg-[#1ed760]">
                Save Profile
              </button>
            </section>

            {/* Plan */}
            <section className="rounded-2xl bg-linear-to-br from-[#1db954] to-[#0f8f3d] p-6 text-black">
              <h2 className="text-xl font-bold">Premium Individual</h2>
              <p className="mt-2 max-w-xl text-sm font-medium">
                Enjoy ad-free music, offline listening, and unlimited skips.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition hover:scale-105">
                  Manage Plan
                </button>
                <button className="rounded-full border border-black px-6 py-3 text-sm font-bold transition hover:bg-black hover:text-white">
                  View Billing
                </button>
              </div>
            </section>

            {/* Settings */}
            <section className="rounded-2xl bg-[#181818] p-6">
              <h2 className="text-xl font-bold">Account Settings</h2>

              <div className="mt-6 space-y-4">
                {[
                  "Email me about new music and offers",
                  "Allow personalized recommendations",
                  "Make my playlists public",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-xl bg-[#121212] p-4"
                  >
                    <p className="text-sm text-zinc-300">{item}</p>

                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="h-6 w-11 rounded-full bg-zinc-700 after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition peer-checked:bg-[#1db954] peer-checked:after:translate-x-5" />
                    </label>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}