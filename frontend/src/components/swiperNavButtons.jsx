import React from "react";
import { useSwiper } from "swiper/react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

export const SwiperNavButtons = ({ isDisabled }) => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-end mb-4">
      <button
        className={`rounded-full bg-banner flex items-center justify-center mx-4 ${
          isDisabled ? "disableThing" : ""
        }`}
        disabled={isDisabled}
        onClick={() => swiper.slidePrev()}
      >
        <RxCaretLeft size={32} />
      </button>
      <button
        className={`rounded-full bg-banner flex items-center justify-center ${
          isDisabled ? "disableThing" : ""
        }`}
        disabled={isDisabled}
        onClick={() => swiper.slideNext()}
      >
        <RxCaretRight size={32} />
      </button>
    </div>
  );
};
