import React, { ReactComponentElement, ReactType } from "react";
import Slider from "react-touch-drag-slider";

import { images } from "../../data/carouselData";

const Carousel = (props: { component: ReactType }) => {
  const Slider: ReactType = props.component;
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <Slider
        activeIndex={0}
        threshHold={400}
        transition={0.5}
        scaleOnDrag={true}
      >
        {images.map(({ url, title }, index) => (
            <img src={url} key={index} alt={title} height="200" className="m-4"/>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
