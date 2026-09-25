import "../styles/footer.css";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <h2>Carlos Foa</h2>

          <span className="footer-line"></span>

          <p>
            Educação física prática e acessível para
            uma vida com mais saúde e movimento.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contato</h3>

          <a href="mailto:contato@carlosfoa.com.br">
            <FaEnvelope />
            <span>contato@carlosfoa.com.br</span>
          </a>

          <a href="#">
            <FaInstagram />
            <span>@carlosfoa.educacao</span>
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Carlos Foa · Educação Física.
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;