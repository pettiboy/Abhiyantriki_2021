import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="container g-2" style={{ overflowX: "hidden" }}>
      <div className="vh-100 text-center">
        <StyleRoot>
          <Coverflow
            displayQuantityOfSide={2}
            navigation
            infiniteScroll
            enableHeading
            media={{
              "@media (max-width: 768px)": {
                width: "100vw",
                height: "500px",
              },
              "@media (min-width: 768px)": {
                width: "100vw",
                height: "500px",
              },
            }}
          >
            <div className="carousel-img">
              <img
                alt="img"
                src="/assets/images/events/Events.png"
                data-action="https://facebook.github.io/react/"
                width="200"
              />
            </div>
            <div className="carousel-img">
              <img
                alt="img"
                src="/assets/images/events/Informals.png"
                data-action="http://passer.cc"
                width="200"
              />
            </div>
            <div className="carousel-img">
              <img
                alt="img"
                src="/assets/images/events/internship_expo.png"
                data-action="https://doce.cc/"
                width="200"
              />
            </div>
            <div className="carousel-img">
            <img
              alt="img"
              src="/assets/images/events/parvaah.png"
              data-action="http://tw.yahoo.com"
              width="200"     
            />
            </div>
          </Coverflow>
        </StyleRoot>
      </div>
    </div>
  );
};

export default Carousel;
