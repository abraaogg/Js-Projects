import React from "react";
import "../styles/home.css";
import { FaGithub, FaFileAlt } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>ARIS LEE</h1>
        <p>
          Transforming ideas into modern, responsive, and interactive web
          experiences.
        </p>
        <div className="button-group">
          <a href="https://www.linkedin.com/in/abra%C3%A3o-grig%C3%B3rio/" target="_blank">
            <FaGithub />
          </a>
          <a href="cover-letter-icon">
            <FaFileAlt />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
