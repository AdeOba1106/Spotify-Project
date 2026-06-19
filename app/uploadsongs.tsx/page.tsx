"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../music/supabase";

export default function Page() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  // ddjjdj
  // check authsjs
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/login");
      }
    };

    checkUser();
  }, [router]);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!title.trim() || !artist.trim() || !imageFile || !audioFile) {
      setMessage("All fields are required!");
      setLoading(false);
      return;
    }

    try {
      const timestamp = Date.now();

      // GET USER (FIX FOR YOUR ERROR)ddydyd
      const { data: userData } = await supabase.auth.getUser();
      const userId = userData.user?.id;

      if (!userId) {
        setMessage("User not authenticated");
        setLoading(false);
        return;
      }

      // upload image
      const imagePath = `images/${timestamp}_${imageFile.name}`;

      const { error: imgError } = await supabase.storage
        .from("cover-images")
        .upload(imagePath, imageFile);

      if (imgError) {
        setMessage(imgError.message);
        setLoading(false);
        return;
      }

      const { data: imageData } = supabase.storage
        .from("cover-images")
        .getPublicUrl(imagePath);

      const imageUrl = imageData.publicUrl;

      // upload audio
      const audioPath = `audio/${timestamp}_${audioFile.name}`;

      const { error: audioError } = await supabase.storage
        .from("songs")
        .upload(audioPath, audioFile);

      if (audioError) {
        setMessage(audioError.message);
        setLoading(false);
        return;
      }

      const { data: audioData } = supabase.storage
        .from("songs")
        .getPublicUrl(audioPath);

      const audioUrl = audioData.publicUrl;

      // insert into DB
      const { error: dbError } = await supabase.from("songs").insert({
        title,
        artist,
        cover_image_url: imageUrl,
        audio_url: audioUrl,
        user_id: userId,
      });

      if (dbError) {
        setMessage(dbError.message);
        setLoading(false);
        return;
      }

      // reset
      setTitle("");
      setArtist("");
      setImageFile(null);
      setAudioFile(null);
      setMessage("Song uploaded successfully!");

      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (err) {
      console.log(err);
      setMessage("Unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center w-full bg-hover">
      <div className="bg-background flex items-center flex-col px-6 lg:px-12 py-6 rounded-md max-w-[400px] w-[90%]">
        <Image
          width={800}
          height={800}
          src="/images/logo.png"
          alt="logo"
          className="w-11 h-11"
        />

        <h2 className="text-3xl font-bold text-white my-2 mb-8 text-center">
          Upload to Spotify
        </h2>

        <form onSubmit={handleUpload}>
          {message && (
            <p className="bg-primary font-semibold text-center mb-4 py-1">
              {message}
            </p>
          )}

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="outline-none border-1 border-neutral-600 p-2 w-full rounded-md mb-6"
          />

          <input
            type="text"
            placeholder="Artist Name"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="outline-none border-1 border-neutral-600 p-2 w-full rounded-md mb-6"
          />

          <label className="block py-2">Audio</label>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setAudioFile(e.target.files?.[0] || null)}
            className="mb-6"
          />

          <label className="block py-2">Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            className="mb-6"
          />

          <button
            className="bg-primary py-3 rounded-full w-full font-bold"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Add Song"}
          </button>
        </form>
      </div>
    </div>
  );
}
