import React from "react";
import "./InfoSection.css";

interface InfoSectionProps {
  caption: string;
  imgPath: string;
}

const InfoSection = ({ caption, imgPath }: InfoSectionProps) => {
  return (
    <div className="d-flex justify-content-around align-items-center m-20">
      <div className="text-center w-50">{caption}</div>
      <img alt={caption} src={imgPath} width="250" className="w-25 m-10" />
    </div>
  );
};

export default InfoSection;
