import React from "react";
import ShapeWithText from "./shapeWithText";
import star from "../assets/img/starShape.webp";
import cyclone from "../assets/img/cycloneShape.webp";
import wave from "../assets/img/waveShape.webp";

const ShapeCarousel = () => {
  return (
    <div className="w-full flex items-center justify-evenly">
      <ShapeWithText path={wave} data={"DESIGNED IN AUSTRALIA"} />
      <ShapeWithText path={star} data={"EXCLUSIVE PRINTS"} />
      <ShapeWithText path={cyclone} data={"CELEBRATING INDIVIDUALITY"} />
    </div>
  );
};

export default ShapeCarousel;
