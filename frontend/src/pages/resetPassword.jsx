import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const ResetPassword = () => {
  const [credentials, setCredentials] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add password validation logic here if needed
      if (credentials.newPassword.length < 5) {
        throw new Error("Password should be at least 5 characters long.");
      }
      if (credentials.newPassword !== credentials.confirmPassword) {
        throw new Error("Passwords do not match.");
      }

      // Call your reset password API endpoint or function here
      // For demonstration purposes, assuming a successful reset
      // await resetPassword(credentials);

      // Assuming reset password is successful, navigate to account route
      navigate("/account");
    } catch (error) {
      // Handle reset password error (e.g., show an error message)
      console.error("Reset password error:", error);
    }
  };

  return (
    <div className="md:mx-36 my-20">
      <div className="flex justify-center">
        <div className="w-full lg:w-1/2">
          <div className="text-center mb-3">
            <h1 className="bigText">RESET YOUR PASSWORD</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                name="newPassword"
                type="password"
                value={credentials.newPassword}
                onChange={handleChange}
                className="form-input w-full small-size py-3 border-b border-black focus:outline-none "
                placeholder="New Password"
                required
              />
            </div>
            <div className="mb-3">
              <input
                name="confirmPassword"
                type="password"
                value={credentials.confirmPassword}
                onChange={handleChange}
                className="form-input w-full small-size py-3 border-b border-black focus:outline-none"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn-primary px-4 py-3 my-3 bg-pantone text-white font-bold hover:bg-darkPantone"
              >
                RESET PASSWORD
              </button>
            </div>
          </form>
          <div className="my-2 text-center">
            <Link
              to="/register"
              className="text-gray-400 small-size hover:underline"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
