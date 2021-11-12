import React, { useState } from "react";
import "./ACarousel.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { carouselData } from "../../data/carouselData";
// import 'normalize.css/normalize.css';

interface ACarouselProps {}

const ACarousel = ({}: ACarouselProps) => {
  const [index, setIndex] = useState<number>(0);

  return (
    <>
      <div className="d-flex justify-content-around align-items-center slides">
        <div>
          {carouselData[index].text}
        </div>
        <img src={carouselData[index].imgPath} width="300"/>
      </div>
      <div className="d-flex justify-content-end align-items-center">
        <i
          className="arrows fas fa-chevron-left m-5"
          onClick={() => {
            // get min and max of all keys in our dict
            const keys = Object.keys(carouselData);
            const max = parseInt(keys[keys.length - 1]);
            const min = parseInt(keys[0]);

            if (index == min) {
              setIndex(max);
            } else {
              setIndex((prev) => prev - 1);
            }
          }}
        ></i>

        <i
          className="arrows fas fa-chevron-right m-5"
          onClick={() => {
            // get min and max of all keys in our dict
            const keys = Object.keys(carouselData);
            const max = parseInt(keys[keys.length - 1]);
            const min = parseInt(keys[0]);

            if (index == max) {
              setIndex(min);
            } else {
              setIndex((prev) => prev + 1);
            }
          }}
        ></i>
      </div>
    </>
  );
};

export default ACarousel;
