import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  User,
} from "lucide-react";
import "./Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const service_id = "service_58qyubf";
    const template_id = "template_8cu8k7c";
    const public_key = "MOJBW8qA9L925X1Wd";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(service_id, template_id, templateParams, public_key).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setIsSubmitted(false), 5000);
      },
      (error) => {
        console.log("FAILED...", error);
        setIsSubmitting(false);
        alert("Xatolik yuz berdi. Iltimos qayta urinib ko‘ring.");
      }
    );
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Address",
      details: ["munisbekboltaboyev@gmail.com"],
      link: "mailto:munisbekboltaboyev@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Number",
      details: ["+998 91 912 07 50"],
      link: "tel:+998 91 912 07 50",
    },
    {
      icon: <MapPin size={24} />,
      title: "Office Location",
      details: ["47 Mustaqillik Street", "Urgench, CA 94107"],
      link: "https://www.google.com/maps?q=41.5560206,60.604716",
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 - 18:00", "Sat: 10:00 - 16:00"],
      link: null,
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="container">
          <div className="contact-hero-content">
            <div className="contact-badge">
              <span>Get in Touch</span>
            </div>
            <h1 className="contact-hero-title">
              Let's <span className="highlight">Build</span> Something Amazing
              Together
            </h1>
            <p className="contact-hero-description">
              Have a project in mind? We'd love to hear about it. Send us a
              message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info-side">
              <div className="contact-info-header">
                <h2 className="info-title">Contact Information</h2>
                <p className="info-subtitle">
                  Reach out to us through any of these channels
                </p>
              </div>

              <div className="contact-info-cards">
                {contactInfo.map((info, index) => (
                  <div className="info-card" key={index}>
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <h3 className="info-card-title">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p className="info-detail" key={idx}>
                          {detail}
                        </p>
                      ))}
                    </div>
                    {info.link && (
                      <a
                        href={info.link}
                        className="info-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* FAQ Section */}
              <div className="faq-section">
                <h3 className="faq-title">Frequently Asked Questions</h3>
                <div className="faq-items">
                  <div className="faq-item">
                    <div className="faq-question">
                      What is your typical response time?
                    </div>
                    <div className="faq-answer">
                      We respond to all inquiries within 24 hours during
                      business days.
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-question">
                      Do you offer free consultations?
                    </div>
                    <div className="faq-answer">
                      Yes, we provide a free 30-minute consultation for new
                      projects.
                    </div>
                  </div>
                  <div className="faq-item">
                    <div className="faq-question">
                      What industries do you work with?
                    </div>
                    <div className="faq-answer">
                      We work across all industries including healthcare,
                      finance, retail, and more.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-side">
              <div className="form-header">
                <div className="form-badge">
                  <MessageSquare size={20} />
                  <span>Send Message</span>
                </div>
                <h2 className="form-title">Get in Touch</h2>
                <p className="form-subtitle">
                  Fill out the form below and we'll get back to you shortly
                </p>
              </div>

              {isSubmitted ? (
                <div className="success-message">
                  <CheckCircle size={48} />
                  <h3 className="success-title">Message Sent Successfully!</h3>
                  <p className="success-text">
                    Thank you for contacting us. We'll get back to you within 24
                    hours.
                  </p>
                  <button
                    className="send-another-btn"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  {/* Name Input */}
                  <div className="form-group">
                    <label className="form-label">
                      <User size={18} />
                      <span>Full Name</span>
                    </label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Example"
                        className="form-input"
                        required
                      />
                      <div className="input-border"></div>
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="form-group">
                    <label className="form-label">
                      <Mail size={18} />
                      <span>Email Address</span>
                    </label>
                    <div className="input-wrapper">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@example.com"
                        className="form-input"
                        required
                      />
                      <div className="input-border"></div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="form-group">
                    <label className="form-label">
                      <MessageSquare size={18} />
                      <span>Your Message</span>
                    </label>
                    <div className="input-wrapper">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        className="form-textarea"
                        rows="6"
                        required
                      ></textarea>
                      <div className="input-border"></div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <iframe
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "12px" }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1208.677!2d60.604716!3d41.5560206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v00000000000"
          ></iframe>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Have an Urgent Project?</h2>
            <p className="cta-description">
              Call us directly for immediate assistance
            </p>
            <div className="cta-phone">
              <Phone size={24} />
              <a href="tel:+15551234567" className="phone-number">
                +998 91 912 07 50
              </a>
            </div>
            <p className="cta-note">Available 24/7 for emergency support</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
