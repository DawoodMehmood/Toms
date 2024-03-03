import React, { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

const SliderCard = ({ imageUrl, hoverImageUrl, title, price, isSoldOut }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const toggleFavorite = (event) => {
    event.preventDefault();
    setIsFavorited(!isFavorited);
  };

  return (
    <div>
      <a href={`/products/${title}`}>
        <div
          className="max-w-sm bg-white relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div>
            <img
              className="w-full"
              src={isHovering ? hoverImageUrl || imageUrl : imageUrl}
              alt={title}
            />
            <div className="mt-2 flex items-start justify-between">
              <div className="flex flex-col items-start justify-center">
                <div className="text-base">{title}</div>
                <div className="text-gray-700 text-sm">{price}</div>
              </div>
              <button className="" onClick={toggleFavorite}>
                {isFavorited ? (
                  <IoMdHeart className="h-6 w-6" />
                ) : (
                  <IoMdHeartEmpty className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          {isSoldOut && (
            <div className="absolute right-2 top-2">
              <div className="p-2 bg-black text-white text-sm">SOLD OUT</div>
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default SliderCard;
