import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";

import HomePage from "./Components/HomePage";
import Static from "./Components/Static";
import Dynamic from "./Components/Dynamic";
import FullStack from "./Components/FullStack";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <Header />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/static" element={<Static />} />
          <Route path="/dynamic" element={<Dynamic />} />
          <Route path="/fullstack" element={<FullStack />} />
        </Routes>

        {/* Footer */}
        
      </div>
    </Router>
  );
}

export default App;

