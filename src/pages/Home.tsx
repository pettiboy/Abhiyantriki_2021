import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import HomePage from "../components/HomePage/HomePage";
import Timeline from "../components/Timeline/Timeline";
import Parvaah from "./parvaah/Parvaah";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <div>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <HomePage />
      </div>
      <Carousel />
      <Parvaah/>
      <Timeline/>
      <Footer/>
    </div>
  );
};

export default Home;
