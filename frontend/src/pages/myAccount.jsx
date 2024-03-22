import React from "react";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";

const MyAccount = () => {
  return (
    <div className="md:mx-36 my-20">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h1 className="bigText">MY ACCOUNT</h1>
          <div>
            <Link
              to="/logout"
              className="text-gray-400 flex items-center gap-2 small-size hover:underline"
            >
              <CiLogout />
              <span>Logout</span>
            </Link>
          </div>
          <div className="my-5">
            <p className="font-bold">Order History</p>
            <p>You haven't placed any order yet.</p>
          </div>
        </div>
        <div className="flex flex-col justify-end">
          <div className="mb-3">
            <p className="font-bold">Account Details</p>
            <p>Name: Muhammad Abdullah Khan Abbasi</p>
            <p>Location: Australia</p>
          </div>
          <div>
            <Link to="/addresses" className="text-pantone hover:underline">
              View Addresses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
