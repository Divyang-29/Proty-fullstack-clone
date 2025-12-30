import { useState } from "react";
import api from "../../utils/api";
import "./LoginModal.css";

export default function LoginModal({
  type,
  onClose,
  switchToRegister,
  switchToLogin,
}) {
  // LOGIN STATE
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // REGISTER STATE
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  /* LOGIN */
  const handleLogin = async () => {
    try {
      await api.post("/auth/login", loginData);
      alert("Login successful");
      onClose();
      window.location.reload(); // simplest for now
    } catch (err) {
      alert("Invalid email or password",err);
    }
  };

  /* REGISTER */
  const handleRegister = async () => {
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await api.post("/auth/register", {
        email: registerData.email,
        password: registerData.password,
      });

      alert("Registered successfully");
      switchToLogin();
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        {/* LEFT IMAGE */}
        <div className="auth-image"></div>

        {/* RIGHT FORM */}
        <div className="auth-content">
          <button className="close-btn" onClick={onClose}>×</button>

          {type === "login" ? (
            <>
              <h2>Login</h2>

              <input
                type="email"
                placeholder="Email address"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />

              <input
                type="password"
                placeholder="Your password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />

              <button className="primary-btn" onClick={handleLogin}>
                Login
              </button>

              <p className="switch-text">
                Don’t have an account?{" "}
                <span onClick={switchToRegister}>Register</span>
              </p>
            </>
          ) : (
            <>
              <h2>Register</h2>

              <input
                type="email"
                placeholder="Email address"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
              />

              <input
                type="password"
                placeholder="Password"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({ ...registerData, password: e.target.value })
                }
              />

              <input
                type="password"
                placeholder="Confirm password"
                value={registerData.confirmPassword}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    confirmPassword: e.target.value,
                  })
                }
              />

              <button className="primary-btn" onClick={handleRegister}>
                Sign Up
              </button>

              <p className="switch-text">
                Already have an account?{" "}
                <span onClick={switchToLogin}>Sign In</span>
              </p>
            </>
          )}

          <div className="divider">or login with</div>

          <div className="social-btns">
            <button>Google</button>
            <button>Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
}
