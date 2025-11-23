'use client'
import React, { useState } from "react";

const slides = [
  {
    image: "/solutions/solar-integration-1.jpg",
    caption: "Seamless Solar & Battery Integration",
  },
  {
    image: "/solutions/solar-integration-2.jpg",
    caption: "Smart Energy Management for Homes",
  },
  {
    image: "/solutions/solar-integration-3.jpg",
    caption: "Maximize Renewable Energy Usage",
  },
];

const SolarIntegrationHero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className="solar-hero-section"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "65vh",
        background: "linear-gradient(120deg, #fffbe3 60%, #e3f0ff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "0",
      }}
    >
      {/* Slide Image */}
      <img
        src={slides[current].image}
        alt={slides[current].caption}
        style={{
          width: "100%",
          height: "65vh",
          objectFit: "cover",
          opacity: 0.18,
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(120deg, rgba(255,251,227,0.92), rgba(227,240,255,0.92))",
          zIndex: 1,
        }}
      />
      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 900,
          margin: "0 auto",
          padding: "2.5rem 1.5rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3rem)",
            fontWeight: 800,
            color: "#e6b800",
            marginBottom: "1.2rem",
            lineHeight: 1.1,
            letterSpacing: "-1px",
          }}
        >
          Solar Integration Solutions
        </h1>
        <p
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.25rem)",
            color: "#333",
            marginBottom: "1.7rem",
            lineHeight: 1.7,
            fontWeight: 500,
          }}
        >
          Unlock the full potential of solar energy with our smart integration systems. Store, manage, and optimize your solar power for homes and businesses, ensuring efficiency and sustainability.
        </p>
        {/* Slide Caption */}
        <div
          style={{
            background: "#fff",
            color: "#e6b800",
            borderRadius: "1.5rem",
            boxShadow: "0 2px 8px rgba(230,184,0,0.08)",
            padding: "0.7rem 1.5rem",
            fontWeight: 600,
            fontSize: "1.1rem",
            marginBottom: "1.2rem",
            display: "inline-block",
            minWidth: 220,
            maxWidth: "90vw",
          }}
        >
          {slides[current].caption}
        </div>
        {/* Slide Controls */}
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", marginBottom: "1.5rem" }}>
          <button
            onClick={prevSlide}
            aria-label="Previous"
            style={{
              background: "#e6b800",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 40,
              height: 40,
              fontSize: "1.5rem",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            &#8592;
          </button>
          <span style={{ fontWeight: 600, color: "#e6b800" }}>
            {current + 1} / {slides.length}
          </span>
          <button
            onClick={nextSlide}
            aria-label="Next"
            style={{
              background: "#e6b800",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: 40,
              height: 40,
              fontSize: "1.5rem",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            &#8594;
          </button>
        </div>
        {/* Call to Action */}
        <a
          href="/Contact"
          style={{
            background: "#e6b800",
            color: "#fff",
            padding: "0.9rem 2.2rem",
            borderRadius: "2rem",
            fontWeight: 700,
            textDecoration: "none",
            fontSize: "1.1rem",
            boxShadow: "0 2px 8px rgba(230,184,0,0.08)",
            transition: "background 0.2s, transform 0.2s",
            display: "inline-block",
          }}
          onMouseOver={e => (e.currentTarget.style.background = "#b38f00")}
          onMouseOut={e => (e.currentTarget.style.background = "#e6b800")}
        >
          Get a Free Solar Consultation
        </a>
      </div>
      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 700px) {
          .solar-hero-section {
            min-height: 45vh !important;
          }
          .solar-hero-section h1 {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SolarIntegrationHero;