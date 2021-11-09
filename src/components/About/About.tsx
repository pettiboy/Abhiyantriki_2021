import React from "react";
import './About.css';

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
            <h1 className="text-end" style={{ color: "palegoldenrod" }}>KSJCE</h1>
            <p className="m-3">
              K.J. Somaiya College of Engineering is a nationally reputed
              engineering college under the Somaiya Vidyavihar University (SVU)
              offering 4-year B-Tech courses to 5 branches of Engineering. The
              college hosts three exuberant festivals: Abhiyantriki, Skream, and
              Symphony.
            </p>
          </div>
        </div>
        <h1 className="text-center" style={{ color: "aliceblue", fontWeight: 'bolder'}}>
          ABOUT
        </h1>
        <div
          className="
          d-md-flex
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
              className="kj-img abhiyantriki m-5"
              width='300'
            />
          </div>
          <div className="about-abhiyantriki">
            <h1 className="text-start" style={{ color: "palegoldenrod" }}>ABHIYANTRIKI</h1>
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
