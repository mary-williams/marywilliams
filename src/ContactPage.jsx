import './ContactPage.css'

function ContactPage() {
  return (
    <div>

      <div className='title'>
        <h1>Contact Me</h1>
      </div>

      <div className='Email'>
        <button>marywilliams@utexas.edu</button>
      </div>

      <div className='subtext'>
        <p>Send me a message and I'll get back to you soon!</p>
      </div>

      <div className='Direct Message'>
        <p>First Name</p>
        <p>Email Address</p>
        <p>Subject</p>
        <p>message</p>
        <button>Send Message</button>
      </div>

      <div className='Socials'>
        <div className='Linkedin'>
          <a
            href="www.linkedin.com/in/mary-williams-383a6728b"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>
        <div className='Github'>
          <a
            href="https://github.com/mary-williams"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>

    </div>
  )
}

export default ContactPage