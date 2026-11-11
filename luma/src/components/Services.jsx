import "../styles/services.css";

import vetImg from "../images/vets.jpg";
import toothCleaning from "../images/tooth-cleaning.jpg";
import bloodTest from "../images/blood-test.jpg";

const services = [
  {
    image: vetImg,
    alt: "Veterinarian caring for a pet",
    title: "Wellness & checkups",
    description: "Annual visits, vaccines, and naps that count as recovery.",
    position: "80% 70%",
  },
  {
    image: toothCleaning,
    alt: "Pet dental care equipment",
    title: "Dental days",
    description: "Cleanings that keep those grins bright through the years.",
    position: "80% 60%",
  },
  {
    image: bloodTest,
    alt: "Veterinary diagnostic testing",
    title: "Imaging & labs",
    description: "Clear answers, fast results, no guesswork between visits.",
  },
];

function Services() {
  return (
    <section className="services-section">
      <div className="section-label">What we do</div>
      <h2>Care that feels like a walk in the park.</h2>

      <div className="services">
        {services.map((item) => (
          <div className="service-card" key={item.title}>
            <img
              src={item.image}
              alt={item.alt}
              style={{ objectPosition: item.position || "center" }}
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
