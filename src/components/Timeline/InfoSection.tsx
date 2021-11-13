import React from "react";
import "./InfoSection.css";

interface InfoSectionProps {
  caption: string;
  imgPath: string;
}

const InfoSection = ({ caption, imgPath }: InfoSectionProps) => {
  return (
    <div className="container">
      <div className="row content">
        <div className="col-sm-6 col-md-6 order-2">
          <div className="my-auto fs-3">
            <div className="text-center p-4">{caption}</div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6 text-center order-1 p-4">
          <img alt={caption} src={imgPath} width="350" />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
