import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="nav">
      <div className="container nav__inner">
        <div className="nav__left" onClick={() => navigate("/")}>
          <div className="nav__logo">🗞️ Blog<span>Manager</span></div>
        </div>
        <nav className="nav__menu">
          <NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"} end>
            Trang chủ
          </NavLink>
          <NavLink to="/create" className={({ isActive }) => isActive ? "link active" : "link"}>
            Viết bài
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
