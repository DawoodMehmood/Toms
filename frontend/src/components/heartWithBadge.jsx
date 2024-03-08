import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const HeartWithBadge = ({ count }) => {
  return (
    <div className="relative">
      <IoMdHeartEmpty size={25} />
      <span className="absolute bottom-0 left-4 h-4 w-4 text-xxs rounded-full bg-orangeColor text-white flex items-center justify-center">
        {count}
      </span>
    </div>
  );
};

export default HeartWithBadge;
