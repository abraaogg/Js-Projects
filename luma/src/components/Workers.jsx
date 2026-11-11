import "../styles/services.css";

import worker1 from "../images/worker1.jpg";
import worker2 from "../images/worker2.jpg";
import worker3 from "../images/worker3.jpg";

const workers = [
  {
    image: worker1,
    alt: "Veterinarian",
    title: "Worker One",
    description: "Veterinarian",
    position: "top ",
  },
  {
    image: worker2,
    alt: "Veterinary assistant",
    title: "Worker Two",
    description: "Veterinary Assistant",
    position: "80% 30%",
  },
  {
    image: worker3,
    alt: "Pet care specialist",
    title: "Worker Three",
    description: "Pet Care Specialist",
    position: "80% 30%",
  },
];

function Workers() {
  return (
    <section className="services-section">
      <div className="section-label">Our team</div>

      <div className="services">
        {workers.map((worker) => (
          <div className="service-card" key={worker.title}>
            <img
              className="workers-img"
              src={worker.image}
              alt={worker.alt}
              style={{ objectPosition: worker.position }}
            />
            <h3>{worker.title}</h3>
            <p>{worker.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Workers;
