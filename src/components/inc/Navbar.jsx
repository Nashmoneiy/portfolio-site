import React from "react";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          height: "100px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          zIndex: 1000,
          backgroundColor: "#fff",
        }}
      >
        <div className="container-fluid p-0 px-3">
          {/* Brand + Toggler in flex row */}
          <div className="d-flex w-100 justify-content-between align-items-center">
            {/* Brand */}
            <a
              href="#"
              className="navbar-brand m-0 p-0 d-flex align-items-center gap-3"
              style={{ fontWeight: "bold", lineHeight: "1.2" }}
            >
              {/* Icon Circle */}
              <div
                className="icon-circle"
                style={{
                  backgroundColor: "#e8d9ff",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                  color: "#6a0dad",
                }}
              >
                <i className="bi bi-bar-chart-fill"></i>
              </div>

              {/* Brand Text */}
              <div className="d-flex flex-column align-items-start">
                <div>
                  <span
                    style={{
                      fontSize: "2rem",
                      background: "linear-gradient(90deg, #6a0dad, #0000ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline-block",
                      fontWeight: "bold",
                    }}
                  >
                    Nashy
                  </span>
                  <span
                    style={{
                      color: "#222",
                      marginLeft: "5px",
                      fontSize: "1.7rem",
                      fontWeight: "600",
                    }}
                  >
                    dev
                  </span>
                </div>

                <div
                  className="mt-1"
                  style={{
                    color: "lightslategrey",
                    fontSize: "0.95rem",
                    fontWeight: "400",
                  }}
                >
                  Trust your brand with our services
                </div>
              </div>
            </a>

            {/* Toggler */}
            <button
              className="navbar-toggler shadow-none border-0 p-0 m-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{
                width: "24px",
                height: "24px",
                background: "transparent",
              }}
            >
              <span
                className="navbar-toggler-icon"
                style={{ transform: "scale(0.75)" }}
              ></span>
            </button>
          </div>

          {/* Collapsed menu */}
          <div
            className="collapse navbar-collapse w-100"
            id="navbarSupportedContent"
            style={{
              background: "linear-gradient(135deg, #000000, #0000ff)",
              borderRadius: "0 0 12px 12px",
            }}
          >
            <ul
              className="navbar-nav mb-2 mb-lg-0 float-lg-end ms-lg-auto d-lg-flex flex-column flex-lg-row align-items-center justify-content-center gap-2 gap-lg-0"
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              <li className="nav-item me-lg-4">
                <a className="nav-link" href="#home">
                  <span className="d-lg-none text-white">Home</span>
                  <span className="d-none d-lg-inline text-black">Home</span>
                </a>
              </li>
              <li className="nav-item me-lg-4">
                <a className="nav-link" href="#section2">
                  <span className="d-lg-none text-white">About</span>
                  <span className="d-none d-lg-inline text-black">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">
                  <span className="d-lg-none text-white">Contact</span>
                  <span className="d-none d-lg-inline text-black">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
