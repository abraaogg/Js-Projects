import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { IoSunny } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import ebookCover from "../images/ebook-cover.png";
import "../styles/hero.css";

gsap.registerPlugin(ScrollToPlugin);

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      intro
        .from(".hero-badge", {
          y: 15,
          opacity: 0,
          duration: 0.6,
        })
        .from(
          ".hero h1",
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3",
        )
        .from(
          [".hero-content p", ".hero-actions"],
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
          },
          "-=0.4",
        )
        .from(
          ".hero-image",
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          "-=0.7",
        );

      gsap.to(".hero-image img", {
        y: -6,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToOffer = (e) => {
    e.preventDefault();

    gsap.to(window, {
      duration: 1.2,
      scrollTo: "#final-cta",
      ease: "power2.inOut",
    });
  };

  return (
    <>
      <section className="hero" ref={heroRef}>
        <div className="hero-content">
          <span className="hero-badge">
            <IoSunny />
            EBOOK • EDUCAÇÃO FÍSICA
          </span>

          <h1>
            Coluna forte e
            <br />
            articulações ativas
          </h1>

          <p>
            Exercícios práticos para melhorar sua mobilidade,
            <br />
            aliviar dores e viver com mais qualidade.
          </p>

          <div className="hero-actions">
            <a href="#final-cta" className="cta" onClick={scrollToOffer}>
              Quero meu ebook <IoIosArrowDown />
            </a>

            <span className="hero-note">
              <FaCheck />
              Leia direto no celular
            </span>
          </div>
        </div>

        <div className="hero-image">
          <div className="ebook-cover">
            <img
              src={ebookCover}
              alt="Capa do ebook Coluna Forte e Articulações Ativas"
            />
          </div>
        </div>
      </section>

      <div className="section-divider" />
    </>
  );
}

export default Hero;