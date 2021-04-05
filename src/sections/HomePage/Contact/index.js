import ReactVivus from "react-vivus";

import "./index.css";

import {
  EmailIcon,
  WhatsAppIcon,
  LinkedinIcon,
} from "../../../utils/SVGsocialIcon";

import dev2 from "../../../assets/keyboard.svg";
import whatsappqrcode from "../../../assets/qrcode_api.whatsapp.com_thiefaine.png";

const Contact = () => {
  return (
    <section id="contact" className="section section-column section-padding">
      <div className="contact-title">
        <h2>Me contacter</h2>
      </div>

      <div className="contact-container">
        <div className="contact-buttons">
          <div className="whatsapp-qrcode">
            <img src={whatsappqrcode} alt="QRCode WhatsApp" />
          </div>

          <a
            className="download-button button"
            href={`https://api.whatsapp.com/send?phone=33658200918&text=Bonjour%20Thi%C3%A9faine,`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="download-icon">
              <WhatsAppIcon />
            </div>
            <div className="download-text">WhatsApp</div>
          </a>

          <a
            className="download-button button"
            href={`mailto:thiefainedev@gmail.com`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="download-icon">
              <EmailIcon />
            </div>
            <div className="download-text">Email</div>
          </a>

          <a
            className="download-button button"
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
              animTimingFunction: "EASE",
              type: "oneByOne",
              duration: 200,
            }}
            style={{ width: "calc(25vw + 15vh)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
