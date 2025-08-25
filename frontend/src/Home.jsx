import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../style/Home.css";

export const Home = () => {
  return (
    <>
      <nav>
        <div className="logo">Foody</div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
          <NavLink to="/Cart"><FaShoppingCart /></NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
