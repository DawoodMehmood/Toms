import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="md:mx-20 my-20">
      <div className="flex justify-center">
        <div className="w-4/5 md:w-2/3 lg:w-3/6">
          <div className="text-center mb-5">
            <h1 className="bigText">CREATE ACCOUNT</h1>
          </div>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-input w-full small-size py-3 border-b border-black"
                placeholder="First Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-input w-full small-size py-3 border-b border-black"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-input w-full small-size py-3 border-b border-black"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                className="form-input w-full small-size py-3 border-b border-black"
                placeholder="Password"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn-primary px-4 py-3 bg-pantone text-white font-bold hover:bg-darkPantone"
              >
                CREATE ACCOUNT
              </button>
            </div>
            <div className="my-2 text-center">
              <Link
                to="/login"
                className="underline text-gray-400 small-size hover:underline"
              >
                Already have an account? Sign in
              </Link>
            </div>
            <div className="my-4 text-gray-400 small-size text-center">
              *By creating an account you are agreeing to VRG GRL's&nbsp;
              <Link
                to="/pages/terms-and-conditions"
                className="underline small-size hover:underline"
              >
                Terms & Conditions
              </Link>
              &nbsp;and&nbsp;
              <Link to="#" className="underline small-size hover:underline">
                Privacy Policy.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
