import React from "react";
import { ScrollSpy as BSScrollSpy } from "bootstrap";

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

  React.useEffect(() => {
    setTimeout(() => {
      var scrollSpy = new BSScrollSpy(document.body, {
        target: useId,
      });
      console.log(scrollSpy.refresh);
      scrollSpy.refresh();
    }, 0);
  }, []);

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
        {data.map((element) => (
          <div key={element.linkHash} id={element.linkHash}>
            {element.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollSpy;
