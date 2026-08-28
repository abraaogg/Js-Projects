import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Watch from "./components/Watch";

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Watch/>
    </>
  );
}

export default App;
