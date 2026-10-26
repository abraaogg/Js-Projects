import "../styles/footer.css";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Carlos Oliveira</h2>

        <div className="footer-contact">
          <a href="mailto:carlos.oliveira.cf49@gmail.com">
            <FaEnvelope />
            Email
          </a>

          <a
            href="https://www.instagram.com/carlos.filipeoficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Carlos Oliveira · Educação Física
      </div>
    </footer>
  );
}

export default Footer;
