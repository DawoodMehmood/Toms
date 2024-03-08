import React from "react";
import ImageWithText from "./imageWithText";

const Gallery = ({ items }) => {
  return (
    <section>
      <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item) => (
          <ImageWithText key={item.category_id} category={item} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
