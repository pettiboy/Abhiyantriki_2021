import ScrollSpy from "../components/ScrollSpy/ScrollSpy";
import { exposAndSpeakersData } from "../data/exposAndSpeakers";

interface ExposAndSpeakersProps {}

const ExposAndSpeakers = ({}: ExposAndSpeakersProps) => {
  return (
    <div>
      <div className="container" style={{ paddingTop: "10vh" }}>
        <ScrollSpy data={exposAndSpeakersData} />
      </div>
    </div>
  );
};

export default ExposAndSpeakers;
