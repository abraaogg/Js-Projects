import { useState } from "react";
import { FaBars } from "react-icons/fa";

function Header() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <button onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>
      <a href="#home" className="logo">
        Abraão <span>Grigório</span>
      </a>

      {menuOpen && (
        <nav className="navbar">
          {navItems.map((item) => {
            return (
              // for each Item inside navItems, return one <a>
              // key → helps React track list items.
              // href → tells the browser where to scroll.
              <a key={item.id} href={`#${item.id}`}>
                {item.name}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}

export default Header;
