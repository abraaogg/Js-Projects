import "../styles/header.css";
import { FaArrowRight } from "react-icons/fa6";

function Header() {
  return (
    <div className="header">
      <a className="logo" href="">Carlos Oliveira</a>
      <a className="cta" href="">
        Comprar ebook <FaArrowRight/>
      </a>
    </div>
  );
}

export default Header;
