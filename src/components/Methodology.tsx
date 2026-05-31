"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "ANALIZA",
    description:
      "Evaluamos tu estado físico y técnico actual. Un diagnóstico completo para entender desde dónde partes y hacia dónde vas.",
  },
  {
    number: "02",
    title: "DISEÑA",
    description:
      "Creamos un plan personalizado para tus objetivos. Cada ejercicio, cada sesión, diseñada específicamente para ti.",
  },
  {
    number: "03",
    title: "EJECUTA",
    description:
      "Entrenamiento guiado con seguimiento continuo. Medimos tu progreso y ajustamos el plan para maximizar tus resultados.",
  },
];

export default function Methodology() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".method-step", {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.22,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".methodology-section",
            start: "top 78%",
          },
        });

        gsap.from(".method-header", {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".methodology-section",
            start: "top 85%",
          },
        });

        gsap.from(".method-connector", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".methodology-section",
            start: "top 70%",
          },
        });
      }, sectionRef);

      return () => ctx.revert();
    };

    const cleanup = initGSAP();
    return () => {
      cleanup.then((fn) => fn && fn());
    };
  }, []);

  return (
    <section
      id="metodologia"
      ref={sectionRef}
      className="methodology-section"
      style={{
        background: "#050505",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top border gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(56,189,248,0.5), transparent)",
        }}
      />

      {/* Background radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(56,189,248,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section Header */}
        <div
          className="method-header"
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "6px",
              color: "#38BDF8",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            FILOSOFÍA FITVANG
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
              fontSize: "clamp(52px, 8vw, 100px)",
              color: "#ffffff",
              letterSpacing: "3px",
              lineHeight: 0.92,
              marginBottom: "20px",
            }}
          >
            LA METODOLOGÍA
            <br />
            <span style={{ color: "#38BDF8" }}>FITVANG</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: "17px",
              color: "#9ca3af",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Donde la inteligencia del juego se encuentra con el rendimiento físico
          </p>
        </div>

        {/* Timeline Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "0",
            position: "relative",
          }}
        >
          {/* Connecting line */}
          <div
            className="method-connector"
            style={{
              position: "absolute",
              top: "52px",
              left: "calc(16.67% + 24px)",
              right: "calc(16.67% + 24px)",
              height: "1px",
              background:
                "linear-gradient(90deg, rgba(56,189,248,0.6), rgba(56,189,248,0.2), rgba(56,189,248,0.6))",
              zIndex: 0,
            }}
          />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="method-step"
              style={{
                textAlign: "center",
                padding: "0 32px 40px",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Step circle */}
              <div
                style={{
                  width: "104px",
                  height: "104px",
                  borderRadius: "50%",
                  background: "rgba(56,189,248,0.06)",
                  border: "2px solid #38BDF8",
                  boxShadow: "0 0 30px rgba(56,189,248,0.2), inset 0 0 20px rgba(56,189,248,0.05)",
                  margin: "0 auto 32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                    fontSize: "36px",
                    color: "#38BDF8",
                    letterSpacing: "2px",
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Step number accent */}
              {index < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "52px",
                    right: "0",
                    width: "50%",
                    height: "1px",
                    background: "rgba(56,189,248,0.15)",
                    zIndex: 0,
                  }}
                />
              )}

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                  fontSize: "42px",
                  letterSpacing: "4px",
                  color: "#ffffff",
                  marginBottom: "16px",
                  lineHeight: 1,
                }}
              >
                {step.title}
              </h3>

              {/* Divider */}
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  background: "#38BDF8",
                  margin: "0 auto 20px",
                  borderRadius: "2px",
                  boxShadow: "0 0 8px rgba(56,189,248,0.4)",
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: "15px",
                  color: "#9ca3af",
                  lineHeight: 1.7,
                  maxWidth: "280px",
                  margin: "0 auto",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(56,189,248,0.3), transparent)",
        }}
      />
    </section>
  );
}
