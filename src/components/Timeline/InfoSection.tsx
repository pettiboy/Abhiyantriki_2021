import React from "react";
import "./InfoSection.css";

interface InfoSectionProps {
  caption: String;
  imgPath: string;
}

const InfoSection = ({ caption, imgPath }: InfoSectionProps) => {
  return (
    <div className="info-section">
      <div className="text-center">{caption}</div>
      <img src={imgPath}/>
    </div>
  );
};

export default InfoSection;
