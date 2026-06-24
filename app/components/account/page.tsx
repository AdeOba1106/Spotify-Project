"use client";
import Link from "next/link";
import {
  User,
  Mail,
  CreditCard,
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
            Manage your AudioTunez account, plan, security and preferences.
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

            {/* NAV */}
            <nav className="space-y-2 text-sm">
              {[
                { label: "Profile", icon: User, href: "/components/account" },
                { label: "Subscription", icon: CreditCard, href: "/components/upgrade" },
              ].map(({ label, icon: Icon, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon size={18} />
                  {label}
                </Link>
              ))}

              {/* LOGOUT */}
              <Link
                href="/login"
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-red-400 transition hover:bg-red-500/10"
              >
                <LogOut size={18} />
                Log out
              </Link>
            </nav>
          </aside>

          {/* Content */}
          <div className="space-y-6">
            {/* Profile */}
            <section className="rounded-2xl bg-[#181818] p-6">
              <h2 className="text-xl font-bold">Profile</h2>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-zinc-400">Display Name</label>
                  <input
                    defaultValue="Adeoye Marvelous"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#121212] px-4 py-3 text-sm outline-none focus:border-[#1db954]"
                  />
                </div>

                <div>
                  <label className="text-sm text-zinc-400">Username</label>
                  <input
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

              <button className="mt-6 rounded-full bg-[#1db954] px-6 py-3 text-sm font-bold text-black hover:bg-[#1ed760]">
                Save Profile
              </button>
            </section>

            {/* Plan */}
            <section className="rounded-2xl bg-gradient-to-br from-[#1db954] to-[#0f8f3d] p-6 text-black">
              <h2 className="text-xl font-bold">Premium Individual</h2>

              <div className="mt-6 flex gap-3">
                <button className="rounded-full bg-black px-6 py-3 text-sm font-bold text-white">
                  Manage Plan
                </button>
                <button className="rounded-full border border-black px-6 py-3 text-sm font-bold">
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

                    <input type="checkbox" />
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