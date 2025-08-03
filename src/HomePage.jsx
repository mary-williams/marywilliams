import ProfileImg from '/public/MARY3432.jpg'
import InfoBox from './InfoBox.jsx'
import MusicPlayer from './MusicPlayer.jsx'

const aboutMe1 = "I currently attend the University of Texas at Austin as a Computer Science student. I have experience using Java, C, React.js, and Figma.";
const aboutMe2 = "Women in CS (WiCS), Society for Advancing Gender Equality (SAGES).";
const aboutMe3 = "After graduating, I aim to secure a role in a company where I can contribute to impactful projects, grow in a supportive, diverse community, and help shape the future of technology.";
const aboutMe4 = "I’m driven by the desire to inspire future generations of creatives and lead positive change through technology. I’m passionate about the ethical responsibilities of developers and am pursuing a public policy certificate to ensure that technology is developed with integrity and social good in mind.";

function HomePage() {
  return (
    <div className="header-row">
      <div className="left-col">
        <h1>Hi, I'm Mary <span className="subtitle">an aspiring Software Developer</span></h1>
        <div className= "title-underline"></div>
        <div className="info-boxes" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <InfoBox size="small" header="Me">{aboutMe1}</InfoBox>
          <InfoBox size="medium" header="In the Future">{aboutMe3}</InfoBox>
          <InfoBox size="large" header='My "Why"'>{aboutMe4}</InfoBox>
          <MusicPlayer/>
        </div>
      </div>
      <div className= "right-col">
        <div className="profile">
          <img src={ProfileImg} alt="My Picture!" />
        </div>
        <div className='right-info-box' style={{marginTop: '1rem'}}>
          <InfoBox size="medium" header="University Orgs">{aboutMe2}</InfoBox>
        </div>
      </div>
    </div>
  )
}

export default HomePage