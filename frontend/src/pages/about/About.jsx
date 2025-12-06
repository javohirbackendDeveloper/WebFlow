import React from "react";
import {
  Target,
  Eye,
  Users,
  Trophy,
  CheckCircle,
  Award,
  TrendingUp,
  Heart,
  Globe,
  Clock,
  Shield,
  Zap,
  Send,
} from "lucide-react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  // Team members
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/team1.jpg",
      description: "15+ years in software development and business strategy",
      social: ["linkedin", "twitter"],
    },
    {
      name: "Sarah Williams",
      role: "CTO",
      image: "/team2.jpg",
      description: "Expert in cloud architecture and scalable systems",
      social: ["linkedin", "github"],
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "/team3.jpg",
      description: "Full-stack developer with focus on modern frameworks",
      social: ["linkedin", "github"],
    },
    {
      name: "Emma Davis",
      role: "UI/UX Designer",
      image: "/team4.jpg",
      description: "Creating beautiful and intuitive user experiences",
      social: ["linkedin", "dribbble"],
    },
  ];

  // Company values
  const companyValues = [
    {
      icon: <Target size={28} />,
      title: "Excellence",
      description: "We strive for excellence in every project we undertake",
    },
    {
      icon: <Shield size={28} />,
      title: "Integrity",
      description: "Honest and transparent in all our business dealings",
    },
    {
      icon: <Users size={28} />,
      title: "Collaboration",
      description: "Working together with clients to achieve shared goals",
    },
    {
      icon: <Zap size={28} />,
      title: "Innovation",
      description: "Constantly exploring new technologies and approaches",
    },
  ];

  // Milestones
  const milestones = [
    {
      year: "2022",
      title: "Company Founded",
      description: "Started with a small team of passionate developers",
    },
    {
      year: "2023",
      title: "First Major Project",
      description: "Delivered enterprise solution for retail client",
    },
    {
      year: "2024",
      title: "Team Expansion",
      description: "Grew to 25+ team members across departments",
    },
    {
      year: "2025",
      title: "International Clients",
      description: "Started serving clients across 5 countries",
    },
    {
      year: "2026",
      title: "Expected Industry Recognition",
      description:
        "We aim to receive the 'Best IT Service Provider' award for outstanding performance.",
    },
  ];

  // Statistics
  const statistics = [
    { icon: <Trophy />, number: "100+", label: "Projects Completed" },
    { icon: <Users />, number: "10+", label: "Team Members" },
    { icon: <Heart />, number: "98%", label: "Client Satisfaction" },
    { icon: <Globe />, number: "5+", label: "Countries Served" },
    { icon: <Clock />, number: "4", label: "Years Experience" },
    { icon: <Award />, number: "25+", label: "Awards Won" },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="container">
          <div className="about-hero-content">
            <div className="about-badge">
              <span>About Us</span>
            </div>
            <h1 className="about-hero-title">
              Building the Future <span className="highlight">Together</span>
            </h1>
            <p className="about-hero-description">
              We are a passionate team of innovators, developers, and
              strategists dedicated to transforming businesses through
              technology. Since 2018, we've been helping companies achieve their
              digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p className="story-paragraph">
                Founded in 2018, ERA began as a small startup with a big vision:
                to make cutting-edge technology accessible to businesses of all
                sizes. What started as a team of three passionate developers has
                now grown into a full-service digital solutions provider.
              </p>
              <p className="story-paragraph">
                Over the years, we've worked with startups, SMEs, and large
                enterprises, delivering custom software solutions that drive
                growth, efficiency, and innovation. Our journey has been marked
                by continuous learning, adaptation, and a commitment to
                excellence.
              </p>
              <div className="story-highlights">
                <div className="highlight-item">
                  <CheckCircle size={20} />
                  <span>Customer-Centric Approach</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle size={20} />
                  <span>Agile Development Methodology</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle size={20} />
                  <span>Continuous Innovation</span>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img src="/about-story.jpg" alt="Our Story" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-icon">
                <Target size={40} />
              </div>
              <h3 className="card-title">Our Mission</h3>
              <p className="card-description">
                To empower businesses with innovative technology solutions that
                drive growth, efficiency, and competitive advantage in the
                digital age.
              </p>
            </div>
            <div className="vision-card">
              <div className="card-icon">
                <Eye size={40} />
              </div>
              <h3 className="card-title">Our Vision</h3>
              <p className="card-description">
                To be the most trusted partner for digital transformation,
                recognized globally for excellence, innovation, and
                customer-centric approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="about-statistics">
        <div className="container">
          <div className="statistics-grid">
            {statistics.map((stat, index) => (
              <div className="stat-card" key={index}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="company-values">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide our work and define our culture
            </p>
          </div>

          <div className="values-grid">
            {companyValues.map((value, index) => (
              <div className="value-card" key={index}>
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The talented individuals behind our success
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="team-image-container">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="milestones-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              Key milestones in our company's growth and development
            </p>
          </div>

          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <p className="timeline-description">
                    {milestone.description}
                  </p>
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Work With Us?</h2>
            <p className="cta-description">
              Let's create something amazing together. Contact us to discuss
              your project.
            </p>
            <div className="cta-buttons">
              <Link to={"/contact"} className="primary-cta-btn">
                Contact Us
                <Send />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
