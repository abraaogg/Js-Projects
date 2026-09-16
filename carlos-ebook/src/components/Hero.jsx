import "../styles/hero.css";
import ebookCover from "../images/ebook-cover.png";
import { IoSunny } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

function Hero() {
  return (
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
          <a href="#comprar" className="cta">
            Quero meu ebook  <span className="arrow">→</span>
          </a>

          <span className="hero-note">
            <FaCheck /> Leia direto no celular
          </span>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={ebookCover}
          alt="Capa do ebook Coluna Forte e Articulações Ativas"
        />
      </div>
    </section>
  );
}

export default Hero;
