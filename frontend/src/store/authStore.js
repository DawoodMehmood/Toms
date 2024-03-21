// src/stores/authStore.js
import { create } from "zustand";
import { authAPI } from "../utils/apiCalling"; // assuming you've exported your Axios instance as authAPI

const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem("jwtToken"),
  setUser: (user) => set({ user }),
  setToken: (token) => {
    localStorage.setItem("jwtToken", token);
    set({ token });
  },
  clearToken: () => {
    localStorage.removeItem("jwtToken");
    set({ token: null, user: null });
  },
  login: async (credentials) => {
    try {
      const response = await authAPI.post("/auth/login", credentials);
      const { token, user } = response.data;
      set({ user, token });
      localStorage.setItem("jwtToken", token);
    } catch (error) {
      console.error("Login failed:", error);
      throw error; // Rethrow to handle it in the UI component
    }
  },
  logout: () => {
    set({ user: null, token: null });
    localStorage.removeItem("jwtToken");
  },
  isLoggedIn: () => {
    const token = localStorage.getItem("jwtToken");
    return !!token;
  },
}));

export default useAuthStore;
