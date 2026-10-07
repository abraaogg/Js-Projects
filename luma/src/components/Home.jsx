import "../styles/home.css";
import dogImg from "../images/hero-dog.jpg";

function Home() {
  const now = new Date();
  const day = now.getDay();
  const time = now.getHours() * 60 + now.getMinutes();

  const schedule = {
    0: null, // Sunday
    1: [8 * 60, 18 * 60], // Monday
    2: [8 * 60, 18 * 60], // Tuesday
    3: [8 * 60, 18 * 60], // Wednesday
    4: [8 * 60, 18 * 60], // Thursday
    5: [8 * 60, 18 * 60], // Friday
    6: [8 * 60, 12 * 60], // Saturday
  };

  const hours = schedule[day];
  const isOpen = hours && time >= hours[0] && time < hours[1];

  return (
    <div className="home">
      <div className="hero-content">
        <div className="open-status">
          <span className={`status-dot ${isOpen ? "open" : "closed"}`}></span>
          {isOpen ? "NOW OPEN" : "CLOSED"} ·{" "}
          {day === 6 ? "SATURDAY HOURS" : "TODAY"}
        </div>

        <h1>
          A sunny <span>playdate</span> <br /> with your vet.
        </h1>

        <p>
          Gentle checkups, honest advice, and zero clinical coldness. We treat
          every tail-wag and slow blink like a first visit.
        </p>

        <a className="book-cta" href="">Book a visit</a>
  
      </div>

      <img src={dogImg} alt="dog image" className="dog-image" />
    </div>
  );
}

export default Home;