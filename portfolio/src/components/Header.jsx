import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/header.css";

function Header() {
  const navItems = [
    { name: "HOME", id: "home" },
    { name: "PROJECTS", id: "projects" },
    { name: "ABOUT", id: "about" },
    { name: "CONTACT", id: "contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize); // Whenever the window is resized, run handleResize.

    return () => {
      window.removeEventListener("resize", handleResize); // When this component (Header.jsx) is removed, stop listening for resize events.
    };
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <a href="#home" className="logo">
        ARIS <span>LEE</span>
      </a>
      <button className="menuIcon" onClick={() => setMenuOpen((prev) => !prev)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={menuOpen ? "navbar open" : "navbar"}>
        {navItems.map((item) => {
          return (
            // for each Item inside navItems, return one <a>
            // key → helps React track list items.
            // href → tells the browser where to scroll.
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
