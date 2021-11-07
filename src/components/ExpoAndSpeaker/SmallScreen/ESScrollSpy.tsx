import React from "react";
import { exposAndSpeakersDataJson } from "../../../data/exposAndSpeakers";
import ScrollSpy from "react-ui-scrollspy";
import TextAndButton from "../../TextAndButton/TextAndButton";

export interface SectionNodeProps {
  parentScrollContainerRef?: React.MutableRefObject<HTMLDivElement | null>;
}

const ESScrollSpy = ({ parentScrollContainerRef }: SectionNodeProps) => {
  return (
    <ScrollSpy
      parentScrollContainerRef={parentScrollContainerRef}
      scrollThrottle={100}
    >
      {exposAndSpeakersDataJson.map((element, i) => (
        <div
          id={element.linkHash}
          key={element.linkHash}
          style={{ padding: 50 }}
        >
          <h1 className="text-center" style={{ fontSize: "40px" }}>
            {element.heading}
          </h1>
          <TextAndButton
            paraText={element.paraText}
            buttonHref={element.buttonHref}
            buttonText={element.buttonText}
            fontSize={5}
          />
        </div>
      ))}
    </ScrollSpy>
  );
};

export default ESScrollSpy;
