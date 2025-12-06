import React, { useState, useEffect } from "react";
import { Sun, Moon, Globe, Menu, X, Briefcase } from "lucide-react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <>
      <header className={`header ${isDarkMode ? "dark" : "light"}`}>
        <div className="header-container">
          <Link to={"/"} className="logo-section">
            <div className="logo-container">
              <img src="/logo.png" alt="WebFlow Logo" className="logo" />
            </div>
            <div className="company-name">WebFlow</div>
          </Link>

          {/* Navigation */}
          <nav className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" onClick={closeMobileMenu}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="right-section">
            <div className="theme-toggle" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </div>

            {/* <div className="language-selector">
              <div className="current-language">
                <Globe size={18} />
              </div>
              <div className="language-dropdown">
                <div
                  className={`language-option ${
                    language === "English" ? "active" : ""
                  }`}
                  onClick={() => handleLanguageChange("English")}
                >
                  English
                </div>
                <div
                  className={`language-option ${
                    language === "Russian" ? "active" : ""
                  }`}
                  onClick={() => handleLanguageChange("Russian")}
                >
                  Русский
                </div>
              </div>
            </div> */}

            <Link to={"/contact"} className="start-project-btn">
              Start Project
            </Link>

            <div
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
          </div>
        </div>
      </header>

      <div
        className={`mobile-overlay ${isMobileMenuOpen ? "active" : ""}`}
        onClick={closeMobileMenu}
      ></div>
    </>
  );
}

export default Header;
