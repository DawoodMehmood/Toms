import React from "react";
import { Link } from "react-router-dom";

const CanvasImage = ({ imageUrl, path }) => {
  return (
    <section>
      <div className="w-full my-10">
        <Link to={path}>
          <img src={imageUrl} alt="canvas" />
        </Link>
      </div>
    </section>
  );
};

export default CanvasImage;
