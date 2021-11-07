import { useEffect, useRef, useState } from "react";
import Header from "../components/ExpoAndSpeakerSection/Header";
import ESNav from "../components/ExpoAndSpeakerSection/ESNav";
import { COLORS } from "../constants/constants";
import EsScrollSpy from "../components/ExpoAndSpeakerSection/EsScrollSpy";
import Footer from "../components/Footer/Footer";
import ESBigScreen from "../components/ExpoAndSpeakerSection/ESBigScreen";

interface ExposAndSpeakersProps {}

const ExposAndSpeakers = ({}: ExposAndSpeakersProps) => {
  const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return <>{width > 992 && <ESBigScreen />}</>;
};

export default ExposAndSpeakers;
