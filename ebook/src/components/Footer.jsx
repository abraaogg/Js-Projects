import "../styles/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="footer-logo-icon">✦</div>

          <div>
            <strong>MOVIMENTO</strong>
            <span>SAÚDE & LONGEVIDADE</span>
          </div>
        </div>

        <p>
          Mais movimento. Menos dor.
          <br />
          Mais vida todos os dias.
        </p>

        <div className="footer-links">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
