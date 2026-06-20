import axios from "axios";

// Audius's official router picks a healthy discovery node for you.
// app_name is recommended by Audius for any app in production.
const BASE_URL = "https://api.audius.co/v1";
const APP_NAME = "PMEAT"; // change to whatever you want your app identified as

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    app_name: APP_NAME,
  },
});

// ---- Types -----------------------------------------------------

export interface AudiusTrack {
  id: string;
  title: string;
  genre: string;
  mood: string | null;
  duration: number;
  play_count: number;
  favorite_count: number;
  repost_count: number;
  description: string | null;
  artwork: {
    "150x150"?: string;
    "480x480"?: string;
    "1000x1000"?: string;
  } | null;
  user: {
    id: string;
    name: string;
    handle: string;
    profile_picture?: {
      "150x150"?: string;
      "480x480"?: string;
      "1000x1000"?: string;
    } | null;
  };
}

// Shape your UI components actually want — matches the
// {title, artist, src, image} shape already used in sidebar.tsx
export interface UiSong {
  id: string;
  title: string;
  artist: string;
  src: string;
  image: string;
  description?: string;
}

// ---- Helpers -----------------------------------------------------

const FALLBACK_IMAGE = "/images/cover-1.jpeg"; // reuse one of your local fallbacks

function pickArtwork(track: AudiusTrack): string {
  return (
    track.artwork?.["480x480"] ||
    track.artwork?.["1000x1000"] ||
    track.artwork?.["150x150"] ||
    track.user?.profile_picture?.["480x480"] ||
    FALLBACK_IMAGE
  );
}

// Builds the actual streamable URL for a track id.
// This is what should go into `src` instead of a local file.
export function getStreamUrl(trackId: string): string {
  return `${BASE_URL}/tracks/${trackId}/stream?app_name=${APP_NAME}`;
}

// Normalizes a raw Audius track into the shape your UI already expects
export function mapTrackToUiSong(track: AudiusTrack): UiSong {
  return {
    id: track.id,
    title: track.title,
    artist: track.user?.name || track.user?.handle || "Unknown Artist",
    src: getStreamUrl(track.id),
    image: pickArtwork(track),
    description: track.description || undefined,
  };
}

// ---- Track endpoints -----------------------------------------------------

// General trending feed — good for "Your Library" / default sections
export const getTrendingTracks = async (params?: {
  genre?: string;
  time?: "week" | "month" | "year" | "allTime";
  limit?: number;
}): Promise<UiSong[]> => {
  try {
    const res = await api.get("/tracks/trending", { params });
    const tracks: AudiusTrack[] = res.data.data || [];
    return tracks.map(mapTrackToUiSong);
  } catch (err: any) {
    console.error(
      "getTrendingTracks error:",
      err.response?.data || err.message,
    );
    throw err.response?.data || err;
  }
};

// Trending filtered by genre — good for distinct "Made For You" style rows
export const getTrendingByGenre = async (
  genre: string,
  limit = 10,
): Promise<UiSong[]> => {
  try {
    const res = await api.get("/tracks/trending", {
      params: { genre, limit },
    });
    const tracks: AudiusTrack[] = res.data.data || [];
    return tracks.map(mapTrackToUiSong);
  } catch (err: any) {
    console.error(
      "getTrendingByGenre error:",
      err.response?.data || err.message,
    );
    throw err.response?.data || err;
  }
};

// "Recommended" — Audius requires a seed (track or genre) for this to mean anything.
// If no seed is passed, falls back to trending so the section never breaks.
export const getRecommendedTracks = async (params?: {
  genre?: string;
  limit?: number;
}): Promise<UiSong[]> => {
  try {
    const res = await api.get("/tracks/recommended", { params });
    const tracks: AudiusTrack[] = res.data.data || [];
    return tracks.map(mapTrackToUiSong);
  } catch (err: any) {
    console.error(
      "getRecommendedTracks error, falling back to trending:",
      err.response?.data || err.message,
    );
    return getTrendingTracks(params);
  }
};

// Search tracks by free-text query
export const searchTracks = async (
  query: string,
  limit = 10,
): Promise<UiSong[]> => {
  try {
    const res = await api.get("/tracks/search", {
      params: { query, limit },
    });
    const tracks: AudiusTrack[] = res.data.data || [];
    return tracks.map(mapTrackToUiSong);
  } catch (err: any) {
    console.error(
      "searchTracks error:",
      err.response?.data || err.message
    );
    throw err.response?.data || err;
  }
};

// ---- AUTH (kept as-is, same pattern as your other file) -----------------------------------------------------

export const loginUser = async (data: { email: string; password: string }) => {
  try {
    const res = await api.post("/auth/login", data);
    return res.data;
  } catch (err: any) {
    throw err.response?.data || err;
  }
};

export const signupUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await api.post("/auth/signup", data);
    return response.data;
  } catch (err: any) {
    console.error("Signup error:", err.response?.data || err.message);
    throw err.response?.data || err;
  }
};

// import axios from "axios";

// const BASE_URL = "https://boi-backend-oyws.onrender.com/api/v1";

// // Create axios instance
// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // AUTH
// export const loginUser = async (data: { email: string; password: string }) => {
//   try {
//     const res = await api.post("/auth/login", data);
//     return res.data;
//   } catch (err: any) {
//     throw err.response?.data || err;
//   }
// };

// export const signupUser = async (data: {
//   name: string;
//   email: string;
//   password: string;
// }) => {
//   try {
//     const response = await api.post("/auth/signup", data);
//     return response.data;
//   } catch (err: any) {
//     console.error("Signup error:", err.response?.data || err.message);
//     throw err.response?.data || err;
//   }
// };
