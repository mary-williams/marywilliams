import { useState, useEffect } from "react";
import InfoBox from "./InfoBox.jsx";
import MusicPlayer from "./MusicPlayer.jsx";
import Photos from "./Photos.jsx";
import TypingHeading from "./TypingHeading.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FiMapPin } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import "./ContactPage.css";

const pinkColor = "rgb(240, 61, 172)";
const darkpinkColor = "rgb(219, 46, 153)";
const grayColor = "rgb(106, 106, 106)";
const aboutMeArr = [
  <>
    🤘 I currently attend the University of Texas at Austin as a Computer
    Science student. <br />I anticipate to graduate May 2027!
  </>,
  "🎓 After graduating, I aim to secure a role in a company where I can contribute to impactful projects, grow in a supportive, diverse community, and help shape the future of technology.",
  "⚖️  I’m driven by the desire to inspire future generations of creatives and lead positive change through technology. I’m passionate about the ethical responsibilities of developers and am pursuing a public policy certificate to ensure that technology is developed with integrity and social good in mind.",
  "🌱 Whenever I have free time I like to read (typically fiction), take photos on my Fujifim XT4 or Olympus film camera, discover new music, explore new hobbies, and anything involving getting outside.",
];

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
          <InfoBox size="xlarge" style={{ marginBottom: "0rem" }}>
            <TypingHeading
              text="Hi, I'm Mary 👾"
              className="mb-3"
              speed={150}
            />{" "}
            <div className="title-underline"></div>
            <h5 style={{ color: darkpinkColor }}>About Me</h5>
            <div className="mb-3">{aboutMeArr[0]}</div>
            <div className="mb-3">{aboutMeArr[1]}</div>
            <div className="mb-3">{aboutMeArr[2]}</div>
            <div className="mb-4">{aboutMeArr[3]}</div>
            <h5 style={{ color: darkpinkColor }}>
              What I'm Currently Working On
            </h5>
            <i>
              {" "}
              I get excited about new projects and often find myself spending
              time equally across these{" "}
            </i>
            <div className="row g-3 mt-1">
              <div className="col-md-6 col-12" style={{color: pinkColor}}>
                <InfoBox size="medium" header="Site of Sites" >
                    {
                    <p style={{ fontSize: "17px" }}>
                      A website that gathers and displays unique indie websites
                      for users to explore. Sites range in theme from music
                      discovery to reading place recommendations.{" "}
                    </p>
                  }
                </InfoBox>
              </div>
              <div className="col-md-6 col-12">
                <InfoBox size="medium" header="Mobile App">
                  {
                    <p style={{ fontSize: "17px" }}>
                      React Native mobile app to streamline communication apps
                      such as Discord, Slack, Remind, GroupMe into one, making
                      it easier for students to stay organized.
                    </p>
                  }
                </InfoBox>
              </div>
              <div className="col-md-6 col-12">
                <InfoBox size="medium" header="Improved Goodreads">
                  {
                    <p style={{ fontSize: "17px" }}>
                      Taking inspiration from the popular reading app,
                      Goodreads, and creating a more modern design with extra
                      features like labeling books as physically owned, so users
                      can borrow amongst themselves.{" "}
                    </p>
                  }
                </InfoBox>
              </div>
              <div className="col-md-6 col-12">
                <InfoBox size="medium" header="Privacy Policy Plugin">
                  {
                    <p style={{ fontSize: "17px" }}>
                      {" "}
                      A web plugin to simplify reading and understanding
                      policies you agree to online (that you usually skip
                      reading anyway).
                    </p>
                  }
                </InfoBox>
              </div>
            </div>
            <div style={{ marginTop: "2rem" }}>
              <h5 style={{ color: darkpinkColor }}>Previous Projects</h5>
              <div
                className="hover-effect"
                style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
              >
                <InfoBox
                  size="small"
                  className="info-box"
                  style={{ flex: 1, textAlign: "center" }}
                >
                  <a
                    href="https://github.com/mary-williams"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Check out my github
                    <FiExternalLink style={{ color: pinkColor }} size={18} />
                  </a>
                </InfoBox>
                <InfoBox
                  size="small"
                  className="info-box"
                  style={{ flex: 1, textAlign: "center" }}
                >
                  <a
                    href="/work"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Or my resume
                    <FiExternalLink className="external-icon" size={18} />
                  </a>
                </InfoBox>
              </div>
            </div>
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
                className="img-fluid rounded-4 w-75 mx-auto d-block mt-4 mb-2"
              />
              <div
                className="mb-2 w-auto"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "fit-content",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              >
                <h1 style={{fontSize: "30px", fontWeight: "normal"}}>Mary Williams</h1>

                <div
                  style={{
                    background: "rgba(255,255,255,0.18)",
                    borderRadius: "1rem",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                    padding: "0.5rem",
                    maxWidth: "190px",
                    width: "100%",
                    margin: "0 auto",
                    textAlign: "center",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      fontWeight: "normal",
                      paddingTop: "0.5rem",
                    }}
                  >
                    Software Developer
                  </h1>
                </div>
                <div
                  className="title-underline"
                  style={{
                    marginTop: "1rem",
                    width: "70%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></div>
              </div>

              <MusicPlayer />
              <div className="img-and-text d-flex flex-column align-items-start gap-3">
                {/* Email row */}
                <div className="d-flex align-items-center gap-2">
                  <InfoBox
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      maxWidth: "32px",
                      height: "32px",
                      borderRadius: "0.2rem",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ color: darkpinkColor, fontSize: "20px" }}
                    />
                  </InfoBox>
                  <div className="email ms-2" style={{ margin: "0 0 10px 0" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "rgb(115, 115, 115)",
                      }}
                    >
                      EMAIL
                    </span>
                    <br />
                    <a
                      href="mailto:marywilliams@utexas.edu"
                      style={{ color: darkpinkColor, textDecoration: "none" }}
                    >
                      marywilliams@utexas.edu
                    </a>
                  </div>
                </div>
                {/* Location row */}
                <div className="d-flex align-items-center gap-2">
                  <InfoBox
                    className="d-flex align-items-center justify-content-center"
                    style={{ maxWidth: "32px", height: "32px" }}
                  >
                    <FiMapPin
                      style={{ color: darkpinkColor, fontSize: "22px" }}
                    />
                  </InfoBox>
                  <div
                    className="location ms-2"
                    style={{ margin: "0 0 10px 0" }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: "rgb(115, 115, 115)",
                      }}
                    >
                      LOCATION
                    </span>
                    <br />
                    Austin, TX
                  </div>
                </div>
              </div>
            </InfoBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
