import './WorkPage.css'

const projects = [
  {
    title: "Personal Website",
    description: "A responsive React portfolio site to showcase my work and contact info.",
    tech: ["React", "CSS", "Javascript"],
    code: "https://github.com/mary-williams/marywilliams",
    demo: null,
    design: null
  },
  {
    title: "NASA APOD Slack Bot",
    description: "Creates a Slack bot that will send NASA's \"A Picture Of the Day\" everyday",
    tech: ["Python", "AWS", "API"],
    code: "https://github.com/mary-williams/nasa_apod",
    demo: null,
    design: null
  },
  {
    title: "Communication App",
    description: "An app to streamline multiple communication apps like Stack, Discord, GroupMe, Remind into one simple app to simplify student's lives.",
    tech: ["React", "API"],
    code: "https://www.figma.com/file/xyz123/Design-System",
    demo: null,
    design: "https://www.figma.com/file/xyz123/Design-System"
  },
  {
    title: "Book App",
    description: "An improved social book, taking inspiration from Goodreads",
    tech: ["Figma"],
    code: "https://github.com/mary-williams",
    demo: null,
    design: "https://www.figma.com/file/xyz123/Design-System"
  }
];

function WorkPage() {
  return (
    <div className="work-container">
      <h2>My Work</h2>
      <p className="work-intro">Here are some projects I've built and designed:</p>
      <div className="work-grid">
        {projects.map((proj, idx) => (
          <div className="work-card" key={idx}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="work-tech">
              {proj.tech.map((t, i) => (
                <span className="tech-tag" key={i}>{t}</span>
              ))}
            </div>
            <div className="work-links">
              {proj.code && <a href={proj.code} target="_blank" rel="noopener noreferrer">Code</a>}
              {proj.demo && <a href={proj.demo} target="_blank" rel="noopener noreferrer">Demo</a>}
              {proj.design && <a href={proj.design} target="_blank" rel="noopener noreferrer">Design</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkPage