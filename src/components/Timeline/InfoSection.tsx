import React from "react";
import "./InfoSection.css";

interface InfoSectionProps {
  caption: string;
  imgPath: string;
}

const InfoSection = ({ caption, imgPath }: InfoSectionProps) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="text-center align-items-center">{caption}</div>
        </div>
        <div className="col-6 text-center">
          <img alt={caption} src={imgPath} width="300" />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
