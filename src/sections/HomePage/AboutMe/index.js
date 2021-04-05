import "./index.css";
// Change Stroke of SVG wrapped by this element
import { SVGStyled } from "../../../styles/SVGStyled";

import thiefainecv from "../../../docs/CV_SIMONNOU-Thiefaine_2021.pdf";

import thiefhead from "../../../assets/thief-head.png";
import { DownloadIcon } from "../../../utils/SVGicon";

const AboutMe = () => {
  return (
    <section id="about-me" className="section section-padding">
      <div data-aos="fade-up" className="information">
        <h2>Bienvenue 👋</h2>
        <p>
          J'ai choisi de faire une reconversion dans le développement web.
          <br /> Cela m'a permis de découvrir les différentes technologies
          utilisées pour réaliser des projets web et l'évolution de la création
          de sites internet.
          <br />
          <br /> N'hesitez pas à me contacter.
          <br /> Je suis ouvert à la réalisation de tout test technique.
        </p>
        <div className="cv">
          <h3>Télécharger mon C.V</h3>
          <a
            className="cv-button button"
            href={thiefainecv}
            download="CV_Thiefaine_Simonnou_2021"
          >
            <SVGStyled>
              <DownloadIcon />
            </SVGStyled>

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
  );
};

export default AboutMe;
