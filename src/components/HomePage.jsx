import { useState, useEffect } from "react";
import InfoBox from "./InfoBox.jsx";
import MusicPlayer from "./MusicPlayer.jsx";
import Photos from "./Photos.jsx";
import TypingHeading from "./TypingHeading.jsx";

const aboutMe1 =
  "I currently attend the University of Texas at Austin as a Computer Science student. I anticipate to graduate May 2027!";
const aboutMe3 =
  "After graduating, I aim to secure a role in a company where I can contribute to impactful projects, grow in a supportive, diverse community, and help shape the future of technology.";
const aboutMe4 =
  "I’m driven by the desire to inspire future generations of creatives and lead positive change through technology. I’m passionate about the ethical responsibilities of developers and am pursuing a public policy certificate to ensure that technology is developed with integrity and social good in mind.";
const aboutMe5 =
  "Whenever I have free time I like to read (typically fiction), take photos on my Fujifim XT4, discover new music, explore new hobbies, and anything involving getting outside";

const books = [
  { title: "The Little Prince", img: "/books/littleprince.jpeg" },
  { title: "The Kite Runner", img: "/books/kiterunner.jpeg" },
  { title: "Perks of Being a Wallflower", img: "/books/perkswallflower.jpeg" },
];
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

function HomePage() {
  const isMobile = useIsMobile();

  return isMobile ? (
    // Mobile layout
    <div className="container-phone py-4">
      <div className="mb-4" style={{ textAlign: "center", maxWidth: "400px" }}>
        <img
          src="/profile.jpg"
          alt="My Picture!"
          className="img-fluid rounded-4"
        />
      </div>
      <TypingHeading text="Hi, I'm Mary" className="mb-3" speed={80} />{" "}
      <h1 className="subtitle">an aspiring Software Developer</h1>
      <div className="title-underline"></div>
      <InfoBox size="large" header="Me">
        {aboutMe1}
      </InfoBox>
      <InfoBox size="large" header="In the Future">
        {aboutMe3}
      </InfoBox>
      <InfoBox size="large" header='My "Why"'>
        {aboutMe4}
      </InfoBox>
      <InfoBox size="large" header="Hobbies">
        {aboutMe5}
      </InfoBox>
      <MusicPlayer />
      <Photos />
    </div>
  ) : (
    // Desktop/laptop layout
    <div className="container-fluid py-4">
      <div className="row">
        {/* Main glassy InfoBox with all about me sections */}
        <div className="col-lg-8 col-12">
          <InfoBox size="xlarge">
            <TypingHeading text="Hi, I'm Mary" className="mb-3" speed={150} />{" "}
            <div className="title-underline"></div>
            <h2 className="subtitle">an aspiring Software Developer</h2>
            <div className="mb-3">{aboutMe1}</div>
            <div className="mb-3">{aboutMe3}</div>
            <div className="mb-3">{aboutMe4}</div>
            <div>{aboutMe5}</div>
            <div className="mb-3">{aboutMe4}</div>
            <div className="mb-3">{aboutMe4}</div>
            <div className="mb-3">{aboutMe4}</div>
            <div className="mb-3">{aboutMe4}</div>
            <div className="mb-3">{aboutMe4}</div>
          </InfoBox>
        </div>
        {/* Sticky glassy side card */}
        <div className="col-lg-4 col-12">
          <div className="sticky-top" style={{ top: "4rem" }}>
            <InfoBox
              size="large"
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ textAlign: "center" }}
            >
              <img
                src="/profile.jpg"
                alt="My Picture!"
                className="img-fluid rounded-4 w-100 mb-4"
              />
              <MusicPlayer className="w-100 mb-4" />
              <InfoBox size="small" className="w-100">
                <div>
                  <div>
                    <strong>Email:</strong>
                    <br />
                    <a
                      href="mailto:marywilliams@utexas.edu"
                      style={{ color: "#f03dac" }}
                    >
                      marywilliams@utexas.edu
                    </a>
                  </div>
                  <div className="mt-2">
                    <strong>Location:</strong>
                    <br />
                    Austin, TX
                  </div>
                </div>
              </InfoBox>
            </InfoBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
