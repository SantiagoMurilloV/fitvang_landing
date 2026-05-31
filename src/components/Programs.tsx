"use client";

import { useEffect, useRef } from "react";
import { User, Users, Monitor, Check } from "lucide-react";

const programs = [
  {
    id: 1,
    icon: User,
    label: "PROGRAMA 01",
    title: "ENTRENAMIENTO INDIVIDUAL",
    description:
      "Sesiones uno a uno diseñadas exclusivamente para ti. Análisis completo de tu perfil deportivo, corrección técnica personalizada y un plan de progresión adaptado a tus metas.",
    features: [
      "Análisis técnico personalizado",
      "Plan de entrenamiento a medida",
      "Seguimiento semanal de progreso",
      "Corrección postural y técnica",
    ],
    highlight: true,
    badge: "MÁS POPULAR",
  },
  {
    id: 2,
    icon: Users,
    label: "PROGRAMA 02",
    title: "ENTRENAMIENTO GRUPAL",
    description:
      "Sesiones de entrenamiento en grupos reducidos (máx. 8 personas). Ambiente competitivo, dinámica de equipo y motivación constante. Ideal para jugadores que quieren mejorar en comunidad.",
    features: [
      "Grupos reducidos (máx. 8)",
      "Competición y trabajo en equipo",
      "Ejercicios específicos de posición",
      "Sesiones de fútbol integradas",
    ],
    highlight: false,
    badge: null,
  },
  {
    id: 3,
    icon: Monitor,
    label: "PROGRAMA 03",
    title: "PLAN ONLINE",
    description:
      "Coaching remoto de alto nivel desde cualquier lugar. Recibe tu plan personalizado, videos explicativos, análisis de tus grabaciones y comunicación directa con el entrenador cada semana.",
    features: [
      "Plan semanal personalizado",
      "Análisis de video de tu juego",
      "Chat directo con el entrenador",
      "Acceso a librería de ejercicios",
    ],
    highlight: false,
    badge: null,
  },
];

export default function Programs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".program-card", {
          opacity: 0,
          y: 80,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".programs-section",
            start: "top 78%",
          },
        });
        gsap.from(".programs-header", {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".programs-section",
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
      id="programas"
      ref={sectionRef}
      className="programs-section"
      style={{
        background: "#111111",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle top border accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(56,189,248,0.3), transparent)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div
          className="programs-header"
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
            ELIGE TU CAMINO
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
            PROGRAMAS
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
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: "16px",
              color: "#9ca3af",
              marginTop: "24px",
              maxWidth: "560px",
              margin: "24px auto 0",
              lineHeight: 1.7,
            }}
          >
            Cada atleta es diferente. Por eso Fitvang ofrece tres modalidades
            de entrenamiento adaptadas a tu nivel, disponibilidad y objetivos.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <div
                key={program.id}
                className="program-card"
                style={{
                  background: program.highlight
                    ? "rgba(56,189,248,0.04)"
                    : "#1a1a1a",
                  border: program.highlight
                    ? "1px solid rgba(56,189,248,0.25)"
                    : "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  padding: "40px 32px",
                  position: "relative",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-8px)";
                  el.style.boxShadow = "0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(56,189,248,0.1)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Badge */}
                {program.badge && (
                  <div
                    className="animate-shimmer"
                    style={{
                      position: "absolute",
                      top: "-14px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      color: "#ffffff",
                      fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                      fontSize: "13px",
                      letterSpacing: "2px",
                      padding: "4px 20px",
                      borderRadius: "100px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {program.badge}
                  </div>
                )}

                {/* Program icon */}
                <div style={{ marginBottom: "16px" }}>
                  <IconComponent size={32} color="#38BDF8" />
                </div>

                {/* Label */}
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "4px",
                    color: "#38BDF8",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  {program.label}
                </p>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                    fontSize: "30px",
                    letterSpacing: "1.5px",
                    color: "#ffffff",
                    marginBottom: "20px",
                    lineHeight: 1.1,
                  }}
                >
                  {program.title}
                </h3>

                {/* Divider */}
                <div
                  style={{
                    width: "40px",
                    height: "2px",
                    background: program.highlight
                      ? "#38BDF8"
                      : "rgba(255,255,255,0.15)",
                    marginBottom: "20px",
                    borderRadius: "2px",
                  }}
                />

                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: "14px",
                    color: "#9ca3af",
                    lineHeight: 1.7,
                    marginBottom: "28px",
                  }}
                >
                  {program.description}
                </p>

                {/* Features */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0" }}>
                  {program.features.map((feat) => (
                    <li
                      key={feat}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                        fontSize: "14px",
                        color: "#d1d5db",
                        marginBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: "rgba(56,189,248,0.1)",
                          border: "1px solid rgba(56,189,248,0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Check size={12} color="#38BDF8" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  style={{
                    width: "100%",
                    fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                    fontSize: "17px",
                    letterSpacing: "2.5px",
                    background: program.highlight ? "#38BDF8" : "transparent",
                    color: program.highlight ? "#ffffff" : "#ffffff",
                    border: program.highlight
                      ? "none"
                      : "1.5px solid rgba(255,255,255,0.2)",
                    padding: "16px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLButtonElement;
                    if (program.highlight) {
                      el.style.boxShadow = "0 0 30px rgba(56,189,248,0.4)";
                      el.style.transform = "scale(1.02)";
                    } else {
                      el.style.borderColor = "#38BDF8";
                      el.style.color = "#38BDF8";
                      el.style.background = "rgba(56,189,248,0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.boxShadow = "none";
                    el.style.transform = "scale(1)";
                    if (!program.highlight) {
                      el.style.borderColor = "rgba(255,255,255,0.2)";
                      el.style.color = "#ffffff";
                      el.style.background = "transparent";
                    }
                  }}
                >
                  SOLICITAR INFORMACIÓN
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
