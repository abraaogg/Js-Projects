import "../styles/about.css";

function About() {
  const sections = [
    {
      number: "01",
      title: "MOVEMENT",
      heading: "Calibre H-92 Mechanical",
      description:
        "Featuring a bespoke escapement wheel and a silicon hairspring, our in-house movement maintains a vibration frequency of 28,800 beats per hour.",
    },
    {
      number: "02",
      title: "CASE",
      heading: "Sculpted for Precision",
      description:
        "A refined case design combining durable materials with carefully considered proportions.",
    },
    {
      number: "03",
      title: "DIAL",
      heading: "Minimal by Design",
      description:
        "Every element of the dial is considered to maintain clarity, balance, and timeless character.",
    },
  ];
  return (
    <div className="about">
      {sections.map((section) => (
        <div className="about-section" key={section.number}>
          <p className="section-label">
            {section.number} — {section.title}
          </p>

          <h3>{section.heading}</h3>

          <p className="description">{section.description}</p>
        </div>
      ))}
    </div>
  );
}

export default About;
