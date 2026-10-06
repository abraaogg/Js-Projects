import "../styles/header.css";
import { FaPaw } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <a className="logo" href="">
        <FaPaw  className="paw-icon" />
        Luma
      </a>
      <nav className="nav">
        <a href="">Services</a>
        <a href="">Team</a>
        <a href="">Reviews</a>
        <a href="">Visit</a>
      </nav>

      <a className="header-cta" href="">Book a visit</a>
    </div>
  );
}

export default Header;