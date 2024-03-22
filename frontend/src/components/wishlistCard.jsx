import React from "react";

const WishlistCard = ({ product }) => {
  return (
    <div className="text-center">
      <img src={product.image} alt={product.name} className="w-full" />
      <div className="p-4 flex flex-col gap-2">
        <h3 className=" font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.price}</p>

        <button className="border border-black py-2 px-4 w-full">Remove</button>
        <button className="bg-black border border-white text-white py-2 px-4 w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
