import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [userOpen, setUserOpen] = useState(false);
  const userRef = useRef(null);

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="navbar-left">
        <div className="logo">
          <img
            src="https://themesflat.co/html/proty/images/logo/logo@2x.png"
            alt="Proty"
          />
        </div>
      </div>

      {/* CENTER (DESKTOP) */}
      <div className="navbar-center">
        <ul className="nav-links">
          <li onClick={() => navigate("/")}>Home ▾</li>
          <li onClick={() => navigate("/listing")}>Listing ▾</li>
          <li onClick={() => navigate("/pages")}>Pages ▾</li>
          <li onClick={() => navigate("/blog")}>Blog ▾</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-right">
        <div className="phone">
          <span className="icon">📞</span>
          <span>(603) 555-0123</span>
        </div>

        <div className="user-wrapper" ref={userRef}>
          <div className="user" onClick={() => setUserOpen(!userOpen)}>
            <span className="icon">👤</span>
            <span>Themesflat ▾</span>
          </div>

          {userOpen && (
            <div className="user-dropdown">
              <ul>
                <li>Dashboard</li>
                <li>Profile</li>
                <li>Login / Register</li>
                <li className="logout">Logout</li>
              </ul>
            </div>
          )}
        </div>

        <button className="add-btn">Add property</button>

        {/* HAMBURGER (MOBILE) */}
        <span className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </span>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          <ul>
            <li>Home</li>
            <li>Listing</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
