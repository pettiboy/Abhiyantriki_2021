import Carousel from "../components/Carousel/Carousel";
import HomePage from "../components/HomePage/HomePage";
<<<<<<< HEAD
import Timeline from "../components/Timeline/Timeline";
import Parvaah from "./parvaah/Parvaah";
=======
>>>>>>> 421b4d0bd69af05471415f11d56f7e162cc9430e

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <div>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <HomePage />
      </div>
      <Carousel />
    </div>
  );
};

export default Home;
