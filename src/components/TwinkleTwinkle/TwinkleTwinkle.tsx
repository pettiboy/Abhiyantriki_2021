import React, { CSSProperties } from "react";
import Particles from "react-tsparticles";

interface Props {
  title: string;
  containerStyles?: CSSProperties;
  height?: string;
  width?: string;
  center?: boolean;
}

const TwinkleTwinkle = ({
  title,
  containerStyles = {},
  height = "120px",
  width = "350px",
  center = true,
}: Props) => {
  const particlesInit = () => {};
  const particlesLoaded = () => {};

  if (center) {
    containerStyles = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      ...containerStyles,
    };
  }

  return (
    <div style={containerStyles}>
      <Particles
        canvasClassName="particles"
        height={height}
        width={width}
        id="tsparticles"
        url={`${process.env.PUBLIC_URL}/particles.json`}
        init={particlesInit}
        loaded={particlesLoaded}
      ></Particles>
      <h1 style={{ margin: 20, fontSize: 50, fontFamily: "Roboto", color:"yellow" }}>
        {title}
      </h1>
    </div>
  );
};

export default TwinkleTwinkle;
