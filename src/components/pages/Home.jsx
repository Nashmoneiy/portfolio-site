import React from "react";
import TestimonialSlider from "../inc/TestimonialSlider";
import Footer from "../inc/Footer";

function Home() {
  return (
    <div id="home" style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
      <section id="home" className="section justify-content-center fade-down">
        <div className="row">
          <div className="col-md-12 text-center justify-content-center">
            {/* Icon */}
            <div className="d-flex justify-content-center py-5 mt-3">
              <div
                className="icon-circle"
                style={{
                  backgroundColor: "#e8d9ff",
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  color: "#6a0dad",
                }}
              >
                <i className="bi bi-bar-chart-fill"></i>
              </div>
            </div>

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
                width: "55%",
                color: "lightslategrey",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontFamily: "'Rubik', sans-serif",
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
                <span style={{ fontSize: "1.5rem" }}>★</span> Subscribe
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
                Services
              </h4>
            </div>
          </div>

          <div className="row gy-4">
            {/* Card 1 */}
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
                  🧠
                </div>
                <h5 className="fw-bold text-center">Create Campaigns</h5>
                <p
                  className="text-muted text-center"
                  style={{ fontSize: "0.9rem" }}
                >
                  Set up monitoring for your brand names and domains
                </p>
                <p>
                  Define specific prompts that will be used to test if AI models
                  mention your brand.
                </p>
                <a href="#" style={{ color: "purple", fontWeight: "bold" }}>
                  View pricing →
                </a>
              </div>
            </div>

            {/* Card 2 */}
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
                <h5 className="fw-bold text-center">Run Checks</h5>
                <p
                  className="text-muted text-center"
                  style={{ fontSize: "0.9rem" }}
                >
                  Test your prompts against AI models
                </p>
                <p>
                  We'll run your prompts through AI models and analyze if they
                  mention your brand.
                </p>
                <a href="#" style={{ color: "purple", fontWeight: "bold" }}>
                  View pricing →
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-md-6 col-lg-4 mx-md-auto">
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
                  📈
                </div>
                <h5 className="fw-bold text-center">Track Results</h5>
                <p
                  className="text-muted text-center"
                  style={{ fontSize: "0.9rem" }}
                >
                  Monitor brand mention rates over time
                </p>
                <p>
                  Analyze detailed statistics and trends to see how often your
                  brand appears.
                </p>
                <a href="#" style={{ color: "purple", fontWeight: "bold" }}>
                  View pricing →
                </a>
              </div>
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
                  style={{ fontSize: "0.9rem" }}
                >
                  $30/month
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
                    Unlimited brand campaigns
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
                    Daily automated AI response checks
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
                    Analytics and reporting
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

      <div style={{ overflowX: "hidden" }}>
        <TestimonialSlider />
      </div>
    </div>
  );
}

export default Home;
