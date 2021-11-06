import React from "react";
import Particles from "react-tsparticles";

interface Props {}

const Header = (props: Props) => {
  const particlesInit = (main: any) => {
    console.log(main);
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };
  return (
    <div className="position-relative">
      <Particles
        canvasClassName="particles"
        height="120px"
        width="300px"
        id="tsparticles"
        url={`${process.env.PUBLIC_URL}/particles.json`}
        init={particlesInit}
        loaded={particlesLoaded}
      ></Particles>
      <h1 style={{ textAlign: "center", margin: 20 }}>Expos And Speakers</h1>
    </div>
  );
};

export default Header;
