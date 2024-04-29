import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import vidoeBG from './Assets/videobg.mp4';
import Services from './Services';
import About from './About';
import Contact from './Contact';

function HomePage() {
    const [activeSection, setActiveSection] = useState('');

    // Function to handle smooth scrolling to a section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Set default active section to 'hero-section' on component mount
    useEffect(() => {
        setActiveSection('hero-section');

        // Function to update active section based on scroll position
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition < 0.5 * window.innerHeight) {
                setActiveSection('hero-section');
            } else if (scrollPosition < 1.5 * window.innerHeight) {
                setActiveSection('services-section');
            } else if (scrollPosition < 3.5 * window.innerHeight) {
                setActiveSection('about-section');
            } else {
                setActiveSection('contact-section');
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div>
      <div className="HomePage ">
        <nav className="navbar navbar-expand-lg bg-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Aurassance.com
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Aurassance.com
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li
                    className={`nav-item ${
                      activeSection === "hero-section" ? "active" : ""
                    }`}
                  >
                    <button
                      className="nav-link"
                      onClick={() => scrollToSection("hero-section")}
                    >
                      Home
                    </button>
                  </li>
                  <li
                    className={`nav-item ${
                      activeSection === "services-section" ? "active" : ""
                    }`}
                  >
                    <button
                      className="nav-link"
                      onClick={() => scrollToSection("services-section")}
                    >
                      Services
                    </button>
                  </li>
                  <li
                    className={`nav-item ${
                      activeSection === "about-section" ? "active" : ""
                    }`}
                  >
                    <button
                      className="nav-link"
                      onClick={() => scrollToSection("about-section")}
                    >
                      About
                    </button>
                  </li>
                  <li
                    className={`nav-item ${
                      activeSection === "contact-section" ? "active" : ""
                    }`}
                  >
                    <button
                      className="nav-link"
                      onClick={() => scrollToSection("contact-section")}
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div id="hero-section" className="hero-section">
          <video src={vidoeBG} autoPlay loop muted />
          <div className="centered-text">
            <h1>
              Unlock Your Brands Potential: Elevate With Custom Websites and
              Targeted Ads.
            </h1>
            <button onClick={() => scrollToSection("services-section")}>
              Get started
            </button>
          </div>
        </div>
      </div>

      <div id="services-section" className="services-section">
        <Services />
      </div>

      <div id="about-section" className="about-section ">
        <About />
      </div>

      <div id="contact-section" className="contact-section ">
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
