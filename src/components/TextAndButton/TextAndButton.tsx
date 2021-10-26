import React from "react";
import SpaceButton from "../Buttons/SpaceButton";

interface TextAndButtonProps {
  paraText: string;
  buttonText: string;
  buttonHref: string;
}

const TextAndButton = ({
  paraText,
  buttonText,
  buttonHref,
}: TextAndButtonProps) => {
  return (
    <>
      <p className="my-5 fs-4 responsive-para">{paraText}</p>
      <div className="mt-4 mb-5">
        <SpaceButton href={buttonHref} text={buttonText} />
      </div>{" "}
    </>
  );
};

export default TextAndButton;
