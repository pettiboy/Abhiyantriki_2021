import React, { useEffect, useState } from "react";
import "./Events.css";
import "../components/Events/EventSection";
import EventSection from "../components/Events/EventSection";
import SpaceButton from "../components/Buttons/SpaceButton";
import Footer from "../components/Footer/Footer";
import Center from "../components/Center/Center";

interface EventsProps {}

const Events = ({}: EventsProps) => {
  //if-check to render events on the page

  const [event, setEvent] = useState("Technical");

  useEffect(() => {}, [event]);
  const events = ["Technical", "Shield", "Informals", "Ideate", "Preevents"];

  return (
    <div className="events">
      <h1 className="text-center">Events</h1>
      <div style={{ display: "table", margin: "0 auto" }}>
        <div className="container p-5">
          <div className="row row-cols-auto g-5">
            {events.map((eventName) => (
              <div className="col">
                <SpaceButton
                  onPress={() => setEvent(eventName)}
                  href="#"
                  text={eventName}
                  noPlus
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <EventSection eventName={event} />
    </div>
  );
};

export default Events;
