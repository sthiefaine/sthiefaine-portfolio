import "./index.css";
// Change Stroke of SVG wrapped by this element
import { SVGStyled } from "../../../styles/SVGStyled";

import thiefainecv from "../../../docs/CV_SIMONNOU-Thiefaine_2021.pdf";

import thiefhead from "../../../assets/thief-head.png";
import { DownloadIcon } from "../../../utils/SVGicon";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="

    section-padding 
    aboutMe
    "
    >
      <div data-aos="fade-up" className="aboutMe__information">
        <h2 className="aboutMe__information__title">Bienvenue 👋</h2>
        <p className="aboutMe__information__p">
          J'ai choisi de faire une reconversion dans le développement web.
          <br /> Cela m'a permis de découvrir les différentes technologies
          utilisées pour réaliser des projets web et l'évolution de la création
          de sites internet.
          <br />
          <br /> N'hesitez pas à me contacter.
          <br /> Je suis ouvert à la réalisation de tout test technique.
        </p>
        <div className="cv">
          <h3 className="cv__title">Télécharger mon C.V</h3>
          <a
            className="button button__circle"
            href={thiefainecv}
            download="CV_Thiefaine_Simonnou_2021"
          >
            <SVGStyled>
              <DownloadIcon />
            </SVGStyled>

            <p className="button__circle__p">C.V</p>
          </a>
        </div>
      </div>

      <div data-aos="fade-up" className="aboutMe__headshot">
        <img
          loading="lazy"
          className="aboutMe__headshot__img"
          src={thiefhead}
          alt="Thiéfaine simonnou headshot"
        />
      </div>
    </section>
  );
};

export default AboutMe;
