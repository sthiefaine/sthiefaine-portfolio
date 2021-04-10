import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import lottie from "lottie-web/build/player/lottie_light";
import lottieDev from "../../../assets/43885-laptop-working.json";

import { Fade } from "../../../animations/fade";
// CSS
import "./index.css";

// Change Stroke of svg wrapped by this element
import { SVGStyled } from "../../../styles/SVGStyled";
// SVG
import { ArrowUpIcon } from "../../../utils/SVGicon";

const Home = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1.1);
    });
  }, []);

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#lottieDev"),
      animationData: lottieDev,
      name: "lottieDev",
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    });
    lottie.setSpeed(0.3, "lottieDev");
  }, []);

  return (
    <section
      id="home"
      className="section 
    section-padding
     home
    "
    >
      <div className="home__text">
        <h1 className="home__text__title">Thiéfaine Simonnou</h1>
        <p className="home__text__p">Développeur web & intégrateur.</p>
        <div className="home__buttons__container">
          <Fade
            visible={true}
            duration={1200}
            animateEnter={true}
            from={{ opacity: 0, x: -1500 }}
            transformType="translate"
          >
            <Link
              href="#about-me"
              className="button home__button"
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
              className="button home__button"
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
        <div
          id="lottieDev"
          style={{
            width: 300,
            height: 300,
          }}
        />
      </div>
      <span
        className={
          scroll ? "home__scrolldown home__scrolldown-hide" : "home__scrolldown"
        }
      >
        <SVGStyled>
          <ArrowUpIcon />
        </SVGStyled>
        Faire défiler
      </span>
    </section>
  );
};

export default Home;
