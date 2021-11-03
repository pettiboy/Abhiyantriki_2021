import React from "react";
import SpaceButton from "../Buttons/SpaceButton";
import Center from "../Center/Center";

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
    <Center>
      <p className="my-5 fs-4 responsive-para text-center">{paraText}</p>
      <div className="mt-4 mb-5">
        <SpaceButton href={buttonHref} text={buttonText} />
      </div>{" "}
    </Center>
  );
};

export default TextAndButton;
