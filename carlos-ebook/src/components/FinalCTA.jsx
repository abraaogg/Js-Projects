import React from "react";
import "../styles/final-cta.css";

function FinalCTA() {
  return (
    <>
      <section className="final-cta">
        <div className="final-cta-content">
          <h2>Invista no seu bem-estar</h2>
          <p>Um pequeno passo hoje, uma grande mudança amanhã.</p>
        </div>

        <div className="final-cta-offer">
          <span className="final-cta-label">POR APENAS</span>
          <strong className="final-cta-price">R$ 29,90</strong>

          <button className="cta">
            Quero agora
            <span>→</span>
          </button>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}

export default FinalCTA;
