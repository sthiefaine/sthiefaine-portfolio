import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import { TSVGletters } from "../../utils/SVGletters";

import ThemeSelector from "../theme";

import { HeaderStyled } from "../../styles/HeaderStyled";
import { NavStyled } from "../../styles/NavStyled";
import { SVGStyled } from "../../styles/SVGStyled";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1.2);
    });
  }, []);

  return (
    <HeaderStyled className={scroll ? "header active" : "header"}>
      <NavStyled className="nav">
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
            <SVGStyled>
              <TSVGletters />
            </SVGStyled>
          </Link>
        </span>
        <ul className="nav__items">
          <li className="nav__item">
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
          <li className="nav__item">
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
          <li className="nav__item">
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
        <ThemeSelector />
      </NavStyled>
    </HeaderStyled>
  );
};

export default Header;
