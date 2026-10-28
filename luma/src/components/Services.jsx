import "../styles/services.css";
import vetImg from "../images/vets.jpg";
import toothCleaning from "../images/tooth-cleaning.jpg";
import bloodTest from "../images/blood-test.jpg";

function Services() {
  return (
    <section className="services-section">
      <div className="section-label">What we do</div>
      <h2>Care that feels like a walk in the park.</h2>

      <div className="services">
        <div className="service-card">
          <img src={vetImg} alt="Veterinarian caring for a pet" />
          <h3>Wellness & checkups</h3>
          <p>Annual visits, vaccines, and naps that count as recovery.</p>
        </div>

        <div className="service-card">
          <img src={toothCleaning} alt="Pet dental care equipment" />
          <h3>Dental days</h3>
          <p>Cleanings that keep those grins bright through the years.</p>
        </div>

        <div className="service-card">
          <img src={bloodTest} alt="Veterinary diagnostic testing" />
          <h3>Imaging & labs</h3>
          <p>Clear answers, fast results, no guesswork between visits.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
