import "../styles/ebook-features.css";
import { FaCheck } from "react-icons/fa6";

function EbookFeatures() {
  return (
    <>
      <section className="ebook-features">
        <h2>O que está no ebook</h2>

        <div className="features-list">
          <div className="feature">
            <FaCheck />
            <span>Rotina guiada de mobilidade para a coluna</span>
          </div>

          <div className="feature">
            <FaCheck />
            <span>Alongamentos para ombros, quadril e joelhos</span>
          </div>

          <div className="feature">
            <FaCheck />
            <span>Exercícios seguros, sem equipamentos</span>
          </div>

          <div className="feature">
            <FaCheck />
            <span>Como prevenir dores no dia a dia</span>
          </div>

          <div className="feature">
            <FaCheck />
            <span>Progressões para diferentes níveis</span>
          </div>

          <div className="feature">
            <FaCheck />
            <span>Bônus: sequência de 10 minutos</span>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}

export default EbookFeatures;
