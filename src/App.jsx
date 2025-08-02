import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import WorkPage from "./WorkPage.jsx";
import HomePage from "./HomePage.jsx";
import ContactPage from "./ContactPage.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
