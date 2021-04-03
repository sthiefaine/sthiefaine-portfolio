import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ReactVivus from "react-vivus";

import { Fade } from "../../../animations/fade";
// CSS
import "./index.css";

// Change Stroke of svg wrapped by this element
import { SVGStyled } from "../../../styles/SVGStyled";
// SVG
import dev from "../../../assets/dev.svg";
import { ArrowUpIcon } from "../../../utils/SVGicon";

const Home = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1.1);
    });
  }, []);

  return (
    <section id="home" className="section section-column section-padding">
      <div className="home-text">
        <h1>Thiéfaine Simonnou</h1>
        <p>Développeur web & intégrateur.</p>
        <div className="container-buttons">
          <Fade
            visible={true}
            duration={1200}
            animateEnter={true}
            from={{ opacity: 0, x: -1500 }}
            transformType="translate"
          >
            <Link
              href="#about-me"
              className="button buttonHome"
              to="about-me"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              À propos
            </Link>
          </Fade>
          <Fade
            visible={true}
            duration={1200}
            animateEnter={true}
            from={{ opacity: 0, y: 0, x: -1000 }}
            transformType="translate"
          >
            <Link
              href="#contact"
              className="button buttonHome"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </Fade>
        </div>
      </div>
      <div>
        <ReactVivus
          id="foo"
          option={{
            file: dev,
            animTimingFunction: "EASE_OUT",
            type: "sync",
            duration: 200,
          }}
          style={{ width: "calc(20vw + 15vh)" }}
        />
      </div>
      <span className={scroll ? "scrolldown scrolldown-hide" : "scrolldown"}>
        <SVGStyled>
          <ArrowUpIcon />
        </SVGStyled>
        Faire défiler
      </span>
    </section>
  );
};

export default Home;
