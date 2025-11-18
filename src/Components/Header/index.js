import { NavLink } from "react-router-dom";
import "./index.css";

const Header = () => (
  <header className="header">
    <div className="header-title">
      <h1>My Portfolio</h1>
    </div>

    {/* Navigation Tabs */}
    <nav className="navbar">
      <ul className="list">
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
  </header>
);

export default Header;
