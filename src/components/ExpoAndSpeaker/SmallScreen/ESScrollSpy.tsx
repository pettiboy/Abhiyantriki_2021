import React from "react";
import { exposAndSpeakersDataJson } from "../../../data/exposAndSpeakers";
import ScrollSpy from "react-ui-scrollspy";
import TextAndButton from "../../TextAndButton/TextAndButton";
import TextAndImage from "../../TextAndImage/TextAndImage";

export interface SectionNodeProps {
  parentScrollContainerRef?: React.MutableRefObject<HTMLDivElement | null>;
  navContainerRef?: React.MutableRefObject<HTMLDivElement | null>;
}

const ESScrollSpy = ({
  parentScrollContainerRef,
  navContainerRef,
}: SectionNodeProps) => {
  return (
    <ScrollSpy
      parentScrollContainerRef={parentScrollContainerRef}
      navContainerRef={navContainerRef}
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
          <div>
            {element.cards.map((card) => (
              <TextAndImage
                key={card.heading}
                image={card.image}
                text={card.text}
                heading={card.heading}
              />
            ))}
          </div>
        </div>
      ))}
    </ScrollSpy>
  );
};

export default ESScrollSpy;
