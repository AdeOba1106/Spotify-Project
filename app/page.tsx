import { Single_Day } from "next/font/google";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import MusicPlayer from "./components/MusicPlayer";

export default function Homepage() {
  return (
    <main className="bg-black fixed h-screen w-screen">
      <Navbar />

      <main className="bg-black">
        <Sidebar />
        <MusicPlayer />
      </main>
    </main>
  );
}
