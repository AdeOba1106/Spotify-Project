"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      setMessage("Please fill in all fields");
      return;
    }

    // signup logic here
  };

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center px-4">

      {/* CARD */}
      <div className="w-full max-w-md bg-[#121212] rounded-xl px-8 py-10 shadow-2xl">

        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <Image
            src="/icons8-spotify-100.png"
            alt="logo"
            width={50}
            height={50}
            className="w-10 h-10"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-white text-3xl font-bold text-center mb-8">
          Sign up for Spotify
        </h1>

        {message && (
          <p className="text-center text-sm text-red-400 mb-4">
            {message}
          </p>
        )}

        {/* FORM */}
        <form onSubmit={handleSignUp} className="space-y-5">

          {/* NAME */}
          <div>
            <label className="text-sm text-gray-400">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-md bg-[#1e1e1e] text-white placeholder-gray-500 border border-transparent focus:border-white focus:outline-none transition"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="text"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-md bg-[#1e1e1e] text-white placeholder-gray-500 border border-transparent focus:border-white focus:outline-none transition"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm text-gray-400">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-md bg-[#1e1e1e] text-white placeholder-gray-500 border border-transparent focus:border-white focus:outline-none transition"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#1DB954] hover:scale-[1.02] transition text-black font-bold py-3 rounded-full"
          >
          <Link href="/">Sign Up</Link>  
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-white underline hover:text-[#1DB954]">
            Log in
          </Link>
        </p>

      </div>
    </div>
  );
}