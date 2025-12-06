import React from "react";
import "./Products.css";
import { ArrowDown } from "lucide-react";
import { projects } from "../../constants/project";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="products-hero">
      <div className="products-image-container">
        <img
          src="/product2.jpg"
          alt="Our Products"
          className="products-bg-image"
        />
        <div className="products-image-overlay"></div>
      </div>

      <div className="products-content">
        <div className="products-content-wrapper">
          <div className="products-badge">
            <span className="badge-text">Products</span>
          </div>

          <h1 className="products-main-title">Our Product Portfolio</h1>

          <div className="products-subtitles">
            <p className="subtitle-line primary-line">To Reach Your Goals</p>
            <p className="subtitle-line secondary-line">
              You Can Find the Most Appropriate Solutions in ERA
            </p>
          </div>

          <div className="products-stats">
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Products</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="products-cta-btn">
            Explore Products
            <ArrowDown />
          </button>
        </div>
      </div>

      <section className="our-solutions-section">
        <div className="container">
          {/* Section header */}
          <div className="section-header">
            <div className="section-badge">
              <span>Portfolio</span>
            </div>
            <h1 className="section-title">Our Solutions</h1>
            <p className="section-subtitle">
              Discover our innovative software solutions that help businesses
              transform and thrive in the digital landscape
            </p>
          </div>

          {/* Projects grid */}
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div className="project-card" key={idx}>
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                  />
                  <div className="image-overlay"></div>
                  <div className="project-category">
                    <span>{project.category}</span>
                  </div>
                  <div className="project-hover-effect"></div>
                </div>

                <div className="project-info">
                  <div className="project-number">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-desc">{project.desc}</p>

                  <div className="project-actions">
                    <button className="view-project-btn">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                    <div className="project-tags">
                      <span className="project-tag">Web</span>
                      <span className="project-tag">Mobile</span>
                      <span className="project-tag">Cloud</span>
                    </div>
                  </div>
                </div>

                <div className="project-gradient-border"></div>
              </div>
            ))}
          </div>

          {/* View all button */}
          <div className="view-all-container">
            <button className="view-all-btn">
              View All Projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
