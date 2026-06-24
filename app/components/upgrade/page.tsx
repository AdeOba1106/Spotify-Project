import { Check } from "lucide-react";
import Navbar~ from "../navbar";

export default function PremiumPage() {
  const features = [
    "Ad-free music listening",
    "Download songs offline",
    "Unlimited skips",
    "High quality audio",
    "Play any song",
    "Group listening sessions",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1DB954] to-black text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">
            Premium
          </h1>

          <p className="text-xl text-zinc-200 mb-12">
            Listen without limits. Upgrade your experience.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white text-black rounded-3xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold mb-2">
            Premium Individual
          </h2>

          <p className="text-zinc-600 mb-6">
            ₦900/month after trial
          </p>

          <div className="space-y-4 mb-8">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3"
              >
                <Check
                  size={18}
                  className="text-[#1DB954]"
                />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <button className="w-full bg-black text-white py-4 rounded-full font-bold hover:scale-105 transition">
            Get Premium
          </button>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-[#181818] p-6 rounded-2xl">
            <h3 className="font-bold text-xl mb-3">
              Student
            </h3>
            <p className="text-zinc-400">
              Discounted plan for eligible students.
            </p>
          </div>

          <div className="bg-[#181818] p-6 rounded-2xl">
            <h3 className="font-bold text-xl mb-3">
              Duo
            </h3>
            <p className="text-zinc-400">
              Two premium accounts in one plan.
            </p>
          </div>

          <div className="bg-[#181818] p-6 rounded-2xl">
            <h3 className="font-bold text-xl mb-3">
              Family
            </h3>
            <p className="text-zinc-400">
              Up to 6 premium accounts.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}