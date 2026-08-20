import "../styles/pricing.css";
function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-card">
          <div className="pricing-message">
            <span>INVISTA NA SUA SAÚDE HOJE</span>

            <h2>
              Um pequeno passo hoje,
              <br />
              uma grande transformação amanhã.
            </h2>
          </div>

          <div className="pricing-value">
            <span className="old-price">De R$ 79,90</span>

            <small>Por apenas</small>

            <strong>
              R$ <b>39</b>,90
            </strong>

            <span>ou 3x de R$ 13,30</span>
          </div>

          <div className="pricing-action">
            <a href="#" className="pricing-button">
              ↓ QUERO MEU EBOOK AGORA
            </a>

            <small>🔒 Compra 100% segura</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
