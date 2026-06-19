import axios from "axios";

const BASE_URL = "https://boi-backend-oyws.onrender.com/api/v1";

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// AUTH
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