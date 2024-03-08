import React, { useState, useEffect } from "react";
import { GoSearch } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import logo from "./../assets/img/logo.png";
import Banner from "./announcementBanner";
import HeartWithBadge from "./heartWithBadge";
import CartWithBadge from "./cartWithBadge";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section>
      <Banner />
      <nav>
        <div className="bg-white shadow-md">
          <div className="grid grid-cols-3 p-7">
            <div
              className=" cursor-pointer lg:opacity-0 lg:pointer-events-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <RxCross1 size={25} />
              ) : (
                <RxHamburgerMenu size={25} />
              )}
            </div>
            <div className="text-center">
              <Link to={"/"}>
                <img
                  src={logo}
                  alt="logo"
                  className="w-[120px] h-auto inline-block"
                />
              </Link>
            </div>
            <div className="text-gray-300 flex items-center justify-end gap-2">
              <GoSearch size={20} />
              <span className="text-sm">SEARCH</span>
              <HeartWithBadge count={15} />
              <CiUser size={26} />
              <CartWithBadge count={1} />
            </div>
          </div>
          <div className="py-5 px-7 flex items-end justify-between text-sm text-gray-500">
            <div>NEW</div>
            <div>CLOTHING</div>
            <div>MOST LOVED</div>
            <div>CAMPAIGNS</div>
            <div>BACK IN STORE</div>
            <div>EDITS</div>
            <div>ACCESSORIES</div>
            <div>SALE</div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
