import { useState, useEffect } from "react";
import "./App.css";

import dev from "./assets/dev.svg";
import dev2 from "./assets/keyboard.svg";
import whatsappqrcode from "./assets/qrcode_api.whatsapp.com_thiefaine.png";
// eslint-disable-next-line no-unused-vars
import { Link, animateScroll } from "react-scroll";

import thiefhead from "./assets/thief-head.png";
import { TSVGletters } from "./utils/SVGletters";
import project1 from "./assets/project1-dark.png";
import project2 from "./assets/project1-light.png";
import { Fade } from "./animations/fade";
import { ArrowUpIcon, DownloadIcon } from "./utils/SVGicon";

import Aos from "aos";
import "aos/dist/aos.css";
import ReactVivus from "react-vivus";

import {
  GitIcon,
  EmailIcon,
  WhatsAppIcon,
  LinkedinIcon,
} from "./utils/SVGsocialIcon";
function App() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 1.1);
    });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1800 });
  }, []);

  const [rotateY, setRotateY] = useState("0deg");
  const [rotateX, setRotateX] = useState("0deg");

  const handleOnMouseEnter = (e) => {
    const event = e || window.event;
    const target = event.target || event.srcElement;
    const rect = target.getBoundingClientRect();
    const cardWidth = 200;
    const degIncrement = 0.12;

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
            <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
              <TSVGletters />
            </Link>
          </span>
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                to="about-me"
                spy={true}
                smooth={true}
                offset={0}
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
                offset={0}
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
                offset={0}
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
            <p>Développeur web & intégrateur.</p>
            <div className="container-buttons">
              <Fade
                visible={true}
                duration={1800}
                animateEnter={true}
                from={{ opacity: 0, x: 1 }}
                transformType="scale"
              >
                <Link
                  className="button"
                  to="about-me"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  About me
                </Link>
              </Fade>
              <Fade
                visible={true}
                duration={1800}
                animateEnter={true}
                from={{ opacity: 0, y: 0, x: 1 }}
                transformType="scale"
              >
                <Link
                  className="button"
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
                animTimingFunction: "EASE",
                type: "oneByOne",
                duration: "300",
              }}
              style={{ width: "calc(20vw + 15vh)" }}
            />
          </div>
          <span
            className={scroll ? "scrolldown scrolldown-hide" : "scrolldown"}
          >
            <ArrowUpIcon /> Scroll down
          </span>
        </section>

        <section id="about-me" className="section section-padding">
          <div data-aos="fade-up" className="information">
            <h2>Bienvenue 👋</h2>
            <p>
              Développeur web et intégrateur, c'est ma curiosité qui m'a amené à
              faire une reconversion professionnelle dans ce domain. Grâce à
              cela, j'ai pu approfondir ma soif de connaissance. N'hésitez pas à
              me contacter si vous souhaitez en savoir plus.
            </p>
            <div className="cv">
              <h3>Télécharger mon C.V</h3>
              <a
                className="cv-button"
                href="#"
                download="CV_Thiefaine_Simonnou"
              >
                <DownloadIcon />
                <p>C.V</p>
              </a>
            </div>
          </div>

          <div data-aos="fade-up" className="headshot-container">
            <img
              className="headshot"
              src={thiefhead}
              alt="Thiéfaine simonnou headshot"
            />
          </div>
        </section>

        <section id="portfolio" className="section section-padding">
          <div className="portfolio-title">
            <h2>Portfolio</h2>
          </div>
          <div className="portfolio-works">
            <div className="portfolio-work">
              <div data-aos="fade-up" className="portfolio-work-container-img">
                <img
                  id="1"
                  onMouseMove={(event) => handleOnMouseEnter(event, 1)}
                  onMouseLeave={(event) => handleOnMouseLeave(event)}
                  className="portfolio-work-img"
                  alt="test"
                  src={project1}
                  style={styles}
                ></img>
              </div>
              <div data-aos="fade-up" className="portfolio-work-text">
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
              <div data-aos="fade-up" className="portfolio-work-container-img">
                <img
                  id="2"
                  onMouseMove={(event) => handleOnMouseEnter(event, 2)}
                  onMouseLeave={(event) => handleOnMouseLeave(event)}
                  className="portfolio-work-img"
                  alt="test"
                  style={styles}
                  src={project2}
                ></img>
              </div>
              <div data-aos="fade-up" className="portfolio-work-text">
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

          <div className="portfolio-footer">
            <h3>Découvrer mon Github</h3>
            <a
              href="https://github.com/sthiefaine"
              target="_blank"
              rel="noreferrer"
            >
              <GitIcon />
            </a>
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
              <a
                className="download-button"
                href="https://api.whatsapp.com/send?phone=33658200918&text=Bonjour%20Thi%C3%A9faine,"
                target="_blank"
                rel="noreferrer"
              >
                <div className="download-icon">
                  <WhatsAppIcon />
                </div>
                <div className="download-text">WhatsApp</div>
              </a>

              <div className="whatsapp-qrcode">
                <img src={whatsappqrcode} alt="QRCode WhatsApp" />
              </div>

              <a
                className="download-button"
                href="mailto:thiefainedev@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="download-icon">
                  <EmailIcon />
                </div>
                <div className="download-text">Email</div>
              </a>

              <a
                className="download-button"
                href="https://www.linkedin.com/in/thiefainesimonnou/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="download-icon">
                  <LinkedinIcon />
                </div>
                <div className="download-text">Linkedin</div>
              </a>
            </div>
            <div className="contact-img">
              <ReactVivus
                id="f2"
                option={{
                  file: dev2,
                  animTimingFunction: "EASE_OUT",
                  type: "oneByOne",
                  duration: "400",
                }}
                style={{ width: "calc(25vw + 15vh)" }}
                callback=""
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-item">
            <h4>About</h4>
            <p>Site fait en React</p>
            <p>© Thiéfaine 2021</p>
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
