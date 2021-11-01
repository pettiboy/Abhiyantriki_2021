import React from "react";
import Slider from "react-touch-drag-slider";
import Coverflow from "react-coverflow";
import { StyleRoot } from 'radium';

import { images } from "../../data/carouselData";

const Carousel = () => {
  return (
    <div className="vh-100 text-center">
     <StyleRoot>
    <Coverflow
      displayQuantityOfSide={2}
      navigation
      infiniteScroll
      enableHeading
      media={{
        '@media (max-width: 768px)': {
          width: '100vw',
          height: '500px'
        },
        '@media (min-width: 768px)': {
          width: '100vw',
          height: '500px'     
        }
      }}
    >
      <img src='/assets/images/events/Events.png' data-action="https://facebook.github.io/react/" height="175"/>
      <img src='/assets/images/events/Informals.png' data-action="http://passer.cc" height="175"/>
      <img src='/assets/images/events/internship_expo.png' data-action="https://doce.cc/" height="175"/>
      <img src='/assets/images/events/parvaah.png' data-action="http://tw.yahoo.com" height="175"/>
    </Coverflow>
  </StyleRoot>
    </div>
  );
};

export default Carousel;
