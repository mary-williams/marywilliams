import "./WorkPage.css";

const experiences = [
  {
    role: "Applications Engineer Intern",
    company: "Vorago Technologies",
    date: "May - August 2025",
    description: (
      <ul>
        <li>
          Reduced manual processing time by 60% by developing a Python script to
          automate writing of log files.
        </li>
        <li>
          Enhanced existing automation scripts to streamline programming and
          testing of client Evaluation Kits (EVKs), improving workflow
          efficiency.
        </li>
        <li>
          Assembled and programmed 150 EVKs for clients, ensuring high quality
          and timely fulfillment.
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
          to ensure an organized and responsive environment.
        </li>
      </ul>
    ),
  },
];

const projects = [
  {
    title: "Personal Website",
    description:
      "A responsive React portfolio site to showcase my work and contact info.",
    tech: ["React", "CSS", "Javascript"],
    link: "https://github.com/mary-williams/marywilliams",
  },
  {
    title: "NASA APOD Slack Bot",
    description:
      'Creates a Slack bot that will send NASA\'s "A Picture Of the Day" everyday',
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
    description: "An improved social book, taking inspiration from Goodreads",
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
          explore computer science curriculum through workshops and events.
        </li>
        <li>
          Foster long-term relationships, offering ongoing academic and personal
          support to help mentees thrive.
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
          applications in order to build students’ confidence and readiness for
          higher education
        </li>
      </ul>
    ),
  },
];

function WorkPage() {
  return (
    <div className="info-box work-container">
      <section className="resume-section">
        <h3>Experience</h3>
        {experiences.map((exp, idx) => (
          <div className="info-box" key={idx}>
            <div className="resume-title">
              {exp.role} @ {exp.company}
            </div>
            <div className="resume-date">{exp.date}</div>
            <div className="resume-desc">{exp.description}</div>
          </div>
        ))}
      </section>
      <section className="resume-section">
        <h3>Projects</h3>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="info-box project-link"
              key={idx}
            >
              <div className="resume-title">{proj.title}</div>
              <div className="resume-desc">{proj.description}</div>
              <div className="resume-tech">
                {proj.tech &&
                  proj.tech.map((t, i) => (
                    <span className="tech-tag" key={i}>
                      {t}
                    </span>
                  ))}
              </div>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              )}
            </a>
          ))}
        </div>
      </section>
      <section className="resume-section">
        <h3>Community Involvement & Leadership</h3>
        {involvement.map((c, idx) => (
          <div className="info-box" key={idx}>
            <div className="resume-title">
              {c.org} — {c.role}
            </div>
            <div className="resume-date">{c.date}</div>
            <div className="resume-desc">{c.description}</div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default WorkPage;
