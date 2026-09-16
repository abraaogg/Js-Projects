import "../styles/header.css";
import { FiArrowRight } from "react-icons/fi";
function Header() {
  return (
    <div className="header">
      <h1>Carlos Foa</h1>
      <a className="cta" href="">
        Comprar e-book <FiArrowRight />
      </a>
    </div>
  );
}

export default Header;
