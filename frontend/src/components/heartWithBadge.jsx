import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import useFavoritesStore from "../store/favouritesStore";

const HeartWithBadge = () => {
  const favorites = useFavoritesStore((state) => state.favorites);
  return (
    <div className="relative">
      <IoMdHeartEmpty size={25} />
      {favorites.length > 0 && (
        <span className="absolute bottom-0 left-4 h-4 w-4 text-xxs rounded-full bg-orangeColor text-white flex items-center justify-center">
          {favorites.length}
        </span>
      )}
    </div>
  );
};

export default HeartWithBadge;
