import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { TSVGletters } from "../../utils/SVGletters";

import "./index.css";
const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1.1);
    });
  }, []);

  return (
    <header className={scroll ? "header header-active" : "header"}>
      <nav className="nav">
        <span className="logo">
          <Link
            href="#home"
            className="link"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <TSVGletters />
          </Link>
        </span>
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              href="#about-me"
              className="link"
              to="about-me"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              À propos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="#portfolio"
              className="link"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Projets
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="#contact"
              className="link"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button className="button__theme">☀️</button>
      </nav>
    </header>
  );
};

export default Header;
