import "../style/Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="logo">🍴 Foodie</h2>
        <p className="tagline">Fresh • Tasty • Delivered</p>
      </div>

      <div className="footer-buttons">
        <a href="/shop" className="footer-btn">Shop</a>
        <a href="/faq" className="footer-btn">FAQ</a>
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
