import React, { useEffect, useState } from "react";
import "./Events.css";
import "../components/Events/EventSection";
import EventSection from "../components/Events/EventSection";
import SpaceButton from "../components/Buttons/SpaceButton";

interface EventsProps {}

const Events = ({}: EventsProps) => {
  //if-check to render events on the page

  const [event, setEvent] = useState("Technical");

  useEffect(() => {}, [event]);

  return (
    <div className="events">
      <h1 className="text-center">Events</h1>
      <div className="container g-8">
        <div className="d-flex justify-content-around">
          <SpaceButton
            onPress={() => setEvent("Technical")}
            href="#"
            noPlus
            text="Technical"
          />
          <SpaceButton
            onPress={() => setEvent("Shield")}
            href="#"
            noPlus
            text="Shield"
          />
          <SpaceButton
            onPress={() => setEvent("Informals")}
            href="#"
            noPlus
            text="Informals"
          />
          <SpaceButton
            onPress={() => setEvent("Ideate")}
            href="#"
            noPlus
            text="Ideate"
          />
          <SpaceButton
            onPress={() => setEvent("Preevents")}
            href="#"
            noPlus
            text="Preevents"
          />
        </div>
      </div>
      <EventSection eventName={event} />
    </div>
  );
};

export default Events;
