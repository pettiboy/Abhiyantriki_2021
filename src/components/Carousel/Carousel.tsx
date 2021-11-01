import React from "react";
import Slider from "react-touch-drag-slider";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";

import { images } from "../../data/carouselData";

const Carousel = () => {
  SwiperCore.use([Navigation]);
  return (
    <div className="vh-100">
      <Swiper navigation={true} className="mySwiper text-center">
        {images.map(({ url, title }, index) => (
          <SwiperSlide>
            <div>
              <img src={url} key={index} height="200"></img>
              <h3>{title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
