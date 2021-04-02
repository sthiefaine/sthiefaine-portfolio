import thiefhead from "../../../assets/thief-head.png";
import { DownloadIcon } from "../../../utils/SVGicon";

import "./index.css";

import { SVGStyled } from "../../../styles/SVGStyled";

const AboutMe = () => {
  return (
    <section id="about-me" className="section section-padding">
      <div data-aos="fade-up" className="information">
        <h2>Bienvenue 👋</h2>
        <p>
          C'est ma curiosité qui m'a amené à faire une reconversion
          professionnelle dans ce millieu et grâce à cela, j'ai pu approfondir
          ma soif de connaissance en apprenant React, Wordpress, Lumen, la
          POO...
        </p>
        <div className="cv">
          <h3>Télécharger mon C.V</h3>
          <a
            className="cv-button button"
            href="./"
            download="CV_Thiefaine_Simonnou"
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
