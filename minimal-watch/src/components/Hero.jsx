import "../styles/hero.css";
function Hero() {
  return (
    <div className="hero">
      <h1><span>The New</span> <span>Minimal</span> <span className="watch-title">Watch</span></h1>
      <p className="hero-description">
        A silent dialogue between gravity and precision.
      </p>

       <a href="#collection" className="scroll-down" aria-label="Scroll down">
        <span className="scroll-line"></span>
        <span className="scroll-chevron"></span>
      </a>
    </div>
  );
}

export default Hero;
