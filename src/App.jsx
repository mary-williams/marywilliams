import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ProfileImg from '/public/MARY3432.jpg'
import Navbar from './Navbar.jsx'
import InfoBox from './InfoBox.jsx'

// Long text variables
const aboutMe1 = "I currently  attend the University of Texas at Austin as a Computer Science student.  I’m looking for professional opportunities to utilize my skills in Java, C, and Figma.";
const aboutMe2 = "Women in CS (WiCS), Society for Advancing Gender Equality (SAGES).";
const aboutMe3 = "I aim to graduate and secure a role at a fast-paced company where I can contribute to impactful projects, grow in a supportive, diverse community, and help shape the future of technology.";
const aboutMe4 = "I’m driven by the desire to inspire future generations of creatives and lead positive change through technology. I’m passionate about the ethical responsibilities of developers and am pursuing a public policy certificate to ensure that technology is developed with integrity and social good in mind.";

export function HomePage() {
  return (
    <>
      <div className="header-row">
        <div className="left-col">
          <h1>Hi, I'm Mary <span className="subtitle">an aspiring Front End Developer</span></h1>
          <div className="info-boxes" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <InfoBox size="medium">{aboutMe1}</InfoBox>
            <InfoBox size="small" header="University Orgs">{aboutMe2}</InfoBox>
            <InfoBox size="large" header="In the Future">{aboutMe3}</InfoBox>
            <InfoBox size="large" header='My "Why"'>{aboutMe4}</InfoBox>
          </div>
        </div>
        <div className="profile">
          <img src={ProfileImg} alt="My Picture!" />
        </div>
      </div>
    </>
  )
}

export function WorkPage() {
  return (
    <div>
      <h2>My Work</h2>
      <p>Showcase your projects here!</p>
    </div>
  )
}

export function ContactPage() {
  return (
    <div>
      <h2>Contact Me</h2>
      <p>You can reach me at mary@email.com</p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App