import "../styles/hero.css";
import { useEffect } from "react";
import gsap from "gsap";
import ebookCover from "../images/ebook-cover.png";
import { IoSunny } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function Hero() {
  useEffect(() => {
    const animation = gsap.to(".hero-image img", {
      y: -6,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => animation.kill();
  }, []);
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">
            <IoSunny />
            EBOOK • EDUCAÇÃO FÍSICA
          </span>

          <h1>
            Coluna forte e<br />
            articulações ativas
          </h1>

          <p>
            Exercícios práticos para melhorar sua mobilidade,
            <br />
            aliviar dores e viver com mais qualidade.
          </p>

          <div className="hero-actions">
            <a
              href="#final-cta"
              className="cta"
              onClick={(e) => {
                e.preventDefault();
                gsap.to(window, {
                  duration: 1.2,
                  scrollTo: "#final-cta",
                  ease: "power2.inOut",
                });
              }}
            >
              Quero meu ebook <IoIosArrowDown />
            </a>
            <span className="hero-note">
              <FaCheck /> Leia direto no celular
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

      <div className="section-divider"></div>
    </>
  );
}

export default Hero;
