import React from "react";

const CanvasImage = ({ imageUrl, path }) => {
  return (
    <section>
      <div className="w-full my-10">
        <a href={path}>
          <img src={imageUrl} alt="canvas" />
        </a>
      </div>
    </section>
  );
};

export default CanvasImage;
