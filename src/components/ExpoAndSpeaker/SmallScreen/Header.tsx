import React from "react";
import Particles from "react-tsparticles";
import { COLORS } from "../../../constants/constants";

interface Props {}

const Header = (props: Props) => {
  const particlesInit = (main: any) => {
    console.log(main);
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };
  return (
    <div style={{ marginTop: 20 }}>
      {/* <Particles
        canvasClassName="particles"
        height="120px"
        width="350px"
        id="tsparticles"
        url={`${process.env.PUBLIC_URL}/particles.json`}
        init={particlesInit}
        loaded={particlesLoaded}
      ></Particles> */}
      <h1 style={{ textAlign: "center" }}>Expos And Speakers</h1>
    </div>
  );
};

export default Header;
