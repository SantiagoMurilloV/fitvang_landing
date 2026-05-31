"use client";

import { useEffect, useRef } from "react";
import { Target, Zap, BarChart2, Users, Video, TrendingUp } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Entrenamiento de Regate",
    description: "Sesión de técnica individual — control y regate en espacios reducidos",
    label: "TÉCNICA",
    gradient: "linear-gradient(135deg, #0a0f1a 0%, #0d1a2e 50%, #0a0a0a 100%)",
    icon: Target,
    size: "large",
  },
  {
    id: 2,
    title: "Circuito Funcional",
    description: "Series de explosividad y fuerza funcional para atletas",
    label: "FUNCIONAL",
    gradient: "linear-gradient(135deg, #0a0f1a 0%, #0a1522 50%, #0a0a0a 100%)",
    icon: Zap,
    size: "small",
  },
  {
    id: 3,
    title: "Trabajo de Portería",
    description: "Análisis táctico y posicionamiento en campo de 11",
    label: "TÁCTICA",
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #0f1020 50%, #0a0a0a 100%)",
    icon: BarChart2,
    size: "small",
  },
  {
    id: 4,
    title: "Sesión Grupal",
    description: "Grupo reducido en entrenamiento de alta intensidad",
    label: "GRUPAL",
    gradient: "linear-gradient(135deg, #0a0f1a 0%, #0a1228 50%, #0a0a0a 100%)",
    icon: Users,
    size: "small",
  },
  {
    id: 5,
    title: "Análisis de Video",
    description: "Revisión técnica con feedback en tiempo real",
    label: "ANÁLISIS",
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #0d1530 50%, #0a0a1a 100%)",
    icon: Video,
    size: "small",
  },
  {
    id: 6,
    title: "Transformación Física",
    description: "Resultados de un programa de 12 semanas de fitness",
    label: "FITNESS",
    gradient: "linear-gradient(135deg, #0a0f1a 0%, #101d35 50%, #0a0a0a 100%)",
    icon: TrendingUp,
    size: "large",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".gallery-item", {
          opacity: 0,
          scale: 0.92,
          y: 30,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-section",
            start: "top 78%",
          },
        });
        gsap.from(".gallery-header", {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery-section",
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
      ref={sectionRef}
      className="gallery-section"
      style={{
        background: "#111111",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top border */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(56,189,248,0.2), transparent)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div
          className="gallery-header"
          style={{ textAlign: "center", marginBottom: "64px" }}
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
            GALERÍA
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
            EN ACCIÓN
          </h2>
          <div
            style={{
              width: "60px",
              height: "3px",
              background: "#38BDF8",
              margin: "24px auto 0",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Masonry-style grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "220px",
            gap: "16px",
          }}
          className="gallery-grid"
        >
          {galleryItems.map((item, index) => {
            const isLarge = item.size === "large";
            const gridColumn =
              index === 0
                ? "1 / 3"
                : index === 5
                ? "2 / 4"
                : "auto";
            const gridRow = isLarge ? "span 2" : "span 1";
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                className="gallery-item"
                style={{
                  gridColumn,
                  gridRow,
                  background: item.gradient,
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "24px",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "scale(1.02) rotate(0.3deg)";
                  el.style.boxShadow =
                    "0 0 40px rgba(56,189,248,0.2), 0 20px 60px rgba(0,0,0,0.6)";
                  const overlay = el.querySelector(
                    ".gallery-overlay"
                  ) as HTMLElement;
                  if (overlay) overlay.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "scale(1) rotate(0deg)";
                  el.style.boxShadow = "none";
                  const overlay = el.querySelector(
                    ".gallery-overlay"
                  ) as HTMLElement;
                  if (overlay) overlay.style.opacity = "0";
                }}
              >
                {/* Dot pattern */}
                <div
                  className="dot-grid"
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.5,
                    pointerEvents: "none",
                  }}
                />

                {/* Center icon */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -60%)",
                    opacity: 0.12,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  <IconComponent size={isLarge ? 80 : 52} color="#38BDF8" />
                </div>

                {/* Hover overlay */}
                <div
                  className="gallery-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(56,189,248,0.04)",
                    border: "1px solid rgba(56,189,248,0.2)",
                    borderRadius: "12px",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none",
                  }}
                />

                {/* Blue corner accent */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    background: "rgba(56,189,248,0.1)",
                    border: "1px solid rgba(56,189,248,0.3)",
                    borderRadius: "6px",
                    padding: "4px 12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      color: "#38BDF8",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.label}
                  </span>
                </div>

                {/* Content */}
                <div style={{ position: "relative", zIndex: 2 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                      fontSize: isLarge ? "28px" : "22px",
                      color: "#ffffff",
                      letterSpacing: "1.5px",
                      marginBottom: "6px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: "13px",
                      color: "#9ca3af",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-auto-rows: 180px !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: 180px !important;
          }
        }
      `}</style>
    </section>
  );
}
