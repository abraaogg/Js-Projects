
import "../styles/final-cta.css";
import { FaWhatsapp } from "react-icons/fa";

function FinalCTA() {
  return (
    <>
      <section className="final-cta">
        <span className="final-cta-label">OFERTA ESPECIAL</span>

        <div className="final-cta-content">
          <h2>Invista no seu bem-estar</h2>
          <p>
            Um pequeno passo hoje, uma grande mudança amanhã.
          </p>
        </div>

        <div className="final-cta-offer">
          <div className="final-cta-prices">
            <span className="final-cta-old-price">
              R$ 139,90
            </span>
            <span className="final-cta-discount">71%</span>
          </div>

          <strong className="final-cta-price">
            <span className="final-cta-currency">R$</span>{" "}
            39<span className="final-cta-cents">,90</span>
          </strong>

          <span className="final-cta-payment">
            pagamento único
          </span>

          <button
            className="cta"
            onClick={() =>
              window.open(
                "https://wa.me/SEUNUMERO",
                "_blank"
              )
            }
          >
            Quero agora
            <FaWhatsapp />
          </button>
        </div>
      </section>

      <div className="section-divider"></div>
    </>
  );
}

export default FinalCTA;
