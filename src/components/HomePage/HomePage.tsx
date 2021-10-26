import React from "react";

interface HomePageProps {
  name: string;
}

const HomePage = ({ name }: HomePageProps) => {
  return <div style={{ color: "white" }}>{name}</div>;
};

export default HomePage;
