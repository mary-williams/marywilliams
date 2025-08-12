import { useState, useEffect } from "react";
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
      <h1>Hi, I'm Mary </h1>
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
        <div className="col-lg-8 col">
          <h1>
            Hi, I'm Mary{" "}
            <span className="subtitle">an aspiring Software Developer</span>
          </h1>
          <div
            className="title-underline"
            style={{ marginBottom: "2rem" }}
          ></div>
          <div className="row mb-2">
            <div className="col-md-4 col-12">
              <InfoBox size="medium" header="Me">
                {aboutMe1}
              </InfoBox>
            </div>
            <div className="col-md-8 col-12">
              <InfoBox size="xlarge" header='My "Why"'>
                {aboutMe4}
              </InfoBox>
            </div>
          </div>
          <div className="row g-3" style={{ marginTop: "0.5rem" }}>
            <div className="col-md-4 col-12">
              <Photos />
            </div>
            <div className="col-md-4 col-12">
              <InfoBox size="medium" header="In the Future">
                {aboutMe3}
              </InfoBox>
            </div>
            <div className="col-md-3 col-12">
              <MusicPlayer />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="profile mb-4">
            <img
              src="/profile.jpg"
              alt="My Picture!"
              className="img-fluid rounded-4 w-60 mx-auto d-block"
            />
          </div>
          <div className="col-md-10 col-12">
            <InfoBox size="large" header="Hobbies">
              {aboutMe5}
            </InfoBox>
          </div>
          {/*
                <InfoBox size="large" header="Books I Like">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "1.5rem",
                    }}
                  >
                    {books.map((book) => (
                      <div
                        key={book.title}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={book.img}
                          alt={book.title}
                          style={{
                            boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                            width: "100px",
                            height: "160px",
                            objectFit: "cover",
                            marginBottom: "0.5rem",
                          }}
                        />
                        <div
                          style={{
                            marginBottom: "0.5rem",
                            textAlign: "center",
                            fontSize: "15px"
                          }}
                        >
                          {book.title}
                        </div>
                      </div>
                    ))}
                  </div>
                  </InfoBox>
                  */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
