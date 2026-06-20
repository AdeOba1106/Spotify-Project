import { User, Camera } from "lucide-react";
import Navbar from "../navbar";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">
            Profile
          </h1>

          <div className="bg-[#181818] rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-zinc-700 flex items-center justify-center">
                  <User size={60} className="sm:w-20 sm:h-20" />
                </div>

                <button className="absolute bottom-2 right-2 bg-[#1DB954] p-3 rounded-full hover:scale-105 transition">
                  <Camera size={18} className="text-black" />
                </button>
              </div>

              {/* Form */}
              <div className="flex-1 w-full space-y-4">
                <input
                  type="text"
                  placeholder="Display Name"
                  className="w-full bg-[#282828] p-4 rounded-lg outline-none focus:ring-2 focus:ring-[#1DB954]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#282828] p-4 rounded-lg outline-none focus:ring-2 focus:ring-[#1DB954]"
                />

                <textarea
                  placeholder="Bio"
                  rows={4}
                  className="w-full bg-[#282828] p-4 rounded-lg outline-none resize-none focus:ring-2 focus:ring-[#1DB954]"
                />

                <button className="bg-[#1DB954] text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}