import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add logic to send reset password email here
      // For demonstration purposes, assuming email sent successfully
      // await sendResetPasswordEmail(email);

      // Redirect to login page with success message
      navigate("/login", {
        state: { message: "Password reset email has been sent successfully." },
      });
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Error sending reset password email:", error);
    }
  };

  const handleCancel = () => {
    navigate("/login");
  };

  return (
    <div className="md:mx-36 my-20">
      <div className="flex justify-center">
        <div className="w-full lg:w-1/2">
          <div className="text-center mb-3">
            <h1 className="bigText">RESET YOUR PASSWORD</h1>
            <p>We will send you an email to reset your password.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="my-5">
              <input
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                className="form-input w-full small-size py-3 border-b border-black focus:outline-none "
                placeholder="Email"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn-primary px-4 py-3 bg-pantone text-white font-bold hover:bg-darkPantone mr-3"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="btn-primary px-4 py-3 bg-red-500 text-white font-bold hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
