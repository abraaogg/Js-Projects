import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import EbookFeatures from "./components/EbookFeatures";
import Testimonials from "./components/Testimonials";
import VideoTestimonial from "./components/VideoTestimonial";

function App() {
  return (
    <>
      <div className="sun-glow"></div>
      <div className="sun-glow-soft"></div>
      <Header />
      <Hero />
      <Benefits />
      <EbookFeatures />
      <Testimonials />
      <VideoTestimonial />
    </>
  );
}

export default App;
