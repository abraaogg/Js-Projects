import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="sun-glow"></div>
      <div className="sun-glow-soft"></div>
      <Header />
      <Hero/>
    </>
  );
}

export default App;
