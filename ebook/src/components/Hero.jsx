import "../styles/hero.css";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-label">EBOOK EXCLUSIVO</span>

          <h1>
            Mais movimento.
            <br />
            Menos dor.
            <br />
            <span>Mais vida.</span>
          </h1>

          <p className="hero-description">
            Guia prático de exercícios seguros e eficazes para melhorar a
            mobilidade, reduzir dores e promover qualidade de vida na terceira
            idade.
          </p>

          <div className="hero-features">
            <div className="hero-feature">
              <div className="feature-icon">✓</div>
              <span>
                Exercícios seguros
                <br />e adaptados
              </span>
            </div>

            <div className="hero-feature">
              <div className="feature-icon">♡</div>
              <span>
                Mais mobilidade
                <br />e bem-estar
              </span>
            </div>

            <div className="hero-feature">
              <div className="feature-icon">○</div>
              <span>
                Focado em
                <br />
                fisioterapia
              </span>
            </div>
          </div>

          <a href="#pricing" className="primary-button">
            ↓<span>QUERO MEU EBOOK AGORA</span>
          </a>

          <div className="secure-text">🔒 Compra 100% segura</div>
        </div>

        <div className="hero-visual">
          {/* IMAGE PLACEHOLDER */}
          <div className="ebook-placeholder">
            <div className="placeholder-label">IMAGEM DO EBOOK</div>

            <div className="placeholder-title">
              MOVIMENTO
              <br />
              QUE TRANSFORMA
              <br />
              <span>VIDAS</span>
            </div>

            <div className="placeholder-bottom">
              PERSONAL TRAINER
              <br />
              FOCADO EM FISIOTERAPIA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
