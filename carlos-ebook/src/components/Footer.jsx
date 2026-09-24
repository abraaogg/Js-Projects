import "../styles/footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <h2>Comece hoje a cuidar da sua coluna</h2>
          <p>Um guia direto ao ponto, para ler e aplicar no mesmo dia.</p>
          <p>© {new Date().getFullYear()} Carlos Foa · Educação Física</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
