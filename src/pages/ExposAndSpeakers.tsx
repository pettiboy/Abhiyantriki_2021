import { exposAndSpeakersData } from "../data/exposAndSpeakers";
import ScrollSpy from "react-ui-scrollspy";
import { useRef } from "react";
import Header from "../components/ExpoAndSpeakerSection/Header";
import ESNav from "../components/ExpoAndSpeakerSection/ESNav";

interface ExposAndSpeakersProps {}

const ExposAndSpeakers = ({}: ExposAndSpeakersProps) => {
  const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div>
      <div
        className={"position-fixed"}
        style={{
          zIndex: 2,
          background: "linear-gradient(#001121, #001121)",
          width: "100%",
        }}
      >
        <Header />
        <ESNav />
      </div>
      <div className="position-relative flex-column d-flex justify-content-center">
        <div ref={parentScrollContainerRef} className="p-5" tabIndex={0}>
          <ScrollSpy scrollThrottle={300} offsetTop={0} offsetBottom={0}>
            {exposAndSpeakersData.map((element, i) => (
              <div key={element.linkHash} id={element.linkHash}>
                {element.component}
              </div>
            ))}
          </ScrollSpy>
        </div>
      </div>
    </div>
  );
};

export default ExposAndSpeakers;
