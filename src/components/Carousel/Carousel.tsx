import React, { ReactComponentElement, ReactType } from "react";
import Slider from "react-touch-drag-slider";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.min.css";


import { images } from "../../data/carouselData";

const Carousel = () => {
  SwiperCore.use([Navigation]);
  return (
    <div>
      <Swiper navigation={true} className="mySwiper text-center">
        <SwiperSlide className="m-3">Swiper1</SwiperSlide>
        <SwiperSlide className="m-3">Swiper1</SwiperSlide>
        <SwiperSlide className="m-3">Swiper1</SwiperSlide>
        <SwiperSlide className="m-3">Swiper1</SwiperSlide>
        <SwiperSlide className="m-3">Swiper1</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
