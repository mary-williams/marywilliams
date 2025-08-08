import './ContactPage.css'
import InfoBox from './InfoBox.jsx'
import { FiExternalLink } from "react-icons/fi";

function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <div className='title'>
          <h1>Contact Me</h1>
        </div>
        <div className='subtext'>
          <p>Send me a message and I'll get back to you soon!</p>
        </div>
        <div className='email'>
          <InfoBox size="medium">
            <a
              href="mailto:marywilliams@utexas.edu"
              className="email-link"
            >
              marywilliams@utexas.edu
            </a>
          </InfoBox>
        </div>
        <div className="info-boxes">
          <InfoBox size="medium">
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
          <InfoBox size="medium">
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
          <InfoBox size="medium">
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
  )
}

export default ContactPage