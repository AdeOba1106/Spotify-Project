import Navbar from "../navbar";
import { Bell, Shield, Moon, Globe, Smartphone } from "lucide-react";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Settings</h1>

          <div className="space-y-4">
            {[
              {
                icon: Bell,
                title: "Notifications",
                desc: "Manage push and email notifications",
              },
              {
                icon: Shield,
                title: "Privacy",
                desc: "Control your privacy settings",
              },
              {
                icon: Moon,
                title: "Appearance",
                desc: "Dark mode preferences",
              },
              {
                icon: Globe,
                title: "Language",
                desc: "Choose your preferred language",
              },
              {
                icon: Smartphone,
                title: "Devices",
                desc: "Manage connected devices",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#181818] rounded-xl p-5 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center hover:bg-[#282828] transition"
              >
                <div className="flex gap-4 items-center">
                  <item.icon size={22} />

                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-zinc-400">{item.desc}</p>
                  </div>
                </div>

                <button className="text-[#1DB954] text-left sm:text-right">
                  Manage
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}