import React from "react";

function Footer() {
  return (
    <footer
      id="footer"
      style={{
        background: "linear-gradient(135deg, #6a0dad, #000000, #0000ff)",
        color: "#fff",
        padding: "1.5rem 1rem",
        fontSize: "0.9rem",
      }}
    >
      <div
        className="container d-flex flex-wrap justify-content-between align-items-start gap-4"
        style={{ rowGap: "1.5rem" }}
      >
        {/* Brand */}
        <div style={{ flex: "1 1 200px" }}>
          <h5 className="fw-bold mb-2">Nashy</h5>
          <p style={{ fontSize: "0.85rem", color: "#ccc" }}>
            We build websites and web-apps that boost your brand's visibility.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1 1 150px" }}>
          <h6 className="fw-bold text-uppercase mb-2">Quick Links</h6>
          <ul className="list-unstyled mb-0">
            {["Home", "Pricing", "Features", "Contact"].map((text, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-white text-decoration-none d-block py-1"
                  style={{ fontSize: "0.85rem" }}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div style={{ flex: "1 1 180px" }}>
          <h6 className="fw-bold text-uppercase mb-2">Contact</h6>
          <p className="mb-1" style={{ fontSize: "0.85rem" }}>
            <i className="bi bi-envelope me-2"></i>kelvinnash152@gmail.com
          </p>
          <p className="mb-2" style={{ fontSize: "0.85rem" }}>
            <i className="bi bi-phone me-2"></i>+234 8135817295
          </p>
          <div className="d-flex gap-3 mt-2">
            {["facebook", "twitter", "instagram", "linkedin"].map((icon, i) => (
              <i
                key={i}
                className={`bi bi-${icon}`}
                style={{ color: "#fff", fontSize: "1rem", cursor: "pointer" }}
              ></i>
            ))}
          </div>
        </div>
      </div>

      <hr
        className="my-3"
        style={{ borderColor: "rgba(255,255,255,0.1)", margin: "1rem 0" }}
      />

      <div
        className="text-center"
        style={{ fontSize: "0.75rem", color: "#bbb" }}
      >
        © {new Date().getFullYear()} Nashy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
