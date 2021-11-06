import React from "react";

interface EventSectionProps {
  eventName: String;
}

const EventSection = ({ eventName }: EventSectionProps) => {
  switch (eventName) {
    case "Technical":
      return <h1>Technical</h1>;
      break;
    case "Shield":
      return <h1>Shield</h1>;
      break;
    case "Informals":
      return <h1>Informals</h1>;
    case "Ideate":
      return <h1>Ideate</h1>;
    case "Preevents":
      return <h1>Preevents</h1>;
  }
  return (
    <h1>Technical</h1>
  );
};

export default EventSection;
