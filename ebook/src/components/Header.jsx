import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo">
          <div className="logo-icon">✦</div>

          <div className="logo-text">
            <strong>MOVIMENTO</strong>
            <span>SAÚDE & LONGEVIDADE</span>
          </div>
        </a>

        <a href="#pricing" className="header-button">
          Quero meu ebook
        </a>
      </div>
    </header>
  );
}

export default Header;
