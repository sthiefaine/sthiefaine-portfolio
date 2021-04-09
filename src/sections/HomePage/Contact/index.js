import contactSvg from "../../../assets/contactSvg.svg";
import "./index.css";

import {
  EmailIcon,
  WhatsAppIcon,
  LinkedinIcon,
} from "../../../utils/SVGsocialIcon";

import whatsappqrcode from "../../../assets/qrcode_api.whatsapp.com_thiefaine.png";

const Contact = () => {
  return (
    <section
      id="contact"
      className="
    section-padding
    contact
    "
    >
      <h2 className="contact__title">Me contacter</h2>

      <div className="contact__container">
        <div className="contact__buttons">
          <div className="whatsapp__qrcode">
            <img
              className="whatsapp__qrcode__img"
              src={whatsappqrcode}
              alt="QRCode WhatsApp"
            />
          </div>

          <a
            className="button button__download"
            href={`https://api.whatsapp.com/send?phone=33658200918&text=Bonjour%20Thi%C3%A9faine,`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="button__download__icon">
              <WhatsAppIcon />
            </div>
            <div className="button__download__text">WhatsApp</div>
          </a>

          <a
            className="button button__download"
            href={`mailto:thiefainedev@gmail.com`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="button__download__icon">
              <EmailIcon />
            </div>
            <div className="button__download__text">Email</div>
          </a>

          <a
            className="button button__download"
            href="https://www.linkedin.com/in/thiefainesimonnou/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="button__download__icon">
              <LinkedinIcon />
            </div>
            <div className="button__download__text">Linkedin</div>
          </a>
        </div>
        <div className="contact__img__container">
          <img
            load="lazy"
            className="contact__img"
            src={contactSvg}
            alt="mail decoration"
            width="200"
            height="200"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
