import React, { useEffect, useRef, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navbarRef = useRef();

  // Handle link click
  const handleNavClick = () => {
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  // Handle outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const collapse = document.getElementById("navbarSupportedContent");
      if (
        collapse &&
        collapse.classList.contains("show") &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        collapse.classList.remove("show");
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div ref={navbarRef}>
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
          <div className="d-flex w-100 justify-content-between align-items-center">
            <a
              href="#"
              className="navbar-brand m-0 p-0 d-flex align-items-center gap-3"
              style={{
                fontSize: "1.05rem",
                fontWeight: 500,
                fontFamily: "'Poppins', 'Rubik', sans-serif",
                letterSpacing: "0.5px",
                transition: "color 0.3s ease",
              }}
            >
              {/* Logo Icon - transparent background */}
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.8rem",
                  color: "#6a0dad",
                }}
              >
                <i className="bi bi-lightning-fill"></i>
              </div>

              {/* Brand Text */}
              <div className="d-flex flex-column align-items-start text-truncate">
                <div>
                  <span
                    style={{
                      fontSize: "2rem",
                      background: "linear-gradient(90deg, #6a0dad, #0000ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "800",
                      fontFamily: "'Orbitron', sans-serif",
                    }}
                  >
                    Nashy
                  </span>
                  <span
                    style={{
                      marginLeft: "5px",
                      fontSize: "1.4rem",
                      fontWeight: "800",
                      color: "#6a0dad",
                      fontFamily: "'Orbitron', sans-serif",
                    }}
                  >
                    dev
                  </span>
                </div>

                <div
                  className="mt-1"
                  style={{
                    color: "lightslategrey",
                    fontSize: "0.9rem",
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
              onClick={() => {
                const collapse = document.getElementById(
                  "navbarSupportedContent"
                );
                if (collapse) {
                  collapse.classList.toggle("show");
                  setIsOpen(!isOpen);
                }
              }}
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
            id="navbarSupportedContent"
            className={`w-100 ${
              isOpen ? "d-flex" : "d-none"
            } d-lg-flex flex-column flex-lg-row`}
            style={{
              background: isOpen
                ? "linear-gradient(135deg, blue, purple)"
                : "transparent",
              borderRadius: isOpen ? "0 0 12px 12px" : "0",
              transition: "all 0.3s ease",
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
                <a className="nav-link" href="#home" onClick={handleNavClick}>
                  <span className="d-lg-none text-white">Home</span>
                  <span className="d-none d-lg-inline text-black">Home</span>
                </a>
              </li>
              <li className="nav-item me-lg-4">
                <a
                  className="nav-link"
                  href="#section2"
                  onClick={handleNavClick}
                >
                  <span className="d-lg-none text-white">About</span>
                  <span className="d-none d-lg-inline text-black">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer" onClick={handleNavClick}>
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
