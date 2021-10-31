import React, { createRef, LegacyRef, useRef } from "react";
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

  // const lineRefs = React.useRef<Array<HTMLDivElement>>([]);
  const items = useRef(Array(data.length).fill(createRef()));
  // lineRefs.current = data.map((_, i) => lineRefs.current[i] ?? createRef());

  React.useEffect(() => {
    if (location.hash) {
      setTimeout(function () {
        window.scrollTo(0, 0);
        const dataNode = data.findIndex(
          (scrollSpyNode) => scrollSpyNode.linkHash === location.hash
        );
        // window.scrollTo(location.hash);
      }, 1);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="d-flex">
      <div id={useId} className="list-group ">
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

      {/* section to spy on */}
      <div
        data-bs-spy="scroll"
        data-bs-target={`#${useId}`}
        data-bs-offset="60"
        className="position-relative overflow-auto p-4"
        style={{ height: 500 }}
        tabIndex={0}
      >
        {data.map((element, i) => (
          <div
            // ref={items[i]}
            key={element.linkHash}
            id={element.linkHash}
          >
            {element.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollSpy;
