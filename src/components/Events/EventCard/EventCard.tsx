import React from "react";
import "./EventCard.css";

interface EventCardProps {}

const EventCard = ({}: EventCardProps) => {
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
            <h1>Crackathon</h1>
          </div>
          <hr />
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
            placeat?
          </div>
          <hr />
          <div>
            <img src="/assets/images/events/team.png" width="20" />
            <span className="m-1">3 members per team</span>
          </div>
           <hr />
          <div>
            <img src="/assets/images/events/prize.png" width="20" />
            <span className="m-1">Prizes worth 12000</span>
          </div>
          <hr />
          <div>
            <img src="/assets/images/events/registration.png" width="20" />
            <span className="m-1">60 for 3</span>
          </div>
          <hr />
          <div>
            <img src="/assets/images/events/contact.png" width="20" />
            <span className="m-1">Vidhi 987860 Manasi 64645</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
