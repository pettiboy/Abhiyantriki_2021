import React from "react";
import Ideate from "./EventRenders/Ideate";
import Informals from "./EventRenders/Informals";
import Preevents from "./EventRenders/Preevents";
import Shield from "./EventRenders/Shield";
import Technical from "./EventRenders/Technical";

interface EventSectionProps {
  eventName: String;
}

const EventSection = ({ eventName }: EventSectionProps) => {
  switch (eventName) {
    case "Technical":
      return <Technical/>;
      break;
    case "Shield":
      return <Shield/>;
      break;
    case "Informals":
      return <Informals/>;
    case "Ideate":
      return <Ideate/>;
    case "Preevents":
      return <Preevents/>;
  }
  return (
    <h1>Technical</h1>
  );
};

export default EventSection;
