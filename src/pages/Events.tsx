import React from "react";
import './Events.css';

interface EventsProps {}

const Events = ({}: EventsProps) => {
  return (
    <div className="events">
      <h1 className="text-center">Events</h1>
      <div className="container g-8">
        <div className="d-flex justify-content-center">
        <div className="m-4">
            <a className='holo-btn-fed' href='#'>
              <span className="m-4">Technical</span>
              <span className='skew top'></span>
              <span className='skew bottom'></span>
              </a>
          </div>
        <div className="m-4">
            <a className='holo-btn-fed' href='#'>
              <span className="m-4">Shield</span>
              <span className='skew top'></span>
              <span className='skew bottom'></span>
              </a>
          </div>
        <div className="m-4">
            <a className='holo-btn-fed' href='#'>
              <span className="m-4">Technical</span>
              <span className='skew top'></span>
              <span className='skew bottom'></span>
              </a>
          </div>
        <div className="m-4">
            <a className='holo-btn-fed' href='#'>
              <span className="m-4">Informals</span>
              <span className='skew top'></span>
              <span className='skew bottom'></span>
              </a>
          </div>
        <div className="m-4">
            <a className='holo-btn-fed' href='#'>
              <span className="m-4">Ideate</span>
              <span className='skew top'></span>
              <span className='skew bottom'></span>
              </a>
          </div>
        <div className="m-4">
            <a className='holo-btn-fed' href='#'>
              <span className="m-4">Pre-events</span>
              <span className='skew top'></span>
              <span className='skew bottom'></span>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
