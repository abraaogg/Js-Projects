import "../styles/header.css";

function Header() {
  return (
    <header className="header" id="header">
      <div className="logo">
        Logo
      </div>

      <nav className="nav">
        <a href="#home">Watches</a>
        <a href="#about">Story</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;