"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "CM",
    name: "Carlos M.",
    role: "Jugador amateur, 24 años",
    quote:
      "Llevar tres meses entrenando con el método Fitvang ha sido un antes y un después en mi carrera. Mi primer toque mejoró demasiado y estoy más rápido que nunca. El método Fitvang es diferente a todo lo que había probado antes.",
    stars: 5,
  },
  {
    initials: "AR",
    name: "Alejandro R.",
    role: "Futbolista semi-profesional",
    quote:
      "Empecé con el plan online y en 8 semanas noté cambios reales. Los análisis de video son una locura — detecta cosas que yo ni sabía que hacía mal. 100% recomendado para cualquier jugador que quiera progresar en serio.",
    stars: 5,
  },
  {
    initials: "LG",
    name: "Laura G.",
    role: "Entrenamiento funcional, 31 años",
    quote:
      "Nunca pensé que el fitness podría divertirme tanto. Fitvang integra el trabajo de fútbol con el entrenamiento funcional de forma que cada sesión es un reto y una motivación. Llevo 6 meses y mi transformación física es increíble.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={16}
          fill="#38BDF8"
          color="#38BDF8"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".testimonial-card", {
          opacity: 0,
          y: 60,
          duration: 0.85,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonials-section",
            start: "top 78%",
          },
        });
        gsap.from(".testimonials-header", {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonials-section",
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
      className="testimonials-section"
      style={{
        background: "#0a0a0a",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div
          className="testimonials-header"
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
            RESULTADOS REALES
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
            LO QUE DICEN
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

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: "12px",
                padding: "36px 32px",
                transition: "transform 0.3s ease, border-color 0.3s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-6px)";
                el.style.borderColor = "rgba(56,189,248,0.25)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(255,255,255,0.07)";
              }}
            >
              {/* Quote mark */}
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "80px",
                  color: "rgba(56,189,248,0.12)",
                  lineHeight: 0.8,
                  marginBottom: "16px",
                  userSelect: "none",
                }}
              >
                &ldquo;
              </div>

              {/* Stars */}
              <Stars count={t.stars} />

              {/* Quote */}
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: "15px",
                  color: "#d1d5db",
                  lineHeight: 1.75,
                  marginBottom: "28px",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                {/* Avatar */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(56,189,248,0.2) 0%, rgba(56,189,248,0.05) 100%)",
                    border: "1.5px solid rgba(56,189,248,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                    fontSize: "16px",
                    color: "#38BDF8",
                    letterSpacing: "1px",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#ffffff",
                      marginBottom: "2px",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: "12px",
                      color: "#6b7280",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
