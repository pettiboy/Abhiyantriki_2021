import React from "react";
import { eventData } from "../../../data/eventsData";
import ScrollSpy from "react-ui-scrollspy";
import TextAndButton from "../../TextAndButton/TextAndButton";
import TextAndImage from "../../TextAndImage/TextAndImage";

export interface SectionNodeProps {
  parentScrollContainerRef?: React.MutableRefObject<HTMLDivElement | null>;
}

const ESScrollSpy = ({ parentScrollContainerRef }: SectionNodeProps) => {
  return (
    <ScrollSpy
      parentScrollContainerRef={parentScrollContainerRef}
      scrollThrottle={100}
      // offsetTop={35}
      useBoxMethod
    >
      {eventData.map((element, i) => (
        <div
          id={element.linkHash}
          key={element.linkHash}
          style={
            i === 3 ? { paddingBottom: 200, padding: 50 } : { padding: 50 }
          }
        >
          <h1 className="mt-5 text-center" style={{ fontSize: "50px" }}>
            {element.eventName}
          </h1>
          {element.events.map((element) => {
            return (
              <TextAndImage
                heading={element.name}
                text={element.text}
                image={element.eventImgPath}
              />
            );
          })}
        </div>
      ))}
    </ScrollSpy>
  );
};

export default ESScrollSpy;
