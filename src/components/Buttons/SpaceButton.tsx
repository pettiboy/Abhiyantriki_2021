import React from "react";
import "./SpaceButton.css";

interface SpaceButtonProps {
  text: string;
  href: string;
}

const SpaceButton = ({ text, href }: SpaceButtonProps) => {
  return (
    <div className="mt-4 mb-5">
      <a className="holo-btn-fed" href={href}>
        <span className="cta-e">{text}</span>
        <span className="skew top"></span>
        <span className="skew bottom"></span>
      </a>
    </div>
  );
};

export default SpaceButton;
