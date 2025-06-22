import React, { useEffect, useState } from "react";

const testimonials = [
  {
    title: "Game-Changing Web Design",
    text: "Working with Nashy Dev was the best decision for our business. The site looks world-class, loads fast, and instantly elevated our brand online.",
    name: "Tunde A.",
    role: "Founder, ElitePrints",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    title: "Super Fast Delivery",
    text: "I needed a modern site for my startup and Nashy delivered in record time. Everything was clean, responsive, and functional. Highly recommend!",
    name: "Lilian Okoro",
    role: "CEO, DashCart Africa",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    title: "Professional & Reliable",
    text: "From consultation to launch, Nashy Dev was professional and always on time. The attention to detail was exactly what my business needed to stand out.",
    name: "Farouk Bello",
    role: "Creative Director, Studio Vibe",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(slider);
  }, []);

  return (
    <section
      style={{
        background: "#f8f8f8",
        padding: "4rem 1rem",
        overflow: "hidden",
        width: "100vw",
        margin: 0,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h3 className="mb-3 fw-bold">Client Testimonials</h3>
        <h5 className="mb-4 text-muted">Why Businesses Trust Nashy Dev</h5>

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            maxWidth: "100%",
            height: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              width: `${testimonials.length * 100}%`,
              transform: `translateX(-${
                currentIndex * (100 / testimonials.length)
              }%)`,
              transition: "transform 0.8s ease-in-out",
            }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                style={{
                  flex: `0 0 ${100 / testimonials.length}%`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "2rem 1rem",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    padding: "2rem",
                    width: "100%",
                    maxWidth: "600px",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "3px solid #6a0dad",
                      marginBottom: "1rem",
                    }}
                  />
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted mt-2" style={{ minHeight: "70px" }}>
                    “{item.text}”
                  </p>
                  <div
                    style={{
                      color: "#FFD700",
                      fontSize: "1.2rem",
                      marginBottom: "0.8rem",
                    }}
                  >
                    ★★★★★
                  </div>
                  <div className="fw-bold">{item.name}</div>
                  <div
                    className="text-secondary"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {item.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSlider;
