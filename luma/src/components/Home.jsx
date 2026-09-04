import React from "react";
import homeBackground from "../images/home-background.png";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <img
        src={homeBackground}
        alt="Home background"
        className="home-background"
      />
    </div>
  );
}

export default Home;