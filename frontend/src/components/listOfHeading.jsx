import React from "react";

const ListOfHeading = ({ order, heading }) => {
  return (
    <section>
      <div className="my-2">
        <div className="number-heading font-bold my-4 flex justify-center">
          {order}
        </div>
        <div className="text-center">{heading}</div>
      </div>
    </section>
  );
};

export default ListOfHeading;
