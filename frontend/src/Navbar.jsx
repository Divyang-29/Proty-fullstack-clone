import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "./utils/api";
import "./Navbar.css";
import LoginModal from "./components/Auth/LoginModal";

export default function Navbar() {
  const navigate = useNavigate();

  const [authOpen, setAuthOpen] = useState(false);
  const [authType, setAuthType] = useState("login");
  const [user, setUser] = useState(null); // 🔥 AUTH USER

  const [open, setOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const userRef = useRef(null);

  // ✅ FETCH CURRENT USER
  useEffect(() => {
    api
      .get("/auth/me")
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null));
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔴 LOGOUT
  const handleLogout = async () => {
    await api.get("/auth/logout");
    setUser(null);
    setUserOpen(false);
    navigate("/");
  };

  return (
    <>
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

        {/* CENTER */}
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
          {/* USER DROPDOWN */}
          <div className="user-wrapper" ref={userRef}>
            <div className="user" onClick={() => setUserOpen(!userOpen)}>
              <i className="fa-regular fa-user"></i>
              <span>
                {user ? user.email : "Account"} ▾
              </span>
            </div>

            {userOpen && (
              <div className="user-dropdown">
                <ul>
                  {user ? (
                    <>
                      <li>Dashboard</li>
                      <li>Profile</li>
                      <li className="logout" onClick={handleLogout}>
                        Logout
                      </li>
                    </>
                  ) : (
                    <li
                      onClick={() => {
                        setAuthType("login");
                        setAuthOpen(true);
                        setUserOpen(false);
                      }}
                    >
                      Login / Register
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* ADD PROPERTY */}
          <button
            className="add-btn"
            onClick={() => navigate("/addProperty")}
          >
            Add property
          </button>

          <span className="hamburger" onClick={() => setOpen(!open)}>
            ☰
          </span>
        </div>
      </nav>

      {/* AUTH MODAL */}
      {authOpen && (
        <LoginModal
          type={authType}
          onClose={() => setAuthOpen(false)}
          switchToRegister={() => setAuthType("register")}
          switchToLogin={() => setAuthType("login")}
        />
      )}
    </>
  );
}
