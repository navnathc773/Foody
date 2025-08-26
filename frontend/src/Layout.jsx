import { Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../style/Home.css";
import { useState } from "react";

export const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const openSignUp = () => {
    setIsLogin(false);
    setShowModal(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setShowModal(true);
  };

  const closePopup = () => {
    setShowModal(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Foody</div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/Cart">
            <FaShoppingCart />
          </NavLink>
          <button className="popup-btn" onClick={openSignUp}>
            Sign Up
          </button>
          <button className="popup-btn" onClick={openLogin}>
            Login
          </button>
        </div>
      </nav>

      <Outlet />

      {/* Popup Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closePopup}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <span className="close-btn" onClick={closePopup}>
              &times;
            </span>

            {/* Switch between Login & SignUp */}
            {isLogin ? (
              <form className="signup-form">
                <h2>Login</h2>

                <input type="email" name="email" placeholder="Email" required />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />

                <button type="submit">Login</button>

                <p>
                  Don’t have an account?{" "}
                  <span className="switch-link" onClick={() => setIsLogin(false)}>
                    Sign Up
                  </span>
                </p>
              </form>
            ) : (
              <form className="signup-form">
                <h2>Sign Up</h2>

                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input
                  type="text"
                  name="mobileno"
                  placeholder="Mobile Number"
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />

                <button type="submit">Register</button>

                <p>
                  Already have an account?{" "}
                  <span className="switch-link" onClick={() => setIsLogin(true)}>
                    Login
                  </span>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
