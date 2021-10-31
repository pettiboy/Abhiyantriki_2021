import ScrollSpy from "../components/ScrollSpy/ScrollSpy";
import { exposAndSpeakersData } from "../data/exposAndSpeakers";

interface ExposAndSpeakersProps {}

const ExposAndSpeakers = ({}: ExposAndSpeakersProps) => {
  return (
    <div className="container">
      <ScrollSpy data={exposAndSpeakersData} />
    </div>
  );
};

export default ExposAndSpeakers;
