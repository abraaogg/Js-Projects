
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import EbookFeatures from "./components/EbookFeatures";
import Testimonials from "./components/Testimonials";
import VideoTestimonial from "./components/VideoTestimonial";
import FinalCTA from "./components/FinalCTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <LoadingScreen onFinish={() => setIsLoading(false)} />
      )}

      <div className="background-glow">
        <div className="sun-glow"></div>
        <div className="sun-glow-soft"></div>
      </div>

      <main>
        <div className="content">
          <Header />
          <Hero />
          <Benefits />
          <EbookFeatures />
          <Testimonials />
          <VideoTestimonial />
          <FinalCTA />
          <FAQ />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
