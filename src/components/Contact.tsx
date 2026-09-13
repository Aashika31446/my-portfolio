import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:aashikasharma919@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                aashikasharma919@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/aashika-kumari-999b222a9/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — aashika-kumari
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech Computer Science (AI & ML)
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Aashika31446"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/aashika-kumari-999b222a9/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:aashikasharma919@gmail.com"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Aashika Kumari</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
