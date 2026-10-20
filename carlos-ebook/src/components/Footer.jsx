import "../styles/footer.css";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Carlos Oliveira</h2>

          <span className="footer-line"></span>

          <p>
            Educação física prática e acessível para uma vida com mais saúde e
            movimento.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contato</h3>

          <a
            href="https://mail.google.com/mail/?view=cm&to=carlos.oliveira.cf49@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
            <span>carlos.oliveira.cf49@gmail.com</span>
          </a>

          <a
            href="https://www.instagram.com/carlos.filipeoficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
            <span>@carlos.filipeoficial</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Carlos Foa · Educação Física. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
