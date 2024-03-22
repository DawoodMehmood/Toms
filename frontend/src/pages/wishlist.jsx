import React from "react";
import WishlistCard from "./../components/wishlistCard"; // Assuming WishlistCard.js is in the same directory

const Wishlist = () => {
  // Hardcoded products for demonstration
  const wishlist = [
    {
      id: 1,
      name: "Product 1",
      price: "$19.99",
      image:
        "https://cdn.shopify.com/s/files/1/2682/6366/files/2024.01.19_VRGGRL_395_1024x1024.jpg?v=1709097269",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$29.99",
      image:
        "https://cdn.shopify.com/s/files/1/2682/6366/files/POS_8485_1024x1024.jpg?v=1708404297",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$39.99",
      image:
        "https://cdn.shopify.com/s/files/1/2682/6366/files/2023.09.29_VRGGRL_PINK_CREAM_BROWN_CARDIGAN_101_1024x1024.jpg?v=1697857466",
    },
  ];

  return (
    <div className="mx-5 md:mx-24  my-12">
      <h1 className="text-3xl font-bold">My Wishlist</h1>
      <div className="flex justify-center my-8 gap-5">
        <button className="border-gray-600 text-gray-600 border font-medium py-2 px-4 ">
          SHARE WISHLIST
        </button>
        <button className="border-black border font-medium py-2 px-4">
          CLEAR ALL
        </button>
      </div>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-12 px-5">
        {wishlist.map((product) => (
          <WishlistCard key={product.id} product={product} />
        ))}
      </div>
      <div className="md:hidden mt-4">
        {/* Mobile view: Two columns of cards */}
        <div className="grid grid-cols-2 gap-4">
          {wishlist.map((product) => (
            <WishlistCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
