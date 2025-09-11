import "../style/contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Type your message" required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
