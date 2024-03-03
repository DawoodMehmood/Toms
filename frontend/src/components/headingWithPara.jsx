import React from "react";

const HeadingWithPara = ({ heading, content }) => {
  return (
    <section>
      <div className="my-2">
        <div className="font-bold my-4">{heading}</div>
        <div>{content}</div>
      </div>
    </section>
  );
};

export default HeadingWithPara;
