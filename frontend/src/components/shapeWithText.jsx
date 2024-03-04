import React from "react";

const ShapeWithText = ({ path, data }) => {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <img src={path} alt="shape" className="w-[126px] h-[126px]" />
      <p>{data}</p>
    </div>
  );
};

export default ShapeWithText;
