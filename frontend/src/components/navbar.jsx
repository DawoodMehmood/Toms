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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClothingDropdownOpen, setIsClothingDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/categories");
      setCategories(response.data.slice(0, 4));
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchSubCategoriesForAllCategories = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/subcategories`
      );
      setSubCategories(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleClothingDropdown = () => {
    setIsClothingDropdownOpen(!isClothingDropdownOpen);
    if (!isClothingDropdownOpen) {
      fetchSubCategoriesForAllCategories();
    }
  };

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

          <div className="hidden lg:flex py-5 px-7 items-end small-size justify-between text-sm text-gray-500">
            <div>NEW</div>

            <div
              onMouseEnter={toggleClothingDropdown}
              onMouseLeave={toggleClothingDropdown}
            >
              <span>CLOTHING</span>
              {isClothingDropdownOpen && (
                <div className="flex flex-row gap-12 justify-start absolute left-0 right-0 bg-white shadow-lg mt-2 p-4 z-10">
                  {categories.map((category) => (
                    <div
                      key={category.category_id}
                      className="flex flex-col gap-2 px-4 py-2"
                    >
                      <span className="font-semibold py-2">
                        {category.category_name}
                      </span>
                      {subCategories
                        .filter(
                          (subCategory) =>
                            subCategory.category_id === category.category_id
                        )
                        .map((subCategory) => (
                          <a key={subCategory.subcategory_id}>
                            {subCategory.subcategory_name}
                          </a>
                        ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>MOST LOVED</div>
            <div>CAMPAIGNS</div>
            <div>BACK IN STORE</div>
            <div>EDITS</div>
            <div>ACCESSORIES</div>
            <div>SALE</div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-5 px-7 flex flex-col items-start text-sm text-gray-500">
              <div>NEW</div>
              <div
                onMouseEnter={toggleClothingDropdown}
                onMouseLeave={toggleClothingDropdown}
              >
                <span>CLOTHING</span>
                {isClothingDropdownOpen && (
                  <div className="absolute bg-white shadow-lg mt-2 py-2 w-48 z-10">
                    <div className="px-4 py-2">Category 1</div>
                    <div className="px-4 py-2">Category 2</div>
                    <div className="px-4 py-2">Category 3</div>
                  </div>
                )}
              </div>
              <div>MOST LOVED</div>
              <div>CAMPAIGNS</div>
              <div>BACK IN STORE</div>
              <div>EDITS</div>
              <div>ACCESSORIES</div>
              <div>SALE</div>
            </div>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
