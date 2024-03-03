import React from "react";

const StarRating = ({ averageRating }) => {


  // Render star icons
  const renderStars = (averageRating) => {
    const filledStars = Math.floor(averageRating);

    const emptyStars = 5 - filledStars;

    return (
      <div className="flex">
        {/* Filled stars */}
        {[...Array(filledStars)].map((_, index) => (
          <svg
            key={index}
            className="h-6 w-6 fill-current text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l2.76 5.84 6.24.92-4.51 4.39 1.06 6.18-5.55-3.15-5.55 3.15 1.06-6.18L3 8.76l6.24-.92L12 2z" />
          </svg>
        ))}
        {/* Half star */}

        {/* Empty stars */}
        {[...Array(emptyStars)].map((_, index) => (
          <svg
            key={index}
            className="h-6 w-6 fill-current text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l2.76 5.84 6.24.92-4.51 4.39 1.06 6.18-5.55-3.15-5.55 3.15 1.06-6.18L3 8.76l6.24-.92L12 2z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-center">
      {/* Render stars */}
      {renderStars(averageRating)}
      {/* Total number of reviews */}
      
    </div>
  );
};

export default StarRating;
