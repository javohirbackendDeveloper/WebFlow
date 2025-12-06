import React from "react";
import "./Home.css";
import { FaRegEdit } from "react-icons/fa";
import { features } from "../../constants/features";
import { teamMembers } from "../../constants/teamMembers";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        {/* Hero rasm */}
        <div className="hero-image-container">
          <img
            src="/home1.png"
            alt="Software Solutions Hero"
            className="hero-image"
          />
          <div className="image-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="content-wrapper">
            <h1 className="hero-title">
              <span className="title-line">Creating a Best</span>
              <span className="title-line highlight">Software Solutions</span>
            </h1>

            <p className="hero-description">
              We specialize in crafting innovative and reliable software
              solutions that empower businesses to thrive in the digital world.
            </p>

            <div className="hero-buttons">
              <Link to={"/contact"} className="primary-btn">
                Start now
              </Link>
              <Link to={"/products"} className="secondary-btn">
                Learn more
              </Link>
            </div>

            {/* Statistika */}
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Country</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Solutions</h2>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div className="feature-card" key={idx}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software part */}

      <section className="software-section">
        <div className="software-container">
          <div className="software-image-wrapper">
            <img
              src="/home3.jpg"
              alt="Custom Software Development"
              className="software-bg-image"
            />
            <div className="image-overlay-dark"></div>
            <div className="image-gradient-overlay"></div>
          </div>

          <div className="software-content">
            <div className="content-wrapper">
              <div className="software-badge">
                <span>Custom Solutions</span>
              </div>

              <h2 className="software-title">
                Do You Need Custom Software Development for Your Business?
              </h2>

              <div className="software-descriptions">
                <p className="description-line">
                  <span className="highlight-text">
                    We develop special solutions for you
                  </span>
                </p>
                <p className="description-line">
                  <span className="highlight-text">
                    on different platforms with affordable budgets.
                  </span>
                </p>
              </div>

              <div className="software-buttons">
                <Link to={"/services"} className="primary-action-btn">
                  Read More
                  <MoveRight className="rigth-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <div className="team-part">
        <h2>Our Team Members</h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          className="team-carousel"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="team-card">
                <img src={member.img} className="team-img" alt={member.name} />
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-info">{member.info}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
