import React, { useEffect, useState } from "react";
import "./Events.css";
import '../components/Events/EventSection'
import EventSection from "../components/Events/EventSection";
import Footer from "../components/Footer/Footer";

interface EventsProps {}

const Events = ({}: EventsProps) => {
  //if-check to render events on the page

  const [event, setEvent] = useState("Technical");

  useEffect(() => {}, [event])

  return (
    <div className="events">
      <h1 className="text-center">Events</h1>
      <div className="container g-8">
        <div className="d-flex justify-content-around">
          <div className="m-4" onClick={() => setEvent("Technical")}>
            <a className="holo-btn-fed" href="#">
              <span className="m-4">Technical</span>
              <span className="skew top"></span>
              <span className="skew bottom"></span>
            </a>
          </div>
          <div className="m-4" onClick={() => setEvent("Shield")}>
            <a className="holo-btn-fed" href="#">
              <span className="m-4">Shield</span>
              <span className="skew top"></span>
              <span className="skew bottom"></span>
            </a>
          </div>
          <div className="m-4" onClick={() => setEvent("Informals")}>
            <a className="holo-btn-fed" href="#">
              <span className="m-4">Informals</span>
              <span className="skew top"></span>
              <span className="skew bottom"></span>
            </a>
          </div>
          <div className="m-4" onClick={() => setEvent("Ideate")}>
            <a className="holo-btn-fed" href="#">
              <span className="m-4">Ideate</span>
              <span className="skew top"></span>
              <span className="skew bottom"></span>
            </a>
          </div>
          <div className="m-4" onClick={()=> setEvent("Preevents")}>
            <a className="holo-btn-fed" href="#">
              <span className="m-4">Pre-events</span>
              <span className="skew top"></span>
              <span className="skew bottom"></span>
            </a>
          </div>
        </div>
      </div>
      <EventSection eventName={event}/>
      <Footer/>
    </div>
  );
};

export default Events;
