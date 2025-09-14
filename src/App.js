import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from './Components/HomePage'
import Static from './Components/Static'
import Dynamic from './Components/Dynamic'
import FullStack from './Components/FullStack'

import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <Header />

        {/* Navigation Tabs */}
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/" end className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/static" className="nav-link">
                Static Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/dynamic" className="nav-link">
                Dynamic Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/fullstack" className="nav-link">
                Full Stack Projects
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/static" element={<Static />} />
          <Route path="/dynamic" element={<Dynamic />} />
          <Route path="/fullstack" element={<FullStack />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
