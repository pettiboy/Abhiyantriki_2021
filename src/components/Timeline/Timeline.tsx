import { userInfo } from "os";
import React, { useEffect, useState } from "react";
import InfoSection from "./InfoSection";
import YearButton from "./YearButton";

interface TimelineProps {}

const Timeline = ({}: TimelineProps) => {
  const [caption, setCaption] = useState("Year 2016");
  const [path, setPath] = useState("/assets/images/events/Events.png");

  const changeTo2016 = () => {
    console.log("changed to 2016");
    setCaption("Year 2016");
    setPath("/assets/images/events/Events.png");
  };
  const changeTo2017 = () => {
    console.log("changed to 2017");
    setCaption("Year 2017");
    setPath("/assets/images/events/Informals.png");
  };
  const changeTo2018 = () => {
    console.log("changed to 2018");
    setCaption("Year 2018");
    setPath("/assets/images/events/parvaah.png");
  };
  const changeTo2019 = () => {
    console.log("changed to 2019");
    setCaption("Year 2019");
    setPath("/assets/images/events/internship_expo.png");
  };

  var yearParam: String;

  const [year, setYear] = useState("2016");

  useEffect(() => {
    switch (year) {
      case "2016":
        changeTo2016();
        break;
      case "2017":
        changeTo2017();
        break;
      case "2018":
        changeTo2018();
        break;
      case "2019":
        changeTo2019();
        break;
      default:
        break;
    }
  }, [year]);

  return (
    <>
      <h1 className="text-center m-10">Timeline</h1>
      <div className="d-inline vh-100">
        <div className="d-flex justify-content-around w-100">
          <div onClick={() => setYear("2016")}>
            <YearButton year="2016" />
          </div>
          <div onClick={() => setYear("2017")}>
            <YearButton year="2017" />
          </div>
          <div onClick={() => setYear("2018")}>
            <YearButton year="2018" />
          </div>
          <div onClick={() => setYear("2019")}>
            <YearButton year="2019" />
          </div>
        </div>
        <div className="d-flex justify-content-center w-100">
          <InfoSection caption={caption} imgPath={path}/>
        </div>
      </div>
    </>
  );
};

export default Timeline;
