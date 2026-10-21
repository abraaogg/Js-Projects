import "../styles/ebook-features.css";
import { FaCheck } from "react-icons/fa6";
import mulher1 from "../images/mulher1-exercicio.jpg";
import mulher2 from "../images/mulher2-exercicio.jpg";
import peso from "../images/peso.jpg";

function EbookFeatures() {
  return (
    <>
      <section className="ebook-features">
        <h2>O que você vai encontrar no ebook</h2>

        <div className="features-list">
          <div className="feature">
            <img src={mulher1} alt="Mulher fazendo exercício de mobilidade" />
            <h3>Exercícios seguros</h3>
            <p>Movimentos práticos, sem precisar de equipamentos.</p>
          </div>

          <div className="feature">
            <img src={mulher2} alt="Mulher praticando alongamento" />
            <h3>Prevenção no dia a dia</h3>
            <p>Hábitos simples para cuidar da coluna e reduzir desconfortos.</p>
          </div>

          <div className="feature">
            <img src={peso} alt="Equipamento para exercícios" />
            <h3>Progressões</h3>
            <p>Para todos os níveis.</p>
          </div>
        </div>
        <blockquote className="section-quote">
          <p>
            “Cuidar da coluna não exige academia — exige constância nos gestos
            certos.”
          </p>
          <span>Carlos Foa · Educação Física</span>
        </blockquote>
      </section>
      <div className="section-divider"></div>
    </>
  );
}

export default EbookFeatures;
