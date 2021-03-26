import { useState, useEffect } from "react";
import "./App.css";

import dev from "./assets/dev.svg";
import dev2 from "./assets/keyboard.svg";

// eslint-disable-next-line no-unused-vars
import { Link, animateScroll } from "react-scroll";

import thiefhead from "./assets/thief-head.png";
import { TSVGletters } from "./utils/SVGletters";
import project1 from "./assets/project1-dark.png";
import project2 from "./assets/project1-light.png";
import { Fade } from "./animations/fade";
import { ArrowUpIcon } from "./utils/SVGicon";

import AOS from "aos";
import "aos/dist/aos.css";
import ReactVivus from "react-vivus";

function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1.1);
    });
  }, []);

  useEffect(() => {
    AOS.init();
  });

  const [rotateY, setRotateY] = useState("0deg");
  const [rotateX, setRotateX] = useState("0deg");
  const [degIncrement, setDegIncrement] = useState(0.2);

  const handleOnMouseEnter = (e) => {
    const event = e || window.event;
    const target = event.target || event.srcElement;
    const rect = target.getBoundingClientRect();
    const cardWidth = 250;

    const getRotateDeg = (input) => {
      if (input < cardWidth * 0.33) {
        return `${degIncrement * 2}deg`;
      } else if (input >= cardWidth * 0.33 && input < cardWidth * 0.66) {
        return `${degIncrement}deg`;
      } else if (input >= cardWidth * 0.66 && input < cardWidth * 0.5) {
        return "0deg";
      } else if (input >= cardWidth * 0.5 && input < cardWidth * 0.33) {
        return `-${degIncrement}deg`;
      } else {
        return `-${degIncrement * 2}deg`;
      }
    };

    setRotateX(getRotateDeg(window.event.clientY - rect.top));
    setRotateY(getRotateDeg(window.event.clientX - rect.left));
  };

  const handleOnMouseLeave = () => {
    setRotateY("0deg");
    setRotateX("0deg");
  };

  const styles = {
    transitionDuration: `0.5s`,
    transitionProperty: "transform",
    transform: `rotateY(${rotateX ?? 0}) rotateX(${rotateY ?? 0})`,
  };

  return (
    <>
      <header className={scroll ? "header header-active" : "header"}>
        <nav className="nav">
          <span className="logo">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <TSVGletters />
            </Link>
          </span>
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                to="about-me"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
          <button>ON</button>
        </nav>
      </header>
      <main className="main">
        <section id="home" className="section section-column section-padding">
          <div className="home-text">
            <h1>Thiéfaine Simonnou</h1>
            <p>Full Stack Developer</p>
            <div className="container-buttons">
              <Fade
                visible={true}
                duration={1800}
                animateEnter={true}
                from={{ opacity: 0, x: -1000 }}
                transformType="translate"
              >
                <Link
                  className="button"
                  to="about-me"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About me
                </Link>
              </Fade>
              <Fade
                visible={true}
                duration={1800}
                animateEnter={true}
                from={{ opacity: 0, y: 0, x: 1000 }}
                transformType="translate"
              >
                <Link
                  className="button"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
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
                type: "scenario",
                duration: "200",
              }}
              style={{ height: "300px", width: "300px" }}
            />
          </div>
          <span className="scrolldown">
            <ArrowUpIcon /> Scroll down
          </span>
        </section>

        <section id="about-me" className="section section-padding">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="information"
          >
            <h2>Bienvenue</h2>
            <p>
              Hello. My name is Thiéfaine Simonnou. <br /> I am a Software
              Developer and i'm praticing react & styled components.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-offset="350"
            data-aos-easing="ease-in-sine"
            className="headshot-container"
          >
            <img
              className="headshot"
              src={thiefhead}
              alt="Thiéfaine simonnou headshot"
            />
          </div>
        </section>

        <section
          id="portfolio"
          className="section section-column section-padding"
        >
          <div className="portfolio-title">
            <h2>Portfolio</h2>
            <p>Travail récent</p>
          </div>
          <div className="portfolio-works">
            <div className="portfolio-work">
              <div className="portfolio-work-container-img">
                <img
                  id="1"
                  onMouseMove={(event) => handleOnMouseEnter(event, 1)}
                  onMouseLeave={(event) => handleOnMouseLeave(event)}
                  className="portfolio-work-img"
                  alt="test"
                  src={project1}
                  style={styles}
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-sine"
                ></img>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
                className="portfolio-work-text"
              >
                <h3>Titre</h3>
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <a
                  href="https://mastermind-react.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visiter le site
                </a>
              </div>
            </div>

            <div className="portfolio-work">
              <div className="portfolio-work-container-img">
                <img
                  id="2"
                  onMouseMove={(event) => handleOnMouseEnter(event, 2)}
                  onMouseLeave={(event) => handleOnMouseLeave(event)}
                  className="portfolio-work-img"
                  alt="test"
                  style={styles}
                  src={project2}
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-sine"
                ></img>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-duration="500"
                data-aos-easing="ease-in-sine"
                className="portfolio-work-text"
              >
                <h3>Titre</h3>
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <a
                  href="https://mastermind-react.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visiter le site
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section section-column section-padding"
        >
          <div className="contact-title">
            <h2>Contact</h2>
          </div>

          <div className="contact-container">
            <div className="contact-buttons">
              <button className="contact-button">eMail</button>
              <button className="contact-button">Whatsapp</button>
            </div>
            <div className="contact-img">
              <img width="300" src={dev2} alt="keyboard" />
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-item">
            <h4>About</h4>
            <p>Site fais avec react</p>
            <p>© thiéfaine 2021</p>
          </div>

          <div className="footer-item">
            <h4>Languages</h4>
          </div>
        </div>
      </footer>
      <div className="bubble-section">
        <div className="bubble-XL-left" />
        <div className="bubble-XL-right" />
      </div>
    </>
  );
}

export default App;
