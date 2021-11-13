import React from "react";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className="home-resp">
      <img
        alt="Abhiyantriki 2021"
        src={
          window.innerWidth > 768
            ? "/assets/gifs/home_page.gif"
            : "/assets/gifs/home_page_mobile.gif"
        }
        style={{ width: "100%" }}
        className="homepage"
      />
    </div>
  );
};

export default HomePage;
