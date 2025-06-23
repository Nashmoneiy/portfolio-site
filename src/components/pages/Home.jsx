import React from "react";
import TestimonialSlider from "../inc/TestimonialSlider";
import Footer from "../inc/Footer";

import screenshotImg from "../images/Screenshot.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
  FaPhp,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
function Home() {
  return (
    <div
      id="home"
      style={{ margin: 0, padding: 0, overflowX: "hidden", width: "100%" }}
    >
      <section id="home" className="section justify-content-center fade-down">
        <div className="row">
          <div className="col-md-12 text-center justify-content-center">
            {/* Icon */}
            <div className="d-flex justify-content-center py-5 mt-3"></div>

            {/* Title */}
            <p
              style={{
                fontFamily: "'Orbitron', 'Audiowide', sans-serif",
                fontSize: "3.2rem",
                fontWeight: 700,
                textAlign: "center",
                animation: "glowFade 3s ease-in-out infinite alternate",
              }}
            >
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #6a0dad, #0000ff, #00ffff)",
                  WebkitBackgroundClip: "text",

                  display: "inline-block",
                }}
              >
                Nashy
              </span>{" "}
              <span
                style={{
                  fontStyle: "italic",
                  color: "#fff",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "8px",
                  background:
                    "linear-gradient(45deg, rgba(106,13,173,0.9), rgba(0,0,255,0.7))",
                  boxShadow: "0 0 15px rgba(106, 13, 173, 0.6)",
                  fontFamily: "'Monoton', cursive",
                  letterSpacing: "1px",
                }}
              >
                Dev
              </span>
            </p>

            {/* Description */}
            <p
              className="p-section2 mx-auto"
              style={{
                fontSize: "1.2rem",
                width: "90%",
                color: "lightslategrey",
                fontFamily: "'Rubik', sans-serif",
                textAlign: "center",
                lineHeight: "1.6",
              }}
            >
              At Nashy Dev, we craft visually stunning, high-performance
              websites that help businesses thrive online. From sleek portfolios
              to full-scale web apps, we bring your digital vision to life with
              precision and flair.
            </p>

            {/* Subscribe Button */}
            <div className="d-flex justify-content-center my-4">
              <button
                className="btn text-white d-flex align-items-center justify-content-center gap-2"
                style={{
                  width: "15%",
                  minWidth: "140px",
                  height: "7vh",
                  background: "linear-gradient(90deg, #6a0dad, #0000ff)",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  borderRadius: "8px",
                  fontFamily: "'Poppins', sans-serif",
                  transition: "all 0.3s ease",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>★</span> Reach us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="section2"
        className="section bg-c-light py-5 fade-down"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <div className="row text-center mb-4">
            <div className="col-12">
              <h4 className="fw-bold" style={{ color: "black" }}>
                What I Can Do For You
              </h4>
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-5">
            {/* Card 1 */}
            <div
              style={{
                flex: "1 1 300px",
                maxWidth: "360px",
                border: "1px solid lightslategrey",
                borderRadius: "12px",
                padding: "2rem",
                background: "#fff",
              }}
            >
              <div
                style={{
                  backgroundColor: "#f3e8ff",
                  borderRadius: "50%",
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontSize: "1.5rem",
                  color: "#6a0dad",
                }}
              >
                💻
              </div>
              <h5 className="fw-bold text-center">Custom Website Design</h5>
              <p
                className="text-muted text-center"
                style={{ fontSize: "0.9rem" }}
              >
                Stand out online with a fast, mobile-friendly website
              </p>
              <p>
                I create clean, modern websites tailored to your brand. Designed
                to convert visitors into paying customers.
              </p>
              <a
                href="#contact"
                style={{ color: "purple", fontWeight: "bold" }}
              >
                Get started →
              </a>
            </div>

            {/* Card 2 */}
            <div
              style={{
                flex: "1 1 300px",
                maxWidth: "360px",
                border: "1px solid lightslategrey",
                borderRadius: "12px",
                padding: "2rem",
                background: "#fff",
              }}
            >
              <div
                style={{
                  backgroundColor: "#f3e8ff",
                  borderRadius: "50%",
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontSize: "1.5rem",
                  color: "#6a0dad",
                }}
              >
                🛒
              </div>
              <h5 className="fw-bold text-center">E-Commerce Solutions</h5>
              <p
                className="text-muted text-center"
                style={{ fontSize: "0.9rem" }}
              >
                Launch your online store with confidence
              </p>
              <p>
                From product setup to payment integration, I’ll build a powerful
                online store that runs smoothly on all devices.
              </p>
              <a
                href="#contact"
                style={{ color: "purple", fontWeight: "bold" }}
              >
                Build your store →
              </a>
            </div>

            {/* Card 3 */}
            <div
              style={{
                flex: "1 1 300px",
                maxWidth: "360px",
                border: "1px solid lightslategrey",
                borderRadius: "12px",
                padding: "2rem",
                background: "#fff",
              }}
            >
              <div
                style={{
                  backgroundColor: "#f3e8ff",
                  borderRadius: "50%",
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontSize: "1.5rem",
                  color: "#6a0dad",
                }}
              >
                ⚡
              </div>
              <h5 className="fw-bold text-center">Speed & SEO Optimization</h5>
              <p
                className="text-muted text-center"
                style={{ fontSize: "0.9rem" }}
              >
                Get found faster. Load faster. Convert better.
              </p>
              <p>
                I optimize every website for speed, mobile usability, and search
                engines — so your business performs at its best.
              </p>
              <a
                href="#contact"
                style={{ color: "purple", fontWeight: "bold" }}
              >
                Optimize now →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="section3"
        className="section bg-c-light py-5 fade-down"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <div className="row text-center mb-4">
            <div className="col-12">
              <h4 className="fw-bold" style={{ color: "black" }}>
                Our pricing
              </h4>
              <h5>Get all the premium features for one price</h5>
            </div>
          </div>

          {/* Centered card */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <div
                style={{
                  border: "1px solid lightslategrey",
                  borderRadius: "12px",
                  padding: "2rem",
                  background: "#fff",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#f3e8ff",
                    borderRadius: "50%",
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem",
                    fontSize: "1.5rem",
                    color: "#6a0dad",
                  }}
                >
                  📊
                </div>
                <h5 className="fw-bold text-center">Premium plan</h5>
                <p
                  className="text-muted text-center"
                  style={{ fontSize: "1.8rem" }}
                >
                  Starting at $60
                </p>

                <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                  <li>
                    <span
                      style={{
                        color: "green",
                        fontSize: "1.2rem",
                        marginRight: "0.5rem",
                      }}
                    >
                      ✔️
                    </span>
                    Unlimited website revisions
                  </li>
                  <li>
                    <span
                      style={{
                        color: "green",
                        fontSize: "1.2rem",
                        marginRight: "0.5rem",
                      }}
                    >
                      ✔️
                    </span>
                    Daily website checks
                  </li>
                  <li>
                    <span
                      style={{
                        color: "green",
                        fontSize: "1.2rem",
                        marginRight: "0.5rem",
                      }}
                    >
                      ✔️
                    </span>
                    Mobile-first responsive design on all devices
                  </li>
                </ul>

                <div className="text-center mt-3">
                  <button
                    className="btn"
                    style={{
                      backgroundColor: "#6a0dad", // solid purple background
                      color: "#fff", // white text
                      fontWeight: "bold",
                      border: "none",
                      padding: "0.6rem 1.2rem",
                      borderRadius: "8px",
                    }}
                  >
                    View pricing →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="">
        <TestimonialSlider />
      </section>

      <section
        id="portfolio"
        className="py-5 fade-down"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="container">
          <div className="row text-center mb-4">
            <div className="col-12">
              <h4 className="fw-bold" style={{ color: "black" }}>
                My Projects
              </h4>
              <p>
                Take a look at some of the real-world projects I've delivered.
              </p>
            </div>
          </div>

          <div className="row justify-content-center gap-4">
            <div className="col-md-4">
              <div className="card shadow-sm">
                <img
                  src={screenshotImg}
                  alt="Project 1"
                  className="img-fluid"
                />
                <div className="card-body">
                  <h5 className="card-title">E-commerce Store</h5>
                  <p className="card-text">
                    Fully responsive online store with payment gateway
                    integration.
                  </p>
                  <a
                    href="https://ecommerce-react-lcg7-oelrxrl4y-nashville.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary btn-sm text-white"
                    style={{
                      background: "linear-gradient(90deg, #6a0dad, #0000ff)",
                    }}
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
            {/* Repeat for more projects */}
          </div>
        </div>
      </section>

      <section
        id="tech-stack"
        className="py-5 fade-down"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container text-center">
          <h4 className="fw-bold mb-4" style={{ color: "black" }}>
            My Tech Stack
          </h4>
          <div className="row justify-content-center">
            {[
              { icon: <FaHtml5 color="#e34c26" size={40} />, name: "HTML5" },
              { icon: <FaCss3Alt color="#1572B6" size={40} />, name: "CSS3" },
              { icon: <FaJs color="#f7df1e" size={40} />, name: "JavaScript" },
              { icon: <FaReact color="#61DBFB" size={40} />, name: "React" },
              {
                icon: <FaLaravel color="#ff2d20" size={40} />,
                name: "Laravel",
              },
              { icon: <FaPhp color="#777bb4" size={40} />, name: "PHP" },

              {
                icon: <FaBootstrap color="#7952b3" size={40} />,
                name: "Bootstrap",
              },

              { icon: <FaGitAlt color="#f1502f" size={40} />, name: "Git" },
            ].map((tech, index) => (
              <div className="col-4 col-sm-3 col-md-2 mb-4" key={index}>
                <div className="d-flex flex-column align-items-center">
                  {tech.icon}
                  <span
                    className="mt-2"
                    style={{ fontSize: "0.9rem", fontWeight: "500" }}
                  >
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
