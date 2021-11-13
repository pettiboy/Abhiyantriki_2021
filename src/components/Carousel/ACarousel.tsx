import React, { useEffect, useRef, useState } from "react";
import "./ACarousel.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { carouselData } from "../../data/carouselData";
// import AOS from "aos";
// import 'normalize.css/normalize.css';

interface ACarouselProps {}

const ACarousel = ({}: ACarouselProps) => {
  const [index, setIndex] = useState<number>(0);
  const [anim, setAnim] = useState<boolean | null>(false);

  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setAnim(true);
  }, [index]);

  // AOS.init();

  return (
    <>
      <div className="d-sm-flex justify-content-around align-items-center slides">
        <div className="text-grid w-50">
          <div
            ref={textRef}
            // className={anim ? "anim-loader" : ""}
            id="grid-title"
          >
            {carouselData[index].title}
          </div>
          <div
            ref={textRef}
            // className={anim ? "anim-loader" : ""}
            id="grid-text"
          >
            {carouselData[index].text}
          </div>
        </div>
        <div ref={imgRef} className={anim ? "anim-loader" : ""}>
          <img src={carouselData[index].imgPath} width="200" />
        </div>
      </div>
      <div className="d-md-flex justify-content-end align-items-center navigate">
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
            setAnim(false);
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
            setAnim(false);
          }}
        ></i>
      </div>
    </>
  );
};

export default ACarousel;
