import { Link, useLocation } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  const location = useLocation();

  return (
    <nav style={{ textAlign: 'center'}}>
      <ul
        className="nav nav-pills gap-5 p-1 small rounded-5"
        style={{
          '--bs-nav-link-color': 'black',
          '--bs-nav-pills-link-active-color': 'white',
          '--bs-nav-pills-link-active-bg': 'rgb(240, 61, 172)',
          background: '#f0f0f0',
          display: 'inline-flex', 
          justifyContent: 'center',
          margin: '1rem auto',
          minWidth: '300px',
        }}
      >
        <li className="nav-item" role="presentation">
          <Link
            to="/"
            className={`nav-link rounded-5${location.pathname === '/' ? ' active' : ''}`}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            to="/work"
            className={`nav-link rounded-5${location.pathname === '/work' ? ' active' : ''}`}
            aria-current={location.pathname === '/work' ? 'page' : undefined}
          >
            Work
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            to="/contact"
            className={`nav-link rounded-5${location.pathname === '/contact' ? ' active' : ''}`}
            aria-current={location.pathname === '/contact' ? 'page' : undefined}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar