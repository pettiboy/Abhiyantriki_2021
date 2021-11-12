import About from "../components/About/About";
import ACarousel from "../components/Carousel/ACarousel";
import HomePage from "../components/HomePage/HomePage";
import Sidebar from "../components/Sidebar/Sidebar";
import Timeline from "../components/Timeline/Timeline";
import "./Home.css";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <div className="main-home">
      <div className="vh-100 d-sm-flex align-items-center justify-content-center home">
        <HomePage />
      </div>
      <ACarousel/>
      <About />
      <Timeline />
      <Sidebar />
    </div>
  );
};

export default Home;
