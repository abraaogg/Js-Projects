import "../styles/header.css";
function Header() {
  return (
    <div className="header">
      <a className="logo" href="">Carlos Foa</a>
      <a className="cta" href="">
        Comprar ebook <span className="arrow">➞</span>
      </a>
    </div>
  );
}

export default Header;
