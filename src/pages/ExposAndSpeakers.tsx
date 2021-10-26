import React from "react";
import SpaceButton from "../components/Buttons/SpaceButton";
import ScrollSpy from "../components/ScrollSpy/ScrollSpy";
import TextAndButton from "../components/TextAndButton/TextAndButton";

interface ExposAndSpeakersProps {}

const ExposAndSpeakers = ({}: ExposAndSpeakersProps) => {
  return (
    <div>
      <div className="container" style={{ paddingTop: "10vh" }}>
        <ScrollSpy />
        {/* <div
          className="
            text-center
            d-flex
            justify-content-center
            flex-column
            align-items-center
          "
        >
          <h1 className="my-5" style={{ fontSize: "50px" }}>
            Panel Session
          </h1>
          <TextAndButton
            paraText={`A live session with connoisseurs from myriad backgrounds,
            the Speaker Session at Abhiyantriki is sure to leave you wanting
            for more! Abhiyantriki has previously hosted notable speakers like
            the Late Dr A.P.J Abdul Kalam, Dr Raghuram Rajan, the former RBI Governor,
            His Holiness the Dalai Lama, and many more!`}
            buttonHref="#"
            buttonText="Register"
          />
        </div> */}
      </div>
    </div>
  );
};

export default ExposAndSpeakers;
