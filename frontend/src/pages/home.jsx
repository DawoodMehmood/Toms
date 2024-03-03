import React from "react";
import Video from "../components/videoJumbotron";
import CanvasImage from "../components/canvasImage";
import CanvasImageWithText from "../components/canvasImageWithText";
import canvasImage1 from "../assets/img/canvasImage.jpg";
import canvasImage2 from "../assets/img/canvasImage2.jpg";
import Gallery from "../components/gallery";
import image1 from "./../assets/img/pro-1.jpg";
import image2 from "./../assets/img/pro-2.jpg";
import image3 from "./../assets/img/pro-3.jpg";
import image4 from "./../assets/img/pro-4.jpg";
import Slider from "../components/imageSlider";
import ShapeCarousel from "../components/shapeCarousel";

const Home = () => {
  const items = [
    {
      id: 1,
      imageUrl: image1,
      text: "DRESSES",
      path: "/dresses",
    },
    {
      id: 2,
      imageUrl: image2,
      text: "SHORTS",
      path: "/shorts",
    },
    {
      id: 3,
      imageUrl: image3,
      text: "TOPS",
      path: "/tops",
    },
    {
      id: 4,
      imageUrl: image4,
      text: "SETS",
      path: "/sets",
    },
  ];
  return (
    <div>
      <Video />
      <Slider title={"NEW IN"} />
      <CanvasImageWithText
        imageUrl={canvasImage1}
        path={"/mez"}
        title={"JANUARY 24 STOCKS"}
        description={"CULT FAVOURITES ARE BACK"}
      />
      <Slider title={"MEZ"} />
      <section className="my-5">
        <div className="bg-banner flex items-center justify-center h-[60px] tracking-wider font-bold">
          <p>INSPIRING CREATIVITY & CONFIDENCE THROUGH STYLE</p>
        </div>
      </section>
      <CanvasImage imageUrl={canvasImage2} path={"/shop"} />
      <Gallery items={items} />
      <ShapeCarousel />
    </div>
  );
};

export default Home;
