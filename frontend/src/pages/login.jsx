import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      navigate("/account");
    } catch (error) {
      // Handle login error (e.g., show an error message)
      console.error("Login error:", error);
    }
  };

  return (
    <div className="md:mx-36 my-20">
      <div className="flex justify-center">
        <div className="w-full lg:w-1/2">
          <div className="text-center mb-3">
            <h1 className="bigText">LOGIN</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                name="email"
                type="email"
                value={credentials.email}
                onChange={handleChange}
                className="form-input w-full small-size py-3 border-b border-black focus:outline-none "
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                name="password"
                type="password"
                value={credentials.password}
                onChange={handleChange}
                className="form-input w-full small-size py-3 border-b border-black focus:outline-none"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-3">
              <a href="#" className="text-gray-400 small-size hover:underline">
                Forgot Your Password?
              </a>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn-primary px-4 py-3 bg-pantone text-white font-bold hover:bg-darkPantone"
              >
                SIGN IN
              </button>
            </div>
            <div className="my-2 text-center">
              <Link
                to="/register"
                className="text-gray-400 small-size hover:underline"
              >
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
