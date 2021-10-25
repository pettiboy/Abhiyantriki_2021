import React from "react";
import HomePage from "../components/HomePage/HomePage";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <HomePage name="java not useful" />;
    </div>
  );
};

export default Home;
