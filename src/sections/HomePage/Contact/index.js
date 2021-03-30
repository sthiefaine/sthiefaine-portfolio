import ReactVivus from "react-vivus";

import {
  EmailIcon,
  WhatsAppIcon,
  LinkedinIcon,
} from "../../../utils/SVGsocialIcon";

import dev2 from "../../../assets/keyboard.svg";
import whatsappqrcode from "../../../assets/qrcode_api.whatsapp.com_thiefaine.png";

import "./index.css";

const Contact = () => {
  return (
    <section id="contact" className="section section-column section-padding">
      <div className="contact-title">
        <h2>Me contacter</h2>
      </div>

      <div className="contact-container">
        <div className="contact-buttons">
          <a
            className="download-button"
            href={`https://api.whatsapp.com/send?phone=${process.env.REACT_APP_WA_NUMBER}&text=Bonjour%20Thi%C3%A9faine,`}
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
            href={`mailto:${process.env.REACT_APP_EMAIL}`}
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
