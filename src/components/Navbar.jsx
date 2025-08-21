import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { accent } from "../assets/colors";

function Navbar() {
  const location = useLocation();

  return (
    <nav style={{ textAlign: "center" }}>
      <ul
        className="nav nav-pills nav-fill gap-2 p-1 medium rounded-5"
        id="pillNav2"
        role="tablist"
        style={{
          "--bs-nav-link-color": accent,
          "--bs-nav-pills-link-active-color": "white",
          "--bs-nav-pills-link-active-bg": accent,
          background: "rgba(255,255,255,0.18)",
          display: "inline-flex",
          justifyContent: "center",
          margin: "1rem auto",
          minWidth: window.innerWidth < 600 ? "280px" : "400px",
          boxShadow: "0 2px 12px rgba(114, 109, 109, 0.49)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <li className="nav-item" role="presentation">
          <Link
            to="/"
            className={`nav-link rounded-5${
              location.pathname === "/" ? " active" : ""
            }`}
            aria-current={location.pathname === "/" ? "page" : undefined}
          >
            About
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            to="/work"
            className={`nav-link rounded-5${
              location.pathname === "/work" ? " active" : ""
            }`}
            aria-current={location.pathname === "/work" ? "page" : undefined}
          >
            Resume
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            to="/contact"
            className={`nav-link rounded-5${
              location.pathname === "/contact" ? " active" : ""
            }`}
            aria-current={location.pathname === "/contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
