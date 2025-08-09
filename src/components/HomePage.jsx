import ProfileImg from "src/assets/profile.jpg";
import InfoBox from "./InfoBox.jsx";
import MusicPlayer from "./MusicPlayer.jsx";
import Photos from "./Photos.jsx";

const aboutMe1 =
  "I currently attend the University of Texas at Austin as a Computer Science student. I anticipate to graduate May 2027!";
const aboutMe3 =
  "After graduating, I aim to secure a role in a company where I can contribute to impactful projects, grow in a supportive, diverse community, and help shape the future of technology.";
const aboutMe4 =
  "I’m driven by the desire to inspire future generations of creatives and lead positive change through technology. I’m passionate about the ethical responsibilities of developers and am pursuing a public policy certificate to ensure that technology is developed with integrity and social good in mind.";
const aboutMe5 =
  "Whenever I have free time I like to read (typically fiction), take photos on my Fujifim XT4, discover new music, explore new hobbies, and anything involving getting outside";
const aboutMe6 =
  "de kjfe erjfb erifhiwqjnci fuwqehrfcjsvjweriuv wivbwiuhviuewi de kjfe erjfb erifhiwqjnci fuwqehrfcjsvjweriuv wivbwiuhviuewi de kjfe erjfb erifhiwqjnci fuwqehrfcjsvjweriuv wivbwiuhviuewifjbrbverbvib ufvfrbviwbcvwr wuf wifwefhiewufhweijfer fugfieurfierufpiuergieru fir v";

function HomePage() {
  return (
    <div className="left-right-row">
      <div className="left-col">
        <div className="header-row">
          <h1>
            Hi, I'm Mary{" "}
            <span className="subtitle">an aspiring Software Developer</span>
          </h1>
          <div className="title-underline"></div>
        </div>
        <div className="info-boxes">
          <InfoBox size="small" header="Me">
            {aboutMe1}
          </InfoBox>
          <InfoBox size="medium" header="In the Future">
            {aboutMe3}
          </InfoBox>
          <InfoBox size="large" header='My "Why"'>
            {aboutMe4}
          </InfoBox>
        </div>
        <div className="bottom-row">
          <Photos />
          <MusicPlayer />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <InfoBox size="xlarge" header="Hobbies">
              {aboutMe5}
            </InfoBox>
          </div>
        </div>
      </div>
      <div className="right-col">
        <div className="profile">
          <img src={ProfileImg} alt="My Picture!" />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <InfoBox size="large" header="Other">
            {aboutMe6}
          </InfoBox>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
