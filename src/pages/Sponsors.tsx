import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import "./Sponsors.css";
import "../components/Timeline/Timeline.css";
import InfoSection from "../components/Timeline/InfoSection";
import YearButton from "../components/Timeline/YearButton";
import Center from "../components/Center/Center";
import { sponsorsImgSources } from "../data/sponsorsImgSources";

interface SponsorsProps {}

const Sponsors = ({}: SponsorsProps) => {
  const [year, setYear] = useState<number>(2021);

  return (
    <div className="container">
      <h1 className={"text-center"}>Sponsers</h1>
      <p className={"responsive-para text-center" + ` fs-4`}>
        Information Technology is growing exponentially constantly, every
        second, around the globe.India is not far behind with its own IT
        industry booming to new heights. Get to know about 'Future of IT sector
        in India' on the 24th of October at the Panel Session in Abhiyantriki
        2021!
      </p>
      <div className="d-flex justify-content-around w-100 years">
        {Object.keys(sponsorsImgSources).map((thisyear) => (
          <div onClick={() => setYear(parseInt(thisyear))}>{thisyear}</div>
        ))}
      </div>

      <div className="d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          {sponsorsImgSources[year].map((source: string) => (
            <div className="col m-3">
              <img src={source} alt="source" width={200} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
