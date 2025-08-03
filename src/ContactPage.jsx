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
        <div className='Email'>
          <a
            href="mailto:marywilliams@utexas.edu"
            style={{
              background: "#f0f0f0",
              color: "rgb(240, 61, 172)",
              border: "none",
              borderRadius: "2rem",
              padding: "0.5rem 1.5rem",
              fontSize: "1rem",
              fontWeight: 500,
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block"
            }}
          >
            marywilliams@utexas.edu
          </a>
        </div>
        <div className="info-boxes" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <InfoBox size="medium">
            <a
              href="https://www.linkedin.com/in/mary-williams-383a6728b"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'space-between', width: '100%' }}
            >
              LinkedIn
              <FiExternalLink style={{ color: "rgb(240, 61, 172)" }} size={18} />
            </a>
          </InfoBox>
          <InfoBox size="medium">
            <a
              href="https://github.com/mary-williams"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'space-between', width: '100%' }}
            > 
              Github
              <FiExternalLink style={{ color: "rgb(240, 61, 172)" }} size={18} />
            </a>
          </InfoBox>
          <InfoBox size="medium">
            <a
              href="/Mary_Williams_Resume.pdf"
              download
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'space-between', width: '100%' }}
            >
              Resume
              <FiExternalLink style={{ color: "rgb(240, 61, 172)" }} size={18} />
            </a>
          </InfoBox>
        </div>
      </div>
    </div>
  )
}

export default ContactPage