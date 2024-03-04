import React, { useState, useEffect } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to detect scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 1500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <FaCircleArrowUp
        size={35}
        className="fixed bottom-12 right-10 z-50 cursor-pointer text-orangeColor"
        onClick={scrollToTop}
        title="Scroll To Top"
      />
    )
  );
};

export default ScrollToTopButton;
