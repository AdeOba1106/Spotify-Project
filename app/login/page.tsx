"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
// import { loginUser } from "@/api/api";
import { loginUser } from "../api/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log({email, password})
      const response = await loginUser({ email, password });

      const token = response.data.access_token;
      localStorage.setItem("token", token);

      router.push("/admins");
    } catch (err) {
      console.error("Login failed", err);
      setMessage("Invalid email or password");
    }
  };

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center px-4">
      {/* LOGIN CARD */}
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
          Log in to AudioTunez
        </h1>

        {/* ERROR MESSAGE */}
        {message && (
          <p className="text-center text-sm text-red-400 mb-4">
            {message}
          </p>
        )}

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-5">

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
            Log In
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-white underline hover:text-[#1DB954]">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}