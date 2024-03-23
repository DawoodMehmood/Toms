// src/utils/apiCalling.js
import axios from "axios";
import useAuthStore from "../store/cartStore";

const baseURL = process.env.REACT_APP_API_URL;

// Instance for public requests
export const publicAPI = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Instance for authenticated requests
export const authAPI = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Use Zustand store to manage JWT token in Axios interceptor
authAPI.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token; // Get token from Zustand store
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
