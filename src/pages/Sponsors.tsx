import { useEffect, useRef, useState } from "react";
import "./Sponsors.css";
import "../components/Timeline/Timeline.css";
import { sponsorsImgSources } from "../data/sponsorsImgSources";
import TwinkleTwinkle from "../components/TwinkleTwinkle/TwinkleTwinkle";

interface SponsorsProps {}

const Sponsors = ({}: SponsorsProps) => {
  const [year, setYear] = useState<number>(2021);
  const yearRef = useRef<HTMLSpanElement | null>(null);

  const onPressLeft = () => {
    const keys = Object.keys(sponsorsImgSources);
    const max = parseInt(keys[keys.length - 1]);
    const min = parseInt(keys[0]);

    if (year == min) {
      setYear(max);
    } else {
      setYear((prev) => prev - 1);
    }
  };

  const onPressRight = () => {
    const keys = Object.keys(sponsorsImgSources);
    const max = parseInt(keys[keys.length - 1]);
    const min = parseInt(keys[0]);

    if (year == max) {
      setYear(min);
    } else {
      setYear((prev) => prev + 1);
    }
  };

  return (
    <div className="container mb-5">
      <TwinkleTwinkle title="Sponsors" />

      <p className={"responsive-para text-center" + ` fs-4`}>
        Information Technology is growing exponentially constantly, every
        second, around the globe.India is not far behind with its own IT
        industry booming to new heights. Get to know about 'Future of IT sector
        in India' on the 24th of October at the Panel Session in Abhiyantriki
        2021!
      </p>

      {/* YearCarousal */}
      <div className="d-flex justify-content-around align-items-center font-size p-5">
        <i className="arrows fas fa-chevron-left" onClick={onPressLeft}></i>
        <span ref={yearRef} className="displaying-year">
          {year}
        </span>
        <i className="arrows fas fa-chevron-right" onClick={onPressRight}></i>
      </div>

      <div className="text-center fs-2 mb-5">
        Presented By {year == 2021 ? null : "(Past Sponsors)"}
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-around">
        {sponsorsImgSources[year].map(
          (el: typeof sponsorsImgSources[2021][0]) => (
            <div className="col p-3 text-center">
              <div>{el.text}</div>
              <img src={el.source} alt="source" width={200} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Sponsors;
