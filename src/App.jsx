import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import WorkPage from './WorkPage.jsx'
import HomePage from './HomePage.jsx'
import ContactPage from './ContactPage.jsx'
import Navbar from './Navbar.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App