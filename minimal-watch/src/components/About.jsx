import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/about.css";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const aboutRef = useRef(null);

  const sections = [
    {
      id: "1",
      title: "MOVEMENT",
      heading: "Calibre H-92 Mechanical",
      description:
        "Featuring a bespoke escapement wheel and a silicon hairspring, our in-house movement maintains a vibration frequency of 28,800 beats per hour.",
    },
    {
      id: "2",
      title: "CASE",
      heading: "Sculpted for Precision",
      description:
        "A refined case design combining durable materials with carefully considered proportions.",
    },
    {
      id: "3",
      title: "DIAL",
      heading: "Minimal by Design",
      description:
        "Every element of the dial is considered to maintain clarity, balance, and timeless character.",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".about-section").forEach((section) => {
        gsap.from(section, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about" ref={aboutRef}>
      {sections.map((section) => (
        <div className="about-section" key={section.id}>
          <p className="section-label">
            {section.id} — {section.title}
          </p>

          <h3>{section.heading}</h3>

          <p className="description">{section.description}</p>
        </div>
      ))}
    </div>
  );
}

export default About;
