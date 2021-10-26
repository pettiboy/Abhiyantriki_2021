import React from "react";
import SpaceButton from "../components/Buttons/SpaceButton";
import ScrollSpy from "../components/ScrollSpy/ScrollSpy";
import TextAndButton from "../components/TextAndButton/TextAndButton";
import { exposAndSpeakersData } from "../data/exposAndSpeakers";

interface ExposAndSpeakersProps {}

const ExposAndSpeakers = ({}: ExposAndSpeakersProps) => {
  return (
    <div>
      <div className="container" style={{ paddingTop: "10vh" }}>
        <ScrollSpy data={exposAndSpeakersData} />
      </div>
    </div>
  );
};

export default ExposAndSpeakers;
