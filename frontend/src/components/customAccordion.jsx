import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const CustomAccordion = ({ heading, content, isOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsExpanded(isOpen);
  }, [isOpen]);

  return (
    <div>
      <div className="w-full">
        <div
          className="w-full py-4 cursor-pointer flex justify-between items-center select-none hover:underline hover:underline-offset-4"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="font-semibold ">{heading}</span>
          <span className="hover:no-underline">
            {isExpanded ? <FaMinus /> : <FaPlus />}
          </span>
        </div>
        <div
          className={`transition-[max-height] duration-500 ease-in-out overflow-hidden`}
          style={{ maxHeight: isExpanded ? "1000px" : "0px" }}
        >
          <div className="pr-4 py-2 text-base text-gray-500 selection:bg-yellow">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomAccordion;
