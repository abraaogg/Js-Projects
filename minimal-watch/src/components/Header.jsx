import "../styles/header.css";

function Header() {
  return (
    <header className="header" id="header">
      <div className="logo">
        Logo
      </div>

      <nav className="nav">
        <a href="#purchase">Purchase</a>
      </nav>
    </header>
  );
}

export default Header;