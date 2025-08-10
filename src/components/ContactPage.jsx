import "./ContactPage.css";
import InfoBox from "./InfoBox.jsx";
import { FiExternalLink } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactPage() {
  return (
    <div className="contact-container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <div className="contact-left">
            <div className="title mb-3">
              <h1>Contact Me</h1>
            </div>
            <div className="subtext mb-4 ">
              <p>Send me a message and I'll get back to you soon!</p>
            </div>
            <div className="info-boxes d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
              {" "}
              <InfoBox size="medium" className="w-100">
                <a
                  href="mailto:marywilliams@utexas.edu"
                  className="contact-link"
                >
                  marywilliams@utexas.edu
                  <FiExternalLink className="external-icon" size={18} />
                </a>
              </InfoBox>
              <InfoBox size="medium" className="w-100">
                <a
                  href="https://www.linkedin.com/in/mary-williams-383a6728b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  LinkedIn
                  <FiExternalLink className="external-icon" size={18} />
                </a>
              </InfoBox>
              <InfoBox size="medium" className="w-100">
                <a
                  href="https://github.com/mary-williams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Github
                  <FiExternalLink className="external-icon" size={18} />
                </a>
              </InfoBox>
              <InfoBox size="medium" className="w-100">
                <a
                  href="/Mary_Williams_Resume.pdf"
                  download
                  className="contact-link"
                >
                  Download Resume
                  <FiExternalLink className="external-icon" size={18} />
                </a>
              </InfoBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
