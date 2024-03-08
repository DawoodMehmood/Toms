import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "./../assets/img/pro-1.jpg";
import image2 from "./../assets/img/pro-2.jpg";
import image3 from "./../assets/img/pro-3.jpg";
import image4 from "./../assets/img/pro-4.jpg";
import image5 from "./../assets/img/pro-5.jpg";
import image6 from "./../assets/img/pro-6.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./components.css";
import { Mousewheel, Navigation } from "swiper/modules";

import SliderCard from "./sliderCard";
import { SwiperNavButtons } from "./swiperNavButtons";

const Slider = ({ title, productsData }) => {
  const sliderSettings = {
    440: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };

  return (
    <section>
      <div className="mx-16 mt-16">
        <div className="text-3xl font-semibold tracking-4">{title}</div>
        <div className="mx-5">
          <Swiper
            direction={"horizontal"}
            slidesPerView={4}
            breakpoints={sliderSettings}
            spaceBetween={30}
            loop={true}
            mousewheel={{
              forceToAxis: true,
            }}
            speed={800}
            effect="fade"
            followFinger={false}
            modules={[Mousewheel, Navigation]}
          >
            {productsData?.map((product, index) => (
              <SwiperSlide key={index}>
                <SliderCard product={product} />
              </SwiperSlide>
            ))}
            <SwiperNavButtons />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Slider;
