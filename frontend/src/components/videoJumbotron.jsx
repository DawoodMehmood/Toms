import React from "react";
import headerVideo from "../assets/video/bg-video-home.mp4";

const Video = () => {
  return (
    <section>
      <div className="relative mb-10">
        <video autoPlay loop muted className="w-full bg-black border-none">
          <source src={headerVideo} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div className="text-white text-center">
            <p className="text-5xl font-bold">Femina Dubai</p>
            <p className="text-2xl font-thin">Here to make a difference.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
