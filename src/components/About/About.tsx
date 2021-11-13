import React from "react";
import { COLORS } from "../../constants/constants";
import "./About.css";

interface AboutProps {}

const About = ({}: AboutProps) => {
  return (
    <div className="my-5">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <img
            src="assets/logos/kjsce.png"
            alt=""
            className="kj-img kjsce m-5"
            width="400"
          />
          <div className="about-kjsce">
            <h1 className="text-end" style={{ color: COLORS.YELLOW }}>
              KJSCE
            </h1>
            <p className="m-3">
              K.J. Somaiya College of Engineering is a nationally reputed
              engineering college under the Somaiya Vidyavihar University (SVU)
              offering 4-year B-Tech courses to 5 branches of Engineering. The
              college hosts three exuberant festivals: Abhiyantriki, Skream, and
              Symphony.
            </p>
          </div>
        </div>
        <h1
          className="text-center"
          style={{ color: "aliceblue", fontWeight: "bolder" }}
        >
          ABOUT
        </h1>
        <div
          className="
          d-sm-flex
          justify-content-between
          align-items-center
          flex-row-reverse
          rev
        "
        >
          <div>
            <img
              src="assets/logos/abhiyantriki_logo.png"
              alt=""
              className="kj-img abhiyantriki mb-5 mt-5"
              width="200"
            />
          </div>
          <div className="about-abhiyantriki">
            <h1 className="text-start" style={{ color: COLORS.YELLOW }}>
              ABHIYANTRIKI
            </h1>
            <p>
              K.J. Somaiya College of Engineering is a nationally reputed
              engineering college under the Somaiya Vidyavihar University (SVU)
              offering 4-year B-Tech courses to 5 branches of Engineering. The
              college hosts three exuberant festivals: Abhiyantriki, Skream, and
              Symphony.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
