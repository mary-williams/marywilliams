import './Footer.css'
import { accent } from "../assets/colors";

function Footer() {
  return (
    <footer className="footer">
      <div>
        &copy; {new Date().getFullYear()} Mary Williams
      </div>
      <div>
        <a href="mailto:marywilliams@utexas.edu" style={{color: accent}}>Contact</a>
        {" | "}
        <a href="https://github.com/mary-williams" style={{ color: accent }} target="_blank" rel="noopener noreferrer">GitHub</a>
        {" | "}
        <a href="https://www.linkedin.com/in/mary-williams-383a6728b" style={{ color: accent }} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  )
}

export default Footer