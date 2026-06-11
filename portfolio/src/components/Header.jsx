import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
      <a href="#home" className="logo">
        Abraão <span>Grigório</span>
      </a>
      <button className="menuIcon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={menuOpen ? "navbar open" : "navbar"}>
        {navItems.map((item) => {
          return (
            // for each Item inside navItems, return one <a>
            // key → helps React track list items.
            // href → tells the browser where to scroll.
            <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              {item.name}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
