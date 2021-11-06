import { userInfo } from "os";
import React, { useEffect, useState } from "react";
import InfoSection from "./InfoSection";
import YearButton from "./YearButton";

interface TimelineProps {}

const Timeline = ({}: TimelineProps) => {
  const [caption, setCaption] = useState("Year 2016");
  const [path, setPath] = useState("/assets/images/timeline/1998.png");

  const changeTo1998 = () => {
    console.log("changed to 1998");
    setCaption(
      "Abhiyantriki introduced as an individual, standalone festival of technical grandeur and pomp."
    );
    setPath("/assets/images/timeline/1998.png");
  };
  const changeTo2008 = () => {
    console.log("changed to 2008");
    setCaption(
      "Funds collected this year were all donated for the rehabilitation of the flood struck Bihar and Abhiyantriki rose in popularity with extensive media coverage."
    );
    setPath("/assets/images/timeline/2008.png");
  };
  const changeTo2009 = () => {
    console.log("changed to 2009");
    setCaption(
      "KJSCE marks 25 years since its inauguration,  and the closing ceremony of Abhiyantriki was ornamented by the presence of late Dr. A.P.J. Abdul Kalam."
    );
    setPath("/assets/images/timeline/2009.png");
  };
  const changeTo2014 = () => {
    console.log("changed to 2014");
    setCaption(
      "The maiden year for Start-up and Auto Expo, Abhiyantriki this year also encompassed Rohit Suri, the Jagaur India CEO as one of the keynote speakers"
    );
    setPath("/assets/images/timeline/2014.png");
  };

  var yearParam: String;

  const [year, setYear] = useState("2016");

  useEffect(() => {
    switch (year) {
      case "1998":
        changeTo1998();
        break;
      case "2008":
        changeTo2008();
        break;
      case "2009":
        changeTo2009();
        break;
      case "2014":
        changeTo2014();
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
          <div onClick={() => setYear("1998")}>
            <YearButton year="1998" />
          </div>
          <div onClick={() => setYear("2008")}>
            <YearButton year="2008" />
          </div>
          <div onClick={() => setYear("2009")}>
            <YearButton year="2009" />
          </div>
          <div onClick={() => setYear("2014")}>
            <YearButton year="2014" />
          </div>
        </div>
        <div className="d-flex justify-content-center w-100">
          <InfoSection caption={caption} imgPath={path} />
        </div>
      </div>
    </>
  );
};

export default Timeline;
