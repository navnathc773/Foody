import "../style/Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <footer className="footer" data-aos="zoom-out-right">
      <div className="footer-top">
        <h2 className="logo">🍴 Foodie</h2>
        <p className="tagline">Fresh • Tasty • Delivered</p>
      </div>

      <div className="footer-buttons">
        <a href="/cart" className="footer-btn">Shop</a>
        <a href="/contact" className="footer-btn">Contact</a>
        <a href="/about" className="footer-btn">About Us</a>
      </div>

      {/* <div className="newsletter">
        <input type="email" placeholder="Enter your email" />
        <button className="subscribe-btn">Subscribe</button>
      </div> */}
       <form className="todo-form">
                <input type="text" className="todo-input" placeholder="Enter your Email" />
                <button type="submit" className="todo-button">Subscribe</button>
        </form>

      <div className="social-icons">
        <a href="#">📘</a>
        <a href="#">📸</a>
        <a href="#">🐦</a>
        <a href="#">▶️</a>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} FoodieMart. All Rights Reserved.
      </p>
    </footer>
  );
};
