import './Footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div>
        &copy; {new Date().getFullYear()} Mary Williams &mdash; Portfolio
      </div>
      <div>
        <a href="mailto:marywilliams@utexas.edu">Contact</a>
        {" | "}
        <a href="https://github.com/mary-williams" target="_blank" rel="noopener noreferrer">GitHub</a>
        {" | "}
        <a href="https://www.linkedin.com/in/mary-williams-383a6728b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}

export default Footer