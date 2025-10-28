import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Analytics } from "@vercel/analytics/next";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [menuOpen , setMenuOpen] = useState(false)

  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <img className = "logo-img"src="/logoo.png"></img>
          <p>Ahadu<span>Designs</span></p></div>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#works" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" data-aos="fade-up">
        <div className="hero-content">
          <h1>Beautiful, Modern Websites for Businesses That Care About Design</h1>
          <p>
            We help hotels, hospitals, and small businesses build a strong online presence
            with elegant, responsive websites that convert visitors into customers.
          </p>
          <a href="#contact" className="btn-primary">Let's Work Together</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about" data-aos="fade-up">
        <h2>About Us</h2>
        <p>
          Ahadu Designs is a creative web design studio specializing in elegant,
          fast, and user-focused websites. We believe design is not just about looks — 
          it's about creating digital experiences that make an impact.
        </p>
      </section>

      {/* Works */}
      <section id="works" className="works">
        <h2 data-aos="fade-up">We Build Websites like these</h2>
        <div className="work-grid">
          <div className="work-card" data-aos="fade-up">
            <img
              src="hospitalport.png"
            />
            <div className="work-info">
              <h3>Hospital Website</h3>
              <p>
                We build websites like this one for hospitals — clean, professional, and easy to navigate.
              </p>
              <a
                href="https://www.ithielmedicalservice.com/"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                View Site
              </a>
            </div>
          </div>

          <div className="work-card" data-aos="fade-up" data-aos-delay="150">
            <img
              src="hotelport.png"
              alt="Hotel Website Preview"
            />
            <div className="work-info">
              <h3>Hotel Website</h3>
              <p>
                We design elegant websites like this for hotels — blending beauty and functionality.
              </p>
              <a
                href="https://www.goshtour.com.et/"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                View Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact" data-aos="fade-up">
        <h2>Let's Build Something Great</h2>
        <p>
          Want a modern website that truly represents your business? 
          Get in touch with us today.
        </p>
        <a href="mailto:ahadudesigns@gmail.com" className="btn-primary">Contact Us</a>
        <a href="tel:+251953309465" className="btn-primary">Call Us: +251953309465</a>
        <a target="_blank" href="mailto:andutok808@gmail.com" className="btn-primary">Email Us: andutok808@gmail.com</a>

      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Ahadu Designs. Crafted with passion.</p>
      </footer>
    </div>
  );
}

