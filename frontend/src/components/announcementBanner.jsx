import React, { useState, useEffect } from "react";

const Banner = () => {
  const messages = [
    { text: "FAST SHIPPING • INSTANT REFUNDS", link: "/pages/returns" },
    { text: "NEW ARRIVALS OUT NOW", link: "/collection/new" },
  ];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [opacity, setOpacity] = useState("opacity-100");

  useEffect(() => {
    const changeMessage = () => {
      setOpacity("opacity-0");
      setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
        setOpacity("opacity-100");
      }, 1000);
    };

    const intervalId = setInterval(changeMessage, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="overflow-hidden bg-banner">
      <div
        className={`h-[40px] flex items-center justify-center transition-opacity duration-1000 ${opacity} text-sm tracking-widest unselectable`}
      >
        <a href={messages[currentMessageIndex].link} className="">
          {messages[currentMessageIndex].text}
        </a>
      </div>
    </header>
  );
};

export default Banner;
