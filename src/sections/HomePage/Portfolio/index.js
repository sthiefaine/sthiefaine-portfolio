import "./index.css";

import project1 from "../../../assets/project1-dark.png";
import project2 from "../../../assets/project2-light.png";

import { TranslateMove } from "../../../animations/translateMove";

// Change Stroke of SVG wrapped by this element
import { SVGStyled } from "../../../styles/SVGStyled";

import { GitIcon } from "../../../utils/SVGsocialIcon";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="

    section-padding 
    portfolio
    "
    >
      <h2 className="portfolio__title">Mes projets</h2>

      <div className="portfolio__works">
        <div className="portfolio__work">
          <div
            data-aos="fade-right"
            className="portfolio__work__container__img"
          >
            <TranslateMove>
              <img
                className="portfolio__work__img"
                alt="test"
                src={project1}
              ></img>
            </TranslateMove>
          </div>
          <div data-aos="fade-right" className="portfolio__work__text">
            <h3 className="portfolio__work__text__title">Mastermind</h3>
            <p className="portfolio__work__text__p">
              Après avoir terminé ma formation, l'idée de faire un mastermind en
              React pour pratiquer à été mon premier project.
              <br /> N'hésitez pas à faire une partie.
            </p>
            <a
              className="link portfolio__work__text__p"
              href="https://mastermind-react.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Visiter le site
            </a>
          </div>
        </div>

        <div className="portfolio__work">
          <div
            data-aos="fade-right"
            className="portfolio__work__container__img"
          >
            <TranslateMove>
              <img
                className="portfolio__work__img"
                alt="test"
                src={project2}
              ></img>
            </TranslateMove>
          </div>
          <div data-aos="fade-right" className="portfolio__work__text">
            <h3 className="portfolio__work__text__title">Portfolio</h3>
            <p className="portfolio__work__text__p">
              Création d'un porfolio pour me presenter, utiliser les transitions
              en css et s'approprier Styled-components
            </p>
          </div>
        </div>
      </div>

      <div className="portfolio__footer">
        <h3>Découvrir mon Github</h3>
        <a
          className="button button__circle"
          href="https://github.com/sthiefaine"
          target="_blank"
          rel="noreferrer"
        >
          <SVGStyled>
            <GitIcon />
          </SVGStyled>

          <p className="button__circle__p">Github</p>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
