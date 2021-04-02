import project1 from "../../../assets/project1-dark.png";
import project2 from "../../../assets/project2-light.png";

import { GitIcon } from "../../../utils/SVGsocialIcon";

import "./index.css";

import { TranslateMove } from "../../../animations/translateMove";

import { SVGStyled } from "../../../styles/SVGStyled";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section section-padding">
      <div className="portfolio-title">
        <h2>Mes projets</h2>
      </div>
      <div className="portfolio-works">
        <div className="portfolio-work">
          <div data-aos="fade-right" className="portfolio-work-container-img">
            <TranslateMove>
              <img
                id="1"
                className="portfolio-work-img"
                alt="test"
                src={project1}
              ></img>
            </TranslateMove>
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
            <TranslateMove>
              <img
                id="2"
                className="portfolio-work-img"
                alt="test"
                src={project2}
              ></img>
            </TranslateMove>
          </div>
          <div data-aos="fade-right" className="portfolio-work-text">
            <h3>Portfolio</h3>
            <p>
              Création d'un porfolio pour me presenter, utiliser les transitions
              en css et s'approprier Styled-components
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio-footer">
        <h3>Découvrir mon Github</h3>
        <a
          className="cv-button button"
          href="https://github.com/sthiefaine"
          target="_blank"
          rel="noreferrer"
        >
          <SVGStyled>
            <GitIcon />
          </SVGStyled>

          <p>Github</p>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
