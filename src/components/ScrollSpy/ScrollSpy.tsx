import React from "react";
import { useLocation } from "react-router-dom";

export interface ScrollSpyNode {
  linkName: string;
  linkHash: string;
  component: React.ReactNode;
}

interface ScrollSpyProps {
  data: ScrollSpyNode[];
}

const ScrollSpy = ({ data }: ScrollSpyProps) => {
  const useId = "scroll-list-100";
  const location = useLocation();
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // it worksss!!
    // last but not least I would like to thank me
    // for believing in me
    if (location.hash && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);

      const target = window.document.getElementById(location.hash.slice(1));
      if (target) {
        console.log(target);
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="row vh-100">
      <div className="col-sm-4 col-md-4 flex-column d-flex justify-content-center">
        <div id={useId} className="list-group">
          {data.map((element) => (
            <a
              key={element.linkHash}
              className="list-group-item list-group-item-action"
              href={`#${element.linkHash}`}
            >
              {element.linkName}
            </a>
          ))}
        </div>
      </div>

      {/* section to spy on */}
      <div className="col-sm-8 col-md-8 flex-column d-flex justify-content-center">
        <div
          ref={scrollContainerRef}
          data-bs-spy="scroll"
          data-bs-target={`#${useId}`}
          data-bs-offset="60"
          className="position-relative overflow-auto p-5"
          style={{ height: "90vh" }}
          tabIndex={0}
        >
          {data.map((element, i) => (
            <div key={element.linkHash} id={element.linkHash}>
              {element.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSpy;
