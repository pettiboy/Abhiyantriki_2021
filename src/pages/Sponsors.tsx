import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import "./Sponsors.css";
import "../components/Timeline/Timeline.css";
import InfoSection from "../components/Timeline/InfoSection";
import YearButton from "../components/Timeline/YearButton";

interface SponsorsProps {}

const Sponsors = ({}: SponsorsProps) => {
  const [caption, setCaption] = useState(
    "Abhiyantriki introduced as an individual, standalone festival of technical grandeur and pomp."
  );
  const [path, setPath] = useState("/assets/images/timeline/1998.png");

  const changeTo2021 = () => {
    console.log("changed to 2021");
    setCaption("Presented by.");
    setPath("/assets/images/events/Events.png");
  };
  const changeTo2020 = () => {
    console.log("changed to 2020");
    setCaption("Presented by.");
    setPath("/assets/images/events/Events.png");
  };
  const changeTo2019 = () => {
    console.log("changed to 2019");
    setCaption("Presented by.");
    setPath("/assets/images/events/Events.png");
  };
  const changeTo2018 = () => {
    console.log("changed to 2018");
    setCaption("Presented by.");
    setPath("/assets/images/events/Events.png");
  };

  var yearParam: String;

  const [year, setYear] = useState("2017");

  useEffect(() => {
    switch (year) {
      case "2021":
        changeTo2021();
        break;
      case "2020":
        changeTo2020();
        break;
      case "2019":
        changeTo2019();
        break;
      case "2018":
        changeTo2018();
        break;
      default:
        break;
    }
  }, [year]);
  //sponsors render logic
  return (
    <>
      <div className="container my-5" style={{ paddingTop: "1vh" }}>
        <div className="col">
          <h1
            className="text-white text-center my-5"
            style={{ fontSize: "50px", fontFamily: "Roboto" }}
          >
            Sponsors
          </h1>

          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            className="parvaah-text text-center"
            style={{ fontSize: 25, fontFamily: "Roboto" }}
          >
            Information Technology is growing exponentially constantly, every
            second, around the globe.India is not far behind with its own IT
            industry booming to new heights. Get to know about 'Future of IT
            sector in India' on the 24th of October at the Panel Session in
            Abhiyantriki 2021!
          </div>
        </div>
      </div>
      <div className="d-inline vh-100">
        <div className="d-flex justify-content-around w-100 years">
          <div onClick={() => setYear("2021")}>
            <YearButton year="2021" />
          </div>
          <div onClick={() => setYear("2020")}>
            <YearButton year="2020" />
          </div>
          <div onClick={() => setYear("2019")}>
            <YearButton year="2019" />
          </div>
          <div onClick={() => setYear("2018")}>
            <YearButton year="2018" />
          </div>
        </div>
        <div className="d-flex justify-content-center w-100 info">
          <InfoSection caption={caption} imgPath={path} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Sponsors;
