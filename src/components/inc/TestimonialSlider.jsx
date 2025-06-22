import React, { useEffect, useState } from "react";

const testimonials = [
  {
    title: "Exceptional Quality",
    text: "Nashy Dev transformed our outdated website into a sleek, modern platform that brought in more customers within weeks. Truly outstanding work!",
    name: "Sarah Johnson",
    role: "Marketing Director, BrightTech",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    title: "Highly Professional",
    text: "From design to deployment, every step was seamless. Nashy delivered a responsive, high-performing website that exceeded our expectations.",
    name: "Michael Lee",
    role: "CEO, NovaWare Solutions",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    title: "Fast & Reliable",
    text: "Our business site was up and running faster than expected. It looks amazing and works perfectly across all devices. Highly recommend Nashy Dev!",
    name: "Amaka O.",
    role: "Founder, GoLocal Market",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section
      className="justify-content-center"
      style={{
        background: "#f0f0f0",
        padding: "4rem 0",
        marginBottom: "4rem",
      }}
    >
      <div className="container text-center">
        <h3 className="mb-3 fw-bold">What Founders Say</h3>
        <h5 className="mb-4 text-muted">Real impact from real users</h5>

        <div
          style={{
            overflow: "hidden",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              width: `${testimonials.length * 100}%`,
              transform: `translateX(-${
                currentIndex * (100 / testimonials.length)
              }%)`,
              transition: "transform 1s ease-in-out",
            }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                style={{
                  flex: `0 0 ${100 / testimonials.length}%`,
                  padding: "1.5rem 1rem", // ✅ add padding instead of margin
                  background: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  minHeight: "320px",
                }}
              >
                <div style={{ marginBottom: "1rem" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "3px solid #6a0dad",
                    }}
                  />
                </div>

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
                <div className="text-secondary" style={{ fontSize: "0.9rem" }}>
                  {item.role}
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
