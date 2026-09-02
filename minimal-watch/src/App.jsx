import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Watch from "./components/Watch";
import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <div className="about-watch">
        <Watch/>
        <About/>
      </div>
      <CTA/>
      <Footer/>
    </>
  );
}

export default App;
