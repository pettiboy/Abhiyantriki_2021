import BSScrollSpy from "../components/ScrollSpy/ScrollSpy";
import { exposAndSpeakersData } from "../data/exposAndSpeakers";
import ScrollSpy from "react-ui-scrollspy";
import { useRef } from "react";

interface ExposAndSpeakersProps {}

const ExposAndSpeakers = ({}: ExposAndSpeakersProps) => {
  const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="container">
      {/* <BSScrollSpy data={exposAndSpeakersData} /> */}
      <div className="row vh-100">
        <div className="col-sm-4 col-md-4 flex-column d-flex justify-content-center">
          <div className="list-group">
            {exposAndSpeakersData.map((element) => (
              <a
                key={element.linkHash}
                className="list-group-item list-group-item-action"
                href={`#${element.linkHash}`}
                data-to-scrollspy-id={element.linkHash}
              >
                {element.linkName}
              </a>
            ))}
          </div>
        </div>

        <div className="col-sm-8 col-md-8 flex-column d-flex justify-content-center">
          <div
            ref={parentScrollContainerRef}
            className="p-5 position-relative overflow-auto"
            style={{ height: "90vh" }}
            tabIndex={0}
          >
            <ScrollSpy
              parentScrollContainerRef={parentScrollContainerRef}
              scrollThrottle={300}
              offsetTop={0}
              offsetBottom={0}
            >
              {exposAndSpeakersData.map((element, i) => (
                <div key={element.linkHash} id={element.linkHash}>
                  {element.component}
                </div>
              ))}
            </ScrollSpy>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExposAndSpeakers;
