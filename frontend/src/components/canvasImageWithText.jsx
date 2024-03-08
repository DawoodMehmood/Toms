import React from "react";
import { Link } from "react-router-dom";

const CanvasImage = ({ imageUrl, path, title, description }) => {
  return (
    <section>
      <div className="w-full my-10 relative">
        <img src={imageUrl} alt="canvas" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center gap-5 text-white  drop-shadow-lg">
          <p className="text-5xl font-semibold tracking-4">{title}</p>
          <p className="font-thin text-2xl text-white">{description}</p>
          <Link to={path} className="decoration-none">
            <button className="tracking-2 border px-4 py-2 hover:bg-orangeColor text-xl">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CanvasImage;
