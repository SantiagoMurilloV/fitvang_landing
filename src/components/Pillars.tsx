"use client";

import { useEffect, useRef } from "react";
import { Crosshair, Activity, TrendingUp } from "lucide-react";
import Image from "next/image";

const pillars = [
  {
    icon: Crosshair,
    title: "FÚTBOL",
    subtitle: "Técnica & Táctica",
    description:
      "Entrenamiento técnico específico de posición. Mejora tu control de balón, visión de juego, regate y toma de decisiones bajo presión. Metodología orientada al futbolista completo.",
    tags: ["Control", "Regate", "Visión de juego", "Táctica"],
  },
  {
    icon: Activity,
    title: "ENTRENAMIENTO FUNCIONAL",
    subtitle: "Atletismo & Rendimiento",
    description:
      "Fuerza funcional diseñada para el campo. Ejercicios multiarticulares, explosividad, agilidad lateral y resistencia específica para el fútbol de alto rendimiento.",
    tags: ["Explosividad", "Agilidad", "Fuerza", "Resistencia"],
  },
  {
    icon: TrendingUp,
    title: "FITNESS",
    subtitle: "Transformación & Condición",
    description:
      "Acondicionamiento físico y transformación corporal. Programas de fitness adaptados a tus objetivos: pérdida de grasa, ganancia muscular o mejora del rendimiento.",
    tags: ["Cardio", "Músculo", "Transformación", "Nutrición"],
  },
];

export default function Pillars() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".pillar-card", {
          opacity: 0,
          y: 70,
          duration: 0.8,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pillars-section",
            start: "top 80%",
          },
        });

        gsap.from(".pillars-title", {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pillars-section",
            start: "top 85%",
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
      id="pilares"
      ref={sectionRef}
      className="pillars-section"
      style={{
        background: "#080808",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background logo — very low opacity decorative */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.025,
          userSelect: "none",
        }}
      >
        <Image
          src="/logo-nobg.png"
          alt=""
          width={700}
          height={700}
          style={{
            objectFit: "contain",
            filter: "brightness(0) invert(1)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Background accent glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-100px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div
          className="pillars-title"
          style={{ textAlign: "center", marginBottom: "72px" }}
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
            NUESTROS PILARES
          </p>
          <h2
            style={{
              fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
              fontSize: "clamp(52px, 8vw, 90px)",
              color: "#ffffff",
              letterSpacing: "3px",
              lineHeight: 0.95,
            }}
          >
            LO QUE HACEMOS
          </h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "#38BDF8",
              margin: "24px auto 0",
              borderRadius: "2px",
              boxShadow: "0 0 12px rgba(56,189,248,0.5)",
            }}
          />
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="pillar-card"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderTop: "2px solid #38BDF8",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: "12px",
                  padding: "40px 32px",
                  cursor: "default",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-12px) scale(1.01)";
                  el.style.boxShadow =
                    "0 0 0 1px rgba(56,189,248,0.25), 0 24px 70px rgba(0,0,0,0.6), 0 0 50px rgba(56,189,248,0.12)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0) scale(1)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div style={{ marginBottom: "20px" }}>
                  <IconComponent size={42} color="#38BDF8" />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                    fontSize: "34px",
                    letterSpacing: "2px",
                    color: "#ffffff",
                    marginBottom: "4px",
                    lineHeight: 1,
                  }}
                >
                  {pillar.title}
                </h3>

                {/* Subtitle */}
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: "12px",
                    letterSpacing: "3px",
                    color: "#38BDF8",
                    textTransform: "uppercase",
                    marginBottom: "20px",
                    fontWeight: 500,
                  }}
                >
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: "15px",
                    color: "#9ca3af",
                    lineHeight: 1.7,
                    marginBottom: "28px",
                  }}
                >
                  {pillar.description}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "1.5px",
                        color: "rgba(125,211,252,0.9)",
                        background: "rgba(56,189,248,0.08)",
                        border: "1px solid rgba(56,189,248,0.2)",
                        padding: "4px 12px",
                        borderRadius: "100px",
                        textTransform: "uppercase",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
