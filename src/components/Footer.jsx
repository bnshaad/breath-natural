import { useState } from "react";
import { subscribeEmail } from "../api/plants";
import "./Footer.css";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    if (!emailPattern.test(email.trim())) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setIsSubmitting(true);

    try {
      const message = await subscribeEmail(email);
      setStatus({ type: "success", message });
      setEmail("");
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">

          {/* Brand */}
          <div className="footer__brand">
            <a href="#hero" className="footer__logo">
              <img
                src="https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=40&q=80"
                alt="leaf"
                className="footer__logo-img"
              />
              Planto.
            </a>
            <p className="footer__tagline">
              Curated indoor plants, simple care tips, and fresh greenery for peaceful homes.
            </p>
            <div className="footer__socials">
              {["FB", "TW", "Li"].map((s) => (
                <a key={s} href="#" className="footer__social">{s}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {["Home", "Types of Plants", "Contact", "Privacy"].map((l) => (
                <li key={l}><a href="#" className="footer__link">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer__col">
            <h4 className="footer__col-title">For Every Update</h4>
            <form className="footer__subscribe" onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                placeholder="Enter your email"
                className="footer__input"
                aria-label="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button className="footer__subscribe-btn" disabled={isSubmitting}>
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
              <p className={`footer__message${status.type ? ` footer__message--${status.type}` : ""}`} aria-live="polite">
                {status.message}
              </p>
            </form>
          </div>

        </div>

        <div className="footer__bottom">
          <p>planto © all rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
