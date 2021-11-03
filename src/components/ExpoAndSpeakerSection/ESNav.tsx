import React from "react";
import { exposAndSpeakersData } from "../../data/exposAndSpeakers";
import "./ES.css";

interface Props {}

const ESNav = (props: Props) => {
  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {exposAndSpeakersData.map((element) => (
        <a
          key={element.linkHash}
          onClick={(e) => onPress(e)}
          href={`#${element.linkHash}`}
        >
          <div data-to-scrollspy-id={element.linkHash} className="ss-item">
            {element.linkName}
          </div>
        </a>
      ))}
    </div>
  );
};

export default ESNav;
