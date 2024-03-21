// src/components/AuthInitializer.js
import { useEffect } from "react";
import useAuthStore from "../store/authStore";
import { authAPI } from "../utils/apiCalling";

const AuthInitializer = ({ children }) => {
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    const rehydrateUser = async () => {
      if (token) {
        try {
          const response = await authAPI.get("/me"); // Endpoint that returns user data based on token
          setUser(response.data);
          setToken(token); // Not strictly necessary if token hasn't changed, but included for completeness
        } catch (error) {
          console.error("Failed to rehydrate user:", error);
          // Handle error, possibly clear token if it's invalid
        }
      }
    };

    rehydrateUser();
  }, [setToken, setUser, token]);

  return children;
};

export default AuthInitializer;
