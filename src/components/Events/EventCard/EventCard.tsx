import React from "react";
import { eventData } from "../../../data/eventsData";
import "./EventCard.css";

interface EventCardProps {
  event: typeof eventData[0]["events"][0];
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="d-flex justify-content-center align-items-center event-card">
      <div className="row w-85 d-flex justify-content-center align-items-center">
        <div className="col">
          <img
            src="/assets/images/events/events_image.png"
            alt=""
            width="250"
          />
        </div>
        <div className="col">
          <div>
            <h1>{event.name}</h1>
          </div>
          <hr />
          <div>{event.text}</div>
          <hr />
          <div>
            <img src="/assets/images/events/team.png" width="20" />
            <span className="m-1">{event.memberLimit}</span>
          </div>
          <hr />
          <div>
            <img src="/assets/images/events/prize.png" width="20" />
            <span className="m-1">{event.prize}</span>
          </div>
          <hr />
          <div>
            <img src="/assets/images/events/registration.png" width="20" />
            <span className="m-1">{event.fees}</span>
          </div>
          <hr />
          {event.contactInfo.map((contact) => (
            <div>
              <img src="/assets/images/events/contact.png" width="20" />
              <span className="m-1">{contact}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
