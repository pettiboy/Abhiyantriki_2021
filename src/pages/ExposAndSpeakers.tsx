import React from "react";
import SpaceButton from "../components/Buttons/SpaceButton";

interface ExposAndSpeakersProps {}

const ExposAndSpeakers = ({}: ExposAndSpeakersProps) => {
  return (
    <div className="text-white">
      <div className="container" style={{ paddingTop: 30 }}>
        <div
          className="
              text-center
              d-flex
              justify-content-center
              flex-column
              align-items-center
            "
        >
          <h1 className="my-5" style={{ fontSize: 50 }}>
            Get Involved
          </h1>
          <p className="my-5 fs-4 responsive-para">
            Do you know someone with the potential to build something that pawns
            over the technology being displayed in Abhiyantriki and will leave
            the audience awestruck? If yes, feel free to add their details in
            the form below and we’ll reach out to them!
          </p>
          <div className="mt-4 mb-5">
            <SpaceButton text="Nominate an Exhibitor" />
          </div>
          <p className="my-5 fs-4 responsive-para">
            Sponsors and Partners are a key component that helps make
            Abhiyantriki a fest worthy of all the praise and acclaim it has been
            garnered over the ages. Along with monetary support, you can feel
            free to help us out in any other way possible. Fill out the form
            below to get in touch with us:
          </p>
          <div className="mt-4 mb-5">
            <SpaceButton text="Partner with us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExposAndSpeakers;
