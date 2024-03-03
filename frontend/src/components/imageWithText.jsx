import React from "react";

const ImageWithText = ({ imageUrl, text, path }) => {
  return (
    <div className="relative group">
      <a href={path} className="block hover:underline underline-offset-4">
        <img src={imageUrl} alt="" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <p className="font-bold text-xl text-white group-hover:underline decoration-4 transition-all duration-300 ease-in-out">
            {text}
          </p>
        </div>
      </a>
    </div>
  );
};

export default ImageWithText;
