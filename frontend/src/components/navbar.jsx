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
import axios from "axios";
import Cart from "./cart";

const CategoryItem = ({ category }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div
        onMouseEnter={() => setIsDropdownOpen(true)}
        className="cursor-pointer hover:bg-gray-100 py-2 px-4"
      >
        {category.name}
      </div>
      {isDropdownOpen && (
        <div
          className="absolute left-0 bg-white shadow-lg mt-1 py-2 z-10"
          onMouseEnter={() => setIsDropdownOpen(true)}
        >
          {category.children.length > 0 &&
            category.children.map((subCat) => (
              <div
                key={subCat.category_id}
                className="px-4 py-2 hover:bg-gray-100"
              >
                <div className="font-bold">{subCat.name}</div>
                {/* Render third level categories if any */}
                {subCat.children.map((subSubCat) => (
                  <div
                    key={subSubCat.category_id}
                    className="pl-4 py-1 hover:bg-gray-200"
                  >
                    {subSubCat.name}
                  </div>
                ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/categories/all"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const toggleClothingDropdown = () => {
  //   setIsClothingDropdownOpen(!isClothingDropdownOpen);
  //   if (!isClothingDropdownOpen) {
  //     fetchSubCategoriesForAllCategories();
  //   }
  // };

  return (
    <section>
      <Banner />
      <nav className="bg-white shadow-md ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 py-4">
            <div className="flex items-center gap-4 cursor-pointer ">
              <div className="lg:hidden" onClick={toggleMenu}>
                {isMenuOpen ? (
                  <RxCross1 className="block h-6 w-6" />
                ) : (
                  <RxHamburgerMenu className="block h-6 w-6" />
                )}
              </div>
              <div className="sm:hidden flex items-center gap-2">
                <GoSearch size={20} />
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <Link to={"/"}>
                <img
                  src={logo}
                  alt="logo"
                  className="w-[120px] h-auto inline-block"
                />
              </Link>
            </div>
            <div className="flex items-center justify-end gap-2">
              <div className="hidden sm:flex items-center gap-2">
                <GoSearch size={20} />
                <span className="text-sm small-size">SEARCH</span>
              </div>
              <HeartWithBadge count={15} />
              <CiUser size={26} />
              <button onClick={toggleCart}>
                <CartWithBadge count={1} />
              </button>
              <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
            </div>
          </div>

          <div className="hidden lg:flex py-5 px-7 items-end justify-center gap-20">
            {categories.map((category) => (
              <CategoryItem key={category.category_id} category={category} />
            ))}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
