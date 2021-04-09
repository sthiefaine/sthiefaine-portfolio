import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";

import { Player } from "@lottiefiles/react-lottie-player";
import lottieDev from "../../../assets/43885-laptop-working.json";

import { Fade } from "../../../animations/fade";
// CSS
import "./index.css";

// Change Stroke of svg wrapped by this element
import { SVGStyled } from "../../../styles/SVGStyled";
// SVG
import { ArrowUpIcon } from "../../../utils/SVGicon";

const Home = () => {
  const lottieDevRef = useRef();
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
        <Player
          ref={lottieDevRef}
          speed="0.1"
          freeze={true}
          autoplay={true}
          loop={true}
          controls={true}
          src={lottieDev}
          style={{ width: "calc(20vw + 20vh)" }}
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
