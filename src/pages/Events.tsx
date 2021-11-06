import React, { useEffect, useState } from "react";
import "./Events.css";
import "../components/Events/EventSection";
import EventSection from "../components/Events/EventSection";
import SpaceButton from "../components/Buttons/SpaceButton";
import Footer from "../components/Footer/Footer";

interface EventsProps {}

const Events = ({}: EventsProps) => {
  //if-check to render events on the page

  const [event, setEvent] = useState("Technical");

  useEffect(() => {}, [event]);
  const events = ["Technical", "Shield", "Informals", "Ideate", "Preevents"];

  return (
    <div className="events">
      <h1 className="text-center">Events</h1>
      <div className="container g-8">
        <div className="d-flex justify-content-around">
          {events.map((eventName) => (
            <SpaceButton
              onPress={() => setEvent(eventName)}
              href="#"
              noPlus
              text={eventName}
            />
          ))}
        </div>
      </div>
      <EventSection eventName={event} />
      <Footer />
    </div>
  );
};

export default Events;
