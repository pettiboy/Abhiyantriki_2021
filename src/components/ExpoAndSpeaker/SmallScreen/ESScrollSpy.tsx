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
      // offsetTop={35}
    >
      {exposAndSpeakersDataJson.map((element, i) => (
        <div
          id={element.linkHash}
          key={element.linkHash}
          style={
            i === 3
              ? { paddingBottom: 200, padding: 50 }
              : i == 0
              ? { marginTop: 80, padding: 50 }
              : { padding: 50 }
          }
        >
          <h1 className="mt-5 text-center" style={{ fontSize: "50px" }}>
            {element.heading}
          </h1>
          <TextAndButton
            paraText={element.paraText}
            buttonHref={element.buttonHref}
            buttonText={element.buttonText}
          />
        </div>
      ))}
    </ScrollSpy>
  );
};

export default ESScrollSpy;
