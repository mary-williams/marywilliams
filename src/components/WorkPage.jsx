import "./WorkPage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { accent } from "../assets/colors";

const experiences = [
  {
    role: "Applications Engineer Intern",
    company: "Vorago Technologies",
    date: "May - August 2025",
    description: (
      <ul>
        <li>
          Reduced manual processing time by 60% by developing a Python script to
          automate writing of log files
        </li>
        <li>
          Enhanced existing automation scripts to streamline programming and
          testing of client Evaluation Kits (EVKs), improving workflow
          efficiency
        </li>
        <li>
          Assembled and programmed 150 EVKs for clients, ensuring high quality
          and timely fulfillment
        </li>
      </ul>
    ),
  },
  {
    role: "Desk Assistant",
    company: "University of Texas at Austin (Kinsolving Dorm)",
    date: "January 2024 - Present",
    description: (
      <ul>
        <li>
          Manage resident concerns, check-ins, mail, and front desk operations
          to ensure an organized and welcoming environment
        </li>
      </ul>
    ),
  },
];

const projects = [
  {
    title: "Personal Website",
    description:
      "A responsive React portfolio site to showcase my work and contact info. Your here now!",
    tech: ["React", "Bootstrap", "Firebase"],
    link: "https://github.com/mary-williams/marywilliams",
  },
  {
    title: "NASA APOD Slack Bot",
    description:
      'Creates a Slack bot that will send NASA\'s "A Picture Of the Day" everyday.',
    tech: ["Python", "AWS", "API"],
    link: "https://github.com/mary-williams/nasa_apod",
  },
  {
    title: "Communication App",
    description:
      "An app to streamline multiple communication apps like Stack, Discord, GroupMe, Remind into one simple app to simplify student's lives.",
    tech: ["React", "API"],
    link: "https://github.com/mary-williams/Message-App",
  },
  {
    title: "Book App",
    description: "A social book app, an improved version of Goodreads, with added features and modern design.",
    tech: ["Figma"],
    link: "https://github.com/mary-williams",
  },
];

const involvement = [
  {
    org: "Women in Computer Science (WiCS)",
    role: "Mentor & Member",
    date: "August 2023 - Present",
    description: (
      <ul>
        <li>
          Engage in mentorship and outreach, helping hundreds of high schoolers
          explore computer science curriculum through workshops and events
        </li>
        <li>
          Foster long-term relationships, offering ongoing academic and personal
          support to help mentees thrive
        </li>
      </ul>
    ),
  },
  {
    org: "Society for Advancing Gender Equity in STEM (SAGES)",
    role: "Mentor & Member",
    date: "August 2024 - Present",
    description: (
      <ul>
        <li>
          Provide one-on-one mentorship to local high schools in the Austin area
          on applying to college and STEM specific education.
        </li>
        <li>
          Assist with navigating scholarship and careers and reviewing
          applications in order to build students confidence and readiness for
          higher education
        </li>
      </ul>
    ),
  },
];

function WorkPage() {
  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col-12 col-lg-8 mx-auto resume-section info-box">
          <h3 style ={{color: accent}}>Experience</h3>
          {experiences.map((exp, idx) => (
            <div className="experiences mb-3" key={idx}>
              <div className="resume-title">
                {exp.role} @ {exp.company}
              </div>
              <div className="resume-date">{exp.date}</div>
              <div className="resume-desc">{exp.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12 col-lg-8 mx-auto resume-section info-box">
          <h3 style ={{color: accent}}>Projects</h3>
          <div className="row">
            {projects.map((proj, idx) => (
              <div className="col-12 col-md-6 mb-4" key={idx}>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link d-block h-100"
                >
                  <div className="resume-title">{proj.title}</div>
                  <div className="resume-tech">
                    {proj.tech &&
                      proj.tech.map((t, i) => (
                        <span className="tech-tag" key={i}>
                          {t}
                        </span>
                      ))}
                  </div>
                  <div className="resume-desc">{proj.description}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-12 col-lg-8 mx-auto resume-section info-box">
          <h3 style ={{color: accent}}>Community Involvement & Leadership</h3>
          {involvement.map((c, idx) => (
            <div className="involvement mb-3" key={idx}>
              <div className="resume-title">
                {c.org} — {c.role}
              </div>
              <div className="resume-date">{c.date}</div>
              <div className="resume-desc">{c.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkPage;
