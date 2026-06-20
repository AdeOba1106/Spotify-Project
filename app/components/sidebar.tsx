"use client";

import { usePlayer } from "@/app/context/playercontext";
import Image from "next/image";
import { Link, Plus } from "lucide-react";



export default function sidebar() {

    const { playSong } = usePlayer();

    const songs = [
        {
            id: 1,
            title: "Reckless Lover",
            artist: "Artist",
            src: "/music/BBO_-_Oro_Gospelloop.mp3",
            image: "/images/cover-1.jpeg",
        },
        {
            id: 2,
            title: "Endless Praise",
            artist: "Artist",
           src: "/music/BBO_-_Oro_Gospelloop.mp3",
            image: "/images/cover-11.jpeg",
        },
        {
            id: 3,
            title: "Korin Iyin",
            artist: "Artist",
           src: "/music/BBO_-_Oro_Gospelloop.mp3",
            image: "/images/cover-4.jpeg",
        },
        {
            id: 4,
            title: "Gbogbonise",
            artist: "Artist",
           src: "/music/BBO_-_Oro_Gospelloop.mp3",
            image: "/images/cover-1.jpeg",
        },
        {
            id: 5,
            title: "I have Escaped",
            artist: "Artist",
           src: "/music/BBO_-_Oro_Gospelloop.mp3",
            image: "/images/cover-2.jpeg",
        },
        {
            id: 6,
            title: "Unreserved Praise",
            artist: "Artist",
           src: "/music/BBO_-_Oro_Gospelloop.mp3",
            image: "/images/cover-3.jpeg",
        },
        {
            id: 7,
            title: "Odudu Live",
            artist: "Artist",
           src: "/music/BBO_-_Oro_Gospelloop.mp3",
            image: "/images/cover-1.jpeg",
        },
        {
            id: 8,
            title: "Amen live",
            artist: "Artist",
           src: "/music/BBO_-_Oro_Gospelloop.mp3",
            image: "/images/cover-4.jpeg",
        },

    ];



    const playlists = [
        {
            id: 4,
            title: "Gbogbonise",
            artist: "Artist",
           src: "/music/BBO_-_Oro_Gospelloop.mp3",
            image: "/images/cover-1.jpeg",
        },
        {
            id: 11,
            title: "I have Escaped",
            artist: "Artist",
            src: "/music/BBO_-_Oro_Gospelloop.mp3",
            image: "/images/cover-2.jpeg",
        },
        {
            id: 20,
            title: "Unreserved Praise",
            artist: "Artist",
          src: "/music/BBO_-_Oro_Gospelloop.mp3",
            image: "/images/cover-3.jpeg",
        },
        {
            id: 17,
            title: "Odudu Live",
            artist: "Artist",
           src: "/music/BBO_-_Oro_Gospelloop.mp3",
            image: "/images/cover-1.jpeg",
        }, {
            id: 12,
            title: "I have Escaped",
            artist: "Artist",
            src: "/music/BBO_-_Oro_Gospelloop.mp3",
            image: "/images/cover-2.jpeg",
        },
        {
            id: 8,
            title: "Amen live",
            artist: "Artist",
            src: "/music/BBO_-_Oro_Gospelloop.mp3",
            image: "/images/cover-4.jpeg",
        },

        {
            id: 7,
            title: "Odudu Live",
            artist: "Artist",
           src: "/music/BBO_-_Oro_Gospelloop.mp3",
            image: "/images/cover-1.jpeg",
        },
        {
            id: 6,
            title: "Unreserved Praise",
            artist: "Artist",
            src: "/music/BBO_-_Oro_Gospelloop.mp3",
            image: "/images/cover-3.jpeg",
        },

    ]


    const dailymix = [
        {
            id: 24,
            title: "Gbogbonise",
            artist: "01",
            image: "/download (44).jpg",
           src: "/music/BBO_-_Oro_Gospelloop.mp3",
            description: "A vibrant mix of uplifting worship and praise songs.",
        },
        {
            id: 21,
            title: "I have Escaped",
            artist: "02",
            image: "/pencil art.jpg",
           src: "/music/BBO_-_Oro_Gospelloop.mp3",
            description: "Reflective melodies perfect for quiet moments.",
        },
        {
            id: 30,
            title: "Unreserved Praise",
            artist: "03",
            image: "/download (42).jpg",
           src: "/music/BBO_-_Oro_Gospelloop.mp3",
            description: "High-energy gospel tracks to brighten your day.",
        },
        {
            id: 37,
            title: "Odudu Live",
            artist: "04",
            image: "/How To Draw A Face (Even If You Think You Can’t) – With the Best Face Drawing References to Guide___.jpg",
           src: "/music/BBO_-_Oro_Gospelloop.mp3",
            description: "Live recordings filled with passion and powerful vocals.",
        },
        {
            id: 42,
            title: "I have Escaped",
            artist: "05",
            image: "/pencil art.jpg",
           src: "/music/BBO_-_Oro_Gospelloop.mp3",
            description: "A collection of inspiring songs about hope and freedom.",
        },
        {
            id: 81,
            title: "Amen live",
            artist: "06",
            image: "/download (43).jpg",
     src: "/music/BBO_-_Oro_Gospelloop.mp3",
            description: "Soulful live performances that create an immersive experience.",
        },
        {
            id: 57,
            title: "Odudu Live",
            artist: "07",
            image: "/tom holland.jpg",
           src: "/music/BBO_-_Oro_Gospelloop.mp3",
            description: "Dynamic rhythms and heartfelt worship moments.",
        },
        {
            id: 60,
            title: "Unreserved Praise",
            artist: "08",
            image: "/download (44).jpg",
            src: "/music/BBO_-_Oro_Gospelloop.mp3",
            description: "A blend of contemporary gospel and praise anthems.",
        },
        {
            id: 62,
            title: "Unreserved Praise",
            artist: "08",
            image: "/Love her.jpg",
            description: "Feel-good tracks curated for everyday listening.",
           src: "/music/BBO_-_Oro_Gospelloop.mp3",
        },
        {
            id: 70,
            title: "Unreserved Praise",
            artist: "08",
            image: "/tom holland.jpg",
           src: "/music/BBO_-_Oro_Gospelloop.mp3",
            description: "An inspiring mix of worship favorites and new releases.",
        },
        {
            id: 66,
            title: "Unreserved Praise",
            artist: "08",
            image: "/download (44).jpg",
           src: "/music/BBO_-_Oro_Gospelloop.mp3",
            description: "Powerful songs that encourage faith and gratitude.",
        },
    ];



    const mostplayed = [
        {
            id: 31,
            title: "Unreserved Praise",
            artist: "03",
            image: "/download (42).jpg",
            description: "High-energy gospel tracks to brighten your day.",
        },

        {
            id: 99,
            title: "I have Escaped",
            artist: "02",
            image: "/pencil art.jpg",
            description: "Reflective melodies perfect for quiet moments.",
        },

        {
            id: 57,
            title: "Odudu Live",
            artist: "04",
            image: "/How To Draw A Face (Even If You Think You Can’t) – With the Best Face Drawing References to Guide___.jpg",
            description: "Live recordings filled with passion and powerful vocals.",
        },

        {
            id: 92,
            title: "Unreserved Praise",
            artist: "08",
            image: "/Love her.jpg",
            description: "Feel-good tracks curated for everyday listening.",
        },
        {
            id: 43,
            title: "I have Escaped",
            artist: "05",
            image: "/pencil art.jpg",
            description: "A collection of inspiring songs about hope and freedom.",
        },
        {
            id: 27,
            title: "Gbogbonise",
            artist: "01",
            image: "/download (44).jpg",
            description: "A vibrant mix of uplifting worship and praise songs.",
        },
        {
            id: 82,
            title: "Amen live",
            artist: "06",
            src: "/music/BBO_-_Oro_Gospelloop.mp3",
            image: "/download (43).jpg",
            description: "Soulful live performances that create an immersive experience.",
        },
        {
            id: 79,
            title: "Odudu Live",
            artist: "07",
            image: "/tom holland.jpg",
            description: "Dynamic rhythms and heartfelt worship moments.",
        },

        {
            id: 86,
            title: "Unreserved Praise",
            artist: "08",
            image: "/download (44).jpg",
            description: "Powerful songs that encourage faith and gratitude.",
        },
        {
            id: 100,
            title: "Unreserved Praise",
            artist: "08",
            image: "/tom holland.jpg",
            description: "An inspiring mix of worship favorites and new releases.",
        },
        {
            id: 66,
            title: "Unreserved Praise",
            artist: "08",
            image: "/download (44).jpg",
            description: "A blend of contemporary gospel and praise anthems.",
        },

    ];


return (
  <div className="flex gap-2 px-2">
    {/* SIDEBAR */}
    <div className="hidden lg:flex w-[292px] bg-[#1a1a1a] h-screen rounded-2xl p-4 flex-col shrink-0">
      <div className="flex justify-between items-center text-white p-3">
        <h2 className="text-[16px] font-bold">Your Library</h2>

        <Link href="/upload-song">
          <Plus />
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto">
        {songs.map((song) => (
          <div
            key={song.id}
            onClick={() =>
              playSong({
                title: song.title,
                artist: song.artist,
                src: song.src,
                image: song.image,
              })
            }
            className="flex items-center gap-3 px-2 py-3 hover:bg-zinc-800 rounded-md cursor-pointer"
          >
            <div className="w-12 h-12 overflow-hidden border border-zinc-600 rounded-full shrink-0">
              <Image
                src={song.image}
                alt={song.title}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <h3 className="text-white text-sm font-medium truncate">
                {song.title}
              </h3>
              <p className="text-zinc-400 text-xs truncate">{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* MOBILE LIBRARY BUTTON */}
    <Link
      href="/upload-song"
      className="fixed bottom-24 left-5 bg-black w-10 h-10 grid place-items-center text-white rounded-full z-50 cursor-pointer lg:hidden"
    >
      <Plus />
    </Link>

    {/* MAIN CONTENT */}
    <div className="flex-1 rounded-2xl h-screen overflow-y-auto overflow-x-hidden bg-[#1a1a1a]">
      {/* FILTER BUTTONS */}
      <div className="flex w-full rounded-t-2xl bg-[#1a1a1a] items-center gap-2 px-4 py-3 sticky top-0 z-10 overflow-x-auto">
        <button className="bg-[#333] hover:bg-[#444] rounded-full text-sm text-white py-2 px-4 shrink-0">
          All
        </button>
        <button className="bg-[#333] hover:bg-[#444] rounded-full text-sm text-white py-2 px-4 shrink-0">
          Music
        </button>
        <button className="bg-[#333] hover:bg-[#444] rounded-full text-sm text-white py-2 px-4 shrink-0">
          Podcast
        </button>
      </div>

      {/* PLAYLIST GRID */}
      <div className="px-3 sm:px-4 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            onClick={() =>
              playSong({
                title: playlist.title,
                artist: playlist.artist,
                src: playlist.src,
                image: playlist.image,
              })
            }
            className="flex items-center cursor-pointer h-16 relative group bg-[#2a2a2a] rounded-md overflow-hidden hover:bg-[#333] transition"
          >
            <Image
              src={playlist.image}
              alt={playlist.title}
              width={64}
              height={64}
              className="h-16 w-16 object-cover shrink-0"
            />

            <p className="text-white text-sm px-3 font-bold truncate">
              {playlist.title}
            </p>

            <button className="absolute right-3 bg-green-500 text-black w-9 h-9 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              ▶
            </button>
          </div>
        ))}
      </div>

      {/* SECTIONS */}
      {[
        "Made For You",
        "Recently played",
        "Your top mixes",
        "Recommended radio",
      ].map((section) => (
        <div key={section} className="px-4 sm:px-6 lg:px-8 mt-6">
          <p className="text-white text-xl sm:text-2xl font-bold mb-3">
            {section}
          </p>

          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {dailymix.map((mix) => (
              <div
                key={mix.id}
                onClick={() =>
                  playSong({
                    title: mix.title,
                    artist: mix.artist,
                    src: mix.src,
                    image: mix.image,
                  })
                }
                className="relative group shrink-0 w-[145px] sm:w-[170px] md:w-[180px] rounded-lg p-3 hover:bg-[#2a2a2a] cursor-pointer"
              >
                <div className="relative w-full aspect-square rounded-md overflow-hidden">
                  <Image
                    src={mix.image}
                    alt={mix.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <button className="absolute top-[105px] sm:top-[130px] right-4 bg-green-500 text-black w-10 h-10 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  ▶
                </button>

                <h3 className="text-white font-semibold mt-3 truncate">
                  {mix.title}
                </h3>

                <p className="text-gray-400 text-sm mt-1 line-clamp-2 whitespace-normal">
                  {mix.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
}