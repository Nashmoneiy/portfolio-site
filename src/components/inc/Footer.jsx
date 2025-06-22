import React from "react";

function Footer() {
  return (
    <div>
      <footer
        id="footer"
        style={{
          background: "linear-gradient(135deg, #6a0dad, #000000, #0000ff)",
          color: "#fff",
          paddingTop: "2rem",
          paddingBottom: "1rem",
        }}
      >
        <div className="container">
          <div className="row text-center text-md-start gy-3">
            {/* Brand */}
            <div className="col-12 col-md-4">
              <h5 className="fw-bold mb-2">Nashy</h5>
              <p style={{ fontSize: "0.9rem", color: "#ccc" }}>
                AI-powered solutions for prompt monitoring and brand visibility.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-12 col-md-4">
              <h6 className="fw-bold text-uppercase mb-2">Quick Links</h6>
              <ul className="list-unstyled mb-0">
                {["Home", "Pricing", "Features", "Contact"].map((text, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-white text-decoration-none d-block py-1"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-12 col-md-4">
              <h6 className="fw-bold text-uppercase mb-2">Contact</h6>
              <p className="mb-1">
                <i className="bi bi-envelope-fill me-2"></i> support@nashy.com
              </p>
              <p className="mb-2">
                <i className="bi bi-phone-fill me-2"></i> +234 800 000 0000
              </p>
              <div className="d-flex justify-content-center justify-content-md-start gap-3">
                <i className="bi bi-facebook text-white fs-5"></i>
                <i className="bi bi-twitter text-white fs-5"></i>
                <i className="bi bi-instagram text-white fs-5"></i>
                <i className="bi bi-linkedin text-white fs-5"></i>
              </div>
            </div>
          </div>

          <hr
            className="my-3"
            style={{ borderColor: "rgba(255,255,255,0.15)" }}
          />

          <div
            className="text-center"
            style={{ fontSize: "0.85rem", color: "#bbb" }}
          >
            © {new Date().getFullYear()} Nashy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
