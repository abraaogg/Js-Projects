import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/header.css";

function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".logo", {
        y: -15,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <a className="logo" href="#">
        Carlos Oliveira
      </a>
    </header>
  );
}

export default Header;
