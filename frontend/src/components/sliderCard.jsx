import React, { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SliderCard = ({ product }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const imageUrl = product.image_urls[0];
  const hoverImageUrl = product.image_urls[1];
  const formattedName = product.product_name.replace(/ /g, "-").toLowerCase();

  const toggleFavorite = (event) => {
    event.preventDefault();
    setIsFavorited(!isFavorited);
  };

  const handleCardClick = () => {
    navigate(`/product-details/${formattedName}`, {
      state: { productData: product },
    });
  };

  return (
    <div>
      <div onClick={handleCardClick} className="cursor-pointer">
        <div
          className="max-w-sm bg-white relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div>
            <img
              className="w-full"
              src={isHovering ? hoverImageUrl || imageUrl : imageUrl}
              alt={product.product_name}
            />
            <div className="mt-2 flex items-start justify-between">
              <div className="flex flex-col items-start justify-start">
                <div className="text-base text-left whitespace-normal">
                  {product.product_name.toUpperCase()}
                </div>
                <div className="text-gray-700 text-sm text-left">
                  {product.price} AED
                </div>
              </div>
              <button onClick={toggleFavorite}>
                {isFavorited ? (
                  <IoMdHeart size={25} />
                ) : (
                  <IoMdHeartEmpty size={25} />
                )}
              </button>
            </div>
          </div>
          {/* {isSoldOut && (
            <div className="absolute right-2 top-2">
              <div className="p-2 bg-black text-white text-sm">SOLD OUT</div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
