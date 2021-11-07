import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";

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
            <img
              alt="img"
              src="/assets/images/events/Events.png"
              data-action="https://facebook.github.io/react/"
              height="175"
            />
            <img
              alt="img"
              src="/assets/images/events/Informals.png"
              data-action="http://passer.cc"
              height="175"
            />
            <img
              alt="img"
              src="/assets/images/events/internship_expo.png"
              data-action="https://doce.cc/"
              height="175"
            />
            <img
              alt="img"
              src="/assets/images/events/parvaah.png"
              data-action="http://tw.yahoo.com"
              height="175"
            />
          </Coverflow>
        </StyleRoot>
      </div>
    </div>
  );
};

export default Carousel;
