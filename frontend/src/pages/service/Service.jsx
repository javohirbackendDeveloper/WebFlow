import React from "react";
import {
  Code2,
  Smartphone,
  Cloud,
  Shield,
  Database,
  BarChart3,
  Users,
  Server,
  Zap,
  Globe,
  Settings,
  PenTool,
  Send,
} from "lucide-react";
import "./Service.css";
import { Link } from "react-router-dom";

function Service() {
  const mainServices = [
    {
      icon: <Code2 size={40} />,
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to meet your specific business requirements and objectives.",
      features: [
        "Web Applications",
        "Desktop Solutions",
        "API Development",
        "System Integration",
      ],
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android with excellent user experience.",
      features: [
        "iOS Development",
        "Android Apps",
        "React Native",
        "Flutter Development",
      ],
    },
    {
      icon: <Cloud size={40} />,
      title: "Cloud Solutions",
      description:
        "Cloud migration, deployment, and management services for scalable and secure infrastructure.",
      features: ["AWS", "Azure", "Google Cloud", "Cloud Migration"],
    },
    {
      icon: <Shield size={40} />,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets and ensure data privacy.",
      features: [
        "Security Audit",
        "Penetration Testing",
        "Data Encryption",
        "Compliance",
      ],
    },
    {
      icon: <Database size={40} />,
      title: "Database Management",
      description:
        "Design, optimization, and management of databases for maximum performance and reliability.",
      features: [
        "SQL Databases",
        "NoSQL Solutions",
        "Data Warehousing",
        "Database Migration",
      ],
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Business Intelligence",
      description:
        "Data analytics and visualization tools to drive informed business decisions.",
      features: [
        "Data Analytics",
        "Dashboard Development",
        "Reporting Systems",
        "Predictive Analysis",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: <Users size={28} />,
      title: "IT Consulting",
      description:
        "Strategic IT consulting to align technology with your business goals.",
    },
    {
      icon: <Server size={28} />,
      title: "DevOps Services",
      description:
        "CI/CD pipeline setup, containerization, and infrastructure automation.",
    },
    {
      icon: <Zap size={28} />,
      title: "Performance Optimization",
      description:
        "Enhance application speed, scalability, and overall performance.",
    },
    {
      icon: <Globe size={28} />,
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications using latest technologies.",
    },
    {
      icon: <Settings size={28} />,
      title: "Maintenance & Support",
      description:
        "Ongoing technical support, updates, and maintenance services.",
    },
    {
      icon: <PenTool size={28} />,
      title: "UI/UX Design",
      description:
        "User-centered design solutions for intuitive and engaging experiences.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We analyze your requirements and define project scope",
    },
    {
      number: "02",
      title: "Planning & Design",
      description:
        "Creating detailed plans and designing the solution architecture",
    },
    {
      number: "03",
      title: "Development",
      description: "Agile development with regular updates and iterations",
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Comprehensive testing to ensure quality and reliability",
    },
    {
      number: "05",
      title: "Deployment",
      description: "Smooth deployment and integration into your environment",
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description:
        "Ongoing support and regular updates for optimal performance",
    },
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-bg"></div>
        <div className="container">
          <div className="services-hero-content">
            <div className="services-badge">
              <span>Our Services</span>
            </div>
            <h1 className="services-hero-title">
              Transforming Ideas into{" "}
              <span className="highlight">Digital Solutions</span>
            </h1>
            <p className="services-hero-description">
              We provide comprehensive IT services that help businesses
              innovate, grow, and achieve digital transformation goals with
              cutting-edge technology.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="stat-number">100+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="main-services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle">
              We offer a wide range of IT services tailored to meet your
              business needs and drive digital transformation.
            </p>
          </div>

          <div className="main-services-grid">
            {mainServices.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Additional Services</h2>
            <p className="section-subtitle">
              Comprehensive IT solutions to support your business at every stage
            </p>
          </div>

          <div className="additional-services-grid">
            {additionalServices.map((service, index) => (
              <div className="additional-service-card" key={index}>
                <div className="additional-service-icon">{service.icon}</div>
                <h4 className="additional-service-title">{service.title}</h4>
                <p className="additional-service-description">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Development Process</h2>
            <p className="section-subtitle">
              We follow a structured, transparent process to ensure project
              success
            </p>
          </div>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-description">
              Let's discuss how our services can help your business achieve its
              goals
            </p>
            <div className="cta-buttons">
              <Link to={"/contact"} className="primary-cta-btn">
                Get Free Consultation
                <Send />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
