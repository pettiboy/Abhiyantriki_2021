import About from "../components/About/About";
import HomePage from "../components/HomePage/HomePage";
import Sidebar from "../components/Sidebar/Sidebar";
import Timeline from "../components/Timeline/Timeline";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <div>
      <div className="vh-100 d-sm-flex align-items-center justify-content-center home">
        <HomePage />
      </div>
      <About />
      <Timeline />
      <Sidebar />
    </div>
  );
};

export default Home;
