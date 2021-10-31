import ScrollSpy from "../components/ScrollSpy/ScrollSpy";
import { exposAndSpeakersData } from "../data/exposAndSpeakers";

interface ExposAndSpeakersProps {}

const ExposAndSpeakers = ({}: ExposAndSpeakersProps) => {
  return (
    <div className="container" style={{ marginTop: "10vh" }}>
      <ScrollSpy data={exposAndSpeakersData} />
    </div>
  );
};

export default ExposAndSpeakers;
