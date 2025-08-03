import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation();

  return (
    <nav style={{ textAlign: 'center'}}>
      <ul
        className="nav nav-pills nav-fill gap-2 p-1 medium rounded-5" id="pillNav2" role="tablist"
        style={{
          '--bs-nav-link-color': 'rgb(184, 182, 183)',
          '--bs-nav-pills-link-active-color': 'white',
          '--bs-nav-pills-link-active-bg': 'rgb(240, 61, 172)',
          background: 'white',
          display: 'inline-flex', 
          justifyContent: 'center',
          margin: '1rem auto',
          minWidth: '400px',
          boxShadow: '0 2px 12px rgba(114, 109, 109, 0.49)',
        }}
      >
        <li className="nav-item" role="presentation">
          <Link
            to="/"
            className={`nav-link rounded-5${location.pathname === '/' ? ' active' : ''}`}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            About
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