import React from "react";
import Footer from "../components/Footer/Footer";
import "./Sponsors.css";

interface SponsorsProps {}

const Sponsors = ({}: SponsorsProps) => {
  //sponsors render logic
  return (
    <>
      <div className="sponsor-head text-center">Sponsors</div>
      <div className="sponsor-text text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
        voluptatibus?
      </div>
    </>
  );
};

export default Sponsors;
