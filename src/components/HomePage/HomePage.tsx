import React from "react";

interface HomePageProps {
  name: string;
}

const HomePage = ({ name }: HomePageProps) => {
  return <div>{name}</div>;
};

export default HomePage;
