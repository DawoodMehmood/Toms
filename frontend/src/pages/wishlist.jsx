import React, { useEffect, useState } from "react";
import WishlistCard from "./../components/wishlistCard"; // Assuming WishlistCard.js is in the same directory
import SliderCard from "../components/sliderCard";
import { publicAPI } from "../utils/apiCalling";
import useFavoritesStore from "../store/favouritesStore";

const Wishlist = () => {
  const [products, setProducts] = useState([]);
  const favorites = useFavoritesStore((state) => state.favorites);
  const removeAllFavorites = useFavoritesStore(
    (state) => state.removeAllFavorites
  );
  const isDisabled = favorites.length === 0;

  useEffect(() => {
    if (favorites.length > 0) {
      fetchFavoriteProducts();
    }
  }, [favorites]);

  const fetchFavoriteProducts = async () => {
    if (favorites.length === 0) {
      setProducts([]);
      return;
    }
    try {
      const response = await publicAPI.post("/products/byIds", {
        ids: favorites,
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Failed to fetch favorite products", error);
    }
  };

  return (
    <div className="mx-5 md:mx-24 my-12">
      <div className="flex justify-between my-8 gap-5">
        <h1 className="text-3xl font-bold">My Wishlist</h1>
        {/* <button className="border-gray-600 text-gray-600 border font-medium py-2 px-4 ">
          SHARE WISHLIST
        </button> */}
        <button
          className={`border font-medium py-2 px-4 ${
            isDisabled ? "disableThing" : "text-black border-black"
          }`}
          onClick={removeAllFavorites}
          disabled={isDisabled}
        >
          CLEAR ALL
        </button>
      </div>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-12 px-5">
        {favorites.length > 0 &&
          products.map((product) => (
            <SliderCard key={product.id} product={product} />
          ))}
      </div>
      <div className="md:hidden mt-4">
        {/* Mobile view: Two columns of cards */}
        <div className="grid grid-cols-2 gap-4">
          {favorites.length > 0 &&
            products.map((product) => (
              <SliderCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
