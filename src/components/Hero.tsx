"use client";

import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const arrowRef = useRef<HTMLDivElement>(null);

  const scrollToPrograms = () => {
    const el = document.querySelector("#programas");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#000000",
      }}
    >
      {/* LAYER 1 — Perspective grid (vanishing point center) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.07 }}
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Horizontal lines converging to center vanishing point */}
          {[-300,-200,-120,-60,-20,20,60,120,200,300].map((offset, i) => (
            <line key={`h${i}`} x1="0" y1={450 + offset} x2="1440" y2={450 + offset * 0.1} stroke="#38BDF8" strokeWidth="0.6" />
          ))}
          {/* Vertical lines converging */}
          {[-600,-400,-260,-160,-80,-30,30,80,160,260,400,600].map((offset, i) => (
            <line key={`v${i}`} x1={720 + offset} y1="0" x2={720 + offset * 0.05} y2="900" stroke="#38BDF8" strokeWidth="0.6" />
          ))}
        </svg>
      </div>

      {/* LAYER 2 — Animated grid lines */}
      <div
        className="grid-lines"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          opacity: 0.5,
        }}
      />

      {/* LAYER 3 — Deep center glow (far/large) */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "1400px",
          height: "1000px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(56,189,248,0.06) 0%, rgba(56,189,248,0.02) 40%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* LAYER 4 — Tight center glow (close/bright) */}
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0.06) 45%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* LAYER 5 — Vignette edges (darkness closing in) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />

      {/* LAYER 6 — Animated diagonal stripes */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(56,189,248,0.015) 0px, rgba(56,189,248,0.015) 1px, transparent 1px, transparent 80px)",
          pointerEvents: "none",
          zIndex: 1,
          animation: "stripe-move 12s linear infinite",
        }}
      />

      {/* LAYER 7 — Concentric rings for depth */}
      {[300, 500, 720, 960].map((size, i) => (
        <div
          key={`ring${i}`}
          style={{
            position: "absolute",
            top: "38%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "50%",
            border: `1px solid rgba(56,189,248,${0.06 - i * 0.01})`,
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
      ))}

      {/* LAYER 8 — Floating particles */}
      {[
        { top: "12%", left: "7%",  size: 3, delay: "0s",   dur: "4s"   },
        { top: "22%", left: "91%", size: 2, delay: "1s",   dur: "5s"   },
        { top: "68%", left: "5%",  size: 2, delay: "2s",   dur: "3.5s" },
        { top: "78%", left: "87%", size: 3, delay: "0.5s", dur: "4.5s" },
        { top: "43%", left: "94%", size: 2, delay: "1.5s", dur: "6s"   },
        { top: "58%", left: "2%",  size: 2, delay: "3s",   dur: "5s"   },
        { top: "30%", left: "15%", size: 1, delay: "2.5s", dur: "7s"   },
        { top: "55%", left: "82%", size: 1, delay: "0.8s", dur: "5.5s" },
      ].map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: "#38BDF8",
            boxShadow: "0 0 10px rgba(56,189,248,0.9)",
            animation: `float ${p.dur} ease-in-out infinite`,
            animationDelay: p.delay,
            pointerEvents: "none",
            zIndex: 4,
          }}
        />
      ))}

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 20,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "960px",
          paddingTop: "80px",
        }}
      >
        {/* Floating logo with glow */}
        <div
          className="animate-logo-float"
          style={{
            marginBottom: "32px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src="/logo-nobg.png"
            alt="Fitvang Centro de Entrenamiento"
            width={547}
            height={456}
            style={{
              objectFit: "contain",
              width: "220px",
              height: "auto",
              filter:
                "brightness(0) invert(1) drop-shadow(0 0 30px rgba(56,189,248,0.7)) drop-shadow(0 0 60px rgba(56,189,248,0.4))",
            }}
            priority
          />
        </div>

        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "1px",
              background: "#38BDF8",
              opacity: 0.7,
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "6px",
              color: "#38BDF8",
              textTransform: "uppercase",
            }}
          >
            CENTRO DE ENTRENAMIENTO
          </p>
          <div
            style={{
              width: "28px",
              height: "1px",
              background: "#38BDF8",
              opacity: 0.7,
            }}
          />
        </div>

        {/* Main Headline — 3 lines */}
        <div
          style={{
            fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
            lineHeight: 0.92,
            letterSpacing: "3px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              fontSize: "clamp(80px, 15vw, 170px)",
              color: "#ffffff",
              display: "block",
              animation: "slide-in-left 0.8s ease forwards",
            }}
          >
            MENTE
          </div>
          <div
            style={{
              fontSize: "clamp(80px, 15vw, 170px)",
              color: "#ffffff",
              display: "block",
              animation: "slide-in-right 0.8s ease 0.1s both",
            }}
          >
            CUERPO
          </div>
          <div
            className="animate-pulse-glow"
            style={{
              fontSize: "clamp(72px, 13vw, 150px)",
              color: "#38BDF8",
              display: "block",
              textShadow:
                "0 0 60px rgba(56,189,248,0.5), 0 0 120px rgba(56,189,248,0.2)",
              lineHeight: 1,
              animation: "slide-in-left 0.8s ease 0.2s both, pulse-glow 2.5s ease-in-out infinite 1s",
            }}
          >
            RENDIMIENTO
          </div>
        </div>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: "clamp(14px, 2.2vw, 18px)",
            color: "#9ca3af",
            marginBottom: "48px",
            letterSpacing: "0.5px",
            lineHeight: 1.7,
            maxWidth: "580px",
            margin: "0 auto 48px",
          }}
        >
          Entrenamiento que une la inteligencia del juego con el poder físico.
          <br />
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
            Con Juan José Gil — Fundador &amp; Head Coach
          </span>
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "72px",
          }}
        >
          <a
            href="#programas"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#programas");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
              fontSize: "18px",
              letterSpacing: "3px",
              background: "#38BDF8",
              color: "#000000",
              padding: "18px 44px",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              display: "inline-block",
              fontWeight: 700,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "scale(1.05)";
              el.style.boxShadow = "0 0 50px rgba(56,189,248,0.6)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = "scale(1)";
              el.style.boxShadow = "none";
            }}
          >
            VER PROGRAMAS
          </a>

          <a
            href="#sobre-mi"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector("#sobre-mi");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
              fontSize: "18px",
              letterSpacing: "3px",
              background: "transparent",
              color: "#ffffff",
              padding: "18px 44px",
              borderRadius: "4px",
              textDecoration: "none",
              border: "1.5px solid rgba(255,255,255,0.25)",
              transition: "border-color 0.2s, color 0.2s, background 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#38BDF8";
              el.style.color = "#38BDF8";
              el.style.background = "rgba(56,189,248,0.06)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.25)";
              el.style.color = "#ffffff";
              el.style.background = "transparent";
            }}
          >
            CONOCER AL ENTRENADOR
          </a>
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0",
            background: "rgba(56,189,248,0.05)",
            border: "1px solid rgba(56,189,248,0.15)",
            borderRadius: "8px",
            padding: "16px 32px",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "500+", label: "Atletas" },
            { value: "5+", label: "Años" },
            { value: "Fútbol + Fitness", label: "Disciplinas" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0",
              }}
            >
              <div style={{ textAlign: "center", padding: "4px 28px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                    fontSize: "26px",
                    color: "#38BDF8",
                    letterSpacing: "2px",
                    display: "block",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: "11px",
                    color: "#9ca3af",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </span>
              </div>
              {i < 2 && (
                <div
                  style={{
                    width: "1px",
                    height: "36px",
                    background: "rgba(56,189,248,0.2)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={arrowRef}
        onClick={scrollToPrograms}
        className="animate-bounce-slow"
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: "10px",
            letterSpacing: "3px",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{ opacity: 0.5 }}
        >
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="#38BDF8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
