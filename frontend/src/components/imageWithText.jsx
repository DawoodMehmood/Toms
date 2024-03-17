import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "./../assets/img/pro-1.jpg";

const ImageWithText = ({ category }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(
      `/grid/categories/${category.category_name}/${category.category_id}`
    );
  };
  return (
    <div className="relative group">
      <div
        onClick={handleCardClick}
        className="cursor-pointer block hover:underline underline-offset-4"
      >
        <img src={image1} alt="" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <p className="font-bold text-xl text-white group-hover:underline decoration-4 transition-all duration-300 ease-in-out">
            {category.category_name.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
