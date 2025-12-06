import { FaTelegramPlane, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      {/* CTA SECTION */}
      <div className="footer-cta">
        <div className="cta-icon">
          <FaQuestionCircle className="question-icon" />
        </div>

        <div className="cta-text">
          <h2>For Your Questions</h2>
          <p>
            You can contact us for more detailed information about our products
            and services.
          </p>

          <Link to="/contact" className="cta-btn">
            Contact Us
          </Link>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-title">WebFlow Solutions</h2>
          <p className="footer-desc">
            We provide modern web and software development services to help
            businesses grow faster with reliable and scalable solutions.
          </p>

          <div className="social-links">
            <a
              href="https://t.me/Munisbek_Boltaboyev"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane />
            </a>

            <a
              href="https://www.instagram.com/munisbekboltaboyev"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/munisbekboltaboyev"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <h3>Contact Us</h3>
          <p>
            <strong>Phone:</strong> +998 91 912 07 50
          </p>
          <p>
            <strong>Email:</strong> munisbekboltaboyev@gmail.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} WebFlow Solutions — All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
