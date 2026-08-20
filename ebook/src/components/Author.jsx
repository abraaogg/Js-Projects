import "../styles/author.css";

function Author() {
  return (
    <section className="author">
      <div className="container">
        <div className="author-card">
          <div className="author-image-placeholder">FOTO</div>

          <div className="author-content">
            <span className="author-label">SOBRE O AUTOR</span>

            <h2>Lucas Andrade</h2>

            <p>
              Sou personal trainer com formação em Educação Física e foco em
              Fisioterapia. Minha missão é ajudar pessoas na terceira idade a se
              movimentarem com segurança, aliviando dores e conquistando mais
              qualidade de vida.
            </p>

            <span className="author-name">Lucas Andrade</span>

            <small>PERSONAL TRAINER</small>
          </div>

          <div className="author-details">
            <div>
              <span>♧</span>
              <p>
                Formação em
                <br />
                Educação Física
              </p>
            </div>

            <div>
              <span>○</span>
              <p>
                Especialista em
                <br />
                Fisioterapia
              </p>
            </div>

            <div>
              <span>♡</span>
              <p>
                + de 6 anos ajudando
                <br />
                idosos a viver melhor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Author;
