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

const DropdownMenu = ({ children }) => {
  return (
    <div className="flex flex-row gap-12 absolute left-0 right-0 border-gray border-b shadow-sm bg-white px-12 z-10">
      {children}
    </div>
  );
};

const CategoryItem = ({ category, isNavbarItem = false }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div className="cursor-pointer text-gray-800 p-4 ">{category.name}</div>

      {isNavbarItem && category.children && isDropdownOpen && (
        <DropdownMenu>
          {category.children.map((child) => (
            <>
              <div key={child.category_id} className="px-4 py-5">
                <div className="font-bold mb-2">{child.name}</div>
                <div className="">
                  {child.children.map((subChild) => (
                    <div
                      key={subChild.category_id}
                      className="py-1 hover:underline"
                    >
                      {subChild.name}
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))}
        </DropdownMenu>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
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
              <Link to={"/login"}>
                <CiUser size={26} />
              </Link>
              <button onClick={toggleCart}>
                <CartWithBadge count={1} />
              </button>
              <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
            </div>
          </div>

          <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:flex px-7 items-end justify-center gap-10">
                {categories.map((category) => (
                  <CategoryItem
                    key={category.category_id}
                    category={category}
                    isNavbarItem={true}
                  />
                ))}
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
