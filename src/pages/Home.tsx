import React from "react";
import About from "../components/About/About";
import HomePage from "../components/HomePage/HomePage";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <div>
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <HomePage name="java not useful" />
      
    </div>
    <About/>
    </div>
  );
};

export default Home;
