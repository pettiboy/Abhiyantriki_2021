import Carousel from "../components/Carousel/Carousel";
import HomePage from "../components/HomePage/HomePage";
import Timeline from "../components/Timeline/Timeline";
import Parvaah from "./Parvaah";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <div>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <HomePage/>
      </div>
      <Carousel component={"symbol"}/>
    
    </div>
  );
};

export default Home;
