import "../styles/header.css";

function Header() {
  return (
    <header className="header" id="header">
      <div className="logo">
        Logo
      </div>

      <nav className="nav">
        <a href="#watches">WATCHES</a>
        <a href="#story">STORY</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  );
}

export default Header;