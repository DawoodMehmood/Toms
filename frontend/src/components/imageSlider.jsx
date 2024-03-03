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
import { Mousewheel, Navigation, Autoplay } from "swiper/modules";

import SliderCard from "./sliderCard";
import { SwiperNavButtons } from "./swiperNavButtons";

const Slider = ({ title }) => {
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
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            speed={800}
            effect="fade"
            followFinger={false}
            modules={[Mousewheel, Navigation, Autoplay]}
          >
            <SwiperSlide>
              <SliderCard
                imageUrl={image1}
                hoverImageUrl={image2}
                title={"TARA LINEN SHORTS"}
                price={"$987 AUD"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                imageUrl={image1}
                title={"ETTA HOOPS TWO TONED"}
                price={"$987 AUD"}
                isSoldOut={true}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                imageUrl={image1}
                title={"AZURE NECKLACE GOLD"}
                price={"$987 AUD"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                imageUrl={image1}
                title={"AZURE NECKLACE SILVER"}
                price={"$987 AUD"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                imageUrl={image1}
                title={"TERRA LINEN SHIRT"}
                price={"$987 AUD"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                imageUrl={image1}
                title={"ZEILA LINEN PANTS"}
                price={"$987 AUD"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                imageUrl={image1}
                title={"ZEILA LINEN TOP"}
                price={"$987 AUD"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                imageUrl={image1}
                title={"AURELIA EARINGS GOLD"}
                price={"$987 AUD"}
              />
            </SwiperSlide>
            <SwiperNavButtons />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Slider;
