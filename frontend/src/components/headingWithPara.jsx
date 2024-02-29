import React from "react";

const HeadingWithPara = ({ heading, content }) => {
  return (
    <>
      <div className="my-2">
        <div className="font-bold my-4">{heading}</div>
        <div>{content}</div>
      </div>
    </>
  );
};

export default HeadingWithPara;
