import "../styles/watch.css";
import watchImage from "../images/watch.jpg";

function Watch() {
  return (
    <div>
      <section className="watch">
        <img className="watch-image" src={watchImage} alt="Minimal watch" />
      </section>
    </div>
  );
}

export default Watch;
