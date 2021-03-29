import { useState } from "react";

import project1 from "../../../assets/project1-dark.png";
import project2 from "../../../assets/project2-light.png";

import { GitIcon } from "../../../utils/SVGsocialIcon";
const Portfolio = () => {
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
    transitionDuration: "0.5s",
    transitionProperty: "transform",
    transform: `rotateY(${rotateX ?? 0}) rotateX(${rotateY ?? 0})`,
  };

  return (
    <section id="portfolio" className="section section-padding">
      <div className="portfolio-title">
        <h2>Mes projets</h2>
      </div>
      <div className="portfolio-works">
        <div className="portfolio-work">
          <div data-aos="fade-right" className="portfolio-work-container-img">
            <img
              id="1"
              onMouseMove={(event) => handleOnMouseEnter(event)}
              onMouseLeave={(event) => handleOnMouseLeave(event)}
              className="portfolio-work-img"
              alt="test"
              src={project1}
              style={styles}
            ></img>
          </div>
          <div data-aos="fade-right" className="portfolio-work-text">
            <h3>Mastermind</h3>
            <p>
              Après avoir terminé ma formation, l'idée de faire un mastermind en
              React pour pratiquer à été mon premier project.
              <br /> N'hésitez pas à faire une partie.
            </p>
            <a
              className="link"
              href="https://mastermind-react.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Visiter le site
            </a>
          </div>
        </div>

        <div className="portfolio-work">
          <div data-aos="fade-right" className="portfolio-work-container-img">
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
          <div data-aos="fade-right" className="portfolio-work-text">
            <h3>Portfolio</h3>
            <p>
              Création d'un porfolio pour me presenter, utiliser les transitions
              en css et s'approprier Next.js
            </p>
            {/*                 <a
            className="link"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Visiter le site
          </a> */}
          </div>
        </div>
      </div>

      <div className="portfolio-footer">
        <h3>Découvrir mon Github</h3>
        <a
          className="cv-button"
          href="https://github.com/sthiefaine"
          target="_blank"
          rel="noreferrer"
        >
          <GitIcon />
          <p>Github</p>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
