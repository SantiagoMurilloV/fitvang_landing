"use client";

import { useEffect, useRef } from "react";
import { Trophy, MapPin } from "lucide-react";
import Image from "next/image";

const facts = [
  {
    icon: Trophy,
    label: "TRAYECTORIA",
    value: "10+ Años de experiencia en fútbol profesional y formativo",
  },
  {
    icon: MapPin,
    label: "METODOLOGÍA",
    value: "Sistema propio que fusiona fútbol, funcional y fitness",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".about-left", {
          opacity: 0,
          x: -60,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 78%",
          },
        });
        gsap.from(".about-right", {
          opacity: 0,
          x: 60,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 78%",
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
      id="sobre-mi"
      ref={sectionRef}
      className="about-section"
      style={{
        background: "#0a0a0a",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Left — Text Content with sky-blue vertical border */}
        <div
          className="about-left"
          style={{
            borderLeft: "2px solid #38BDF8",
            paddingLeft: "32px",
          }}
        >
          {/* Label */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "6px",
              color: "#38BDF8",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            EL ENTRENADOR
          </p>

          {/* Name */}
          <h2
            style={{
              fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
              fontSize: "clamp(50px, 7vw, 80px)",
              color: "#ffffff",
              letterSpacing: "2px",
              lineHeight: 0.95,
              marginBottom: "8px",
            }}
          >
            JUAN JOSÉ GIL
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                fontSize: "clamp(20px, 2.8vw, 30px)",
                color: "#38BDF8",
                letterSpacing: "3px",
                textShadow: "0 0 20px rgba(56,189,248,0.4)",
              }}
            >
              FUNDADOR &amp; HEAD COACH
            </span>
          </div>

          {/* Bio */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: "16px",
              color: "#9ca3af",
              lineHeight: 1.8,
              marginBottom: "16px",
            }}
          >
            Juan José Gil es entrenador, formador y apasionado del fútbol de
            posición. Su carrera está marcada por una visión única del juego:
            entender el fútbol no solo como deporte, sino como disciplina que
            moldea cuerpo y mente.
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: "16px",
              color: "#9ca3af",
              lineHeight: 1.8,
              marginBottom: "40px",
            }}
          >
            Su metodología <strong style={{ color: "#38BDF8" }}>Fitvang</strong>{" "}
            nace de la convicción de que el entrenamiento de élite no es
            exclusivo de los profesionales. Combinando técnica futbolística,
            fuerza funcional y fitness integral, crea programas que transforman
            atletas ordinarios en jugadores extraordinarios.
          </p>

          {/* Facts */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            {facts.map((fact) => {
              const IconComponent = fact.icon;
              return (
                <div
                  key={fact.label}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    background: "rgba(56,189,248,0.04)",
                    border: "1px solid rgba(56,189,248,0.12)",
                    borderRadius: "8px",
                    padding: "20px",
                  }}
                >
                  <IconComponent size={24} color="#38BDF8" style={{ flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                        fontSize: "11px",
                        letterSpacing: "3px",
                        color: "#38BDF8",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      {fact.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                        fontSize: "14px",
                        color: "#d1d5db",
                        lineHeight: 1.5,
                      }}
                    >
                      {fact.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <button
            style={{
              fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
              fontSize: "17px",
              letterSpacing: "3px",
              background: "#38BDF8",
              color: "#000000",
              border: "none",
              padding: "16px 36px",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              fontWeight: 700,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "scale(1.05)";
              el.style.boxShadow = "0 0 35px rgba(56,189,248,0.5)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "scale(1)";
              el.style.boxShadow = "none";
            }}
          >
            HABLAR CON EL ENTRENADOR
          </button>
        </div>

        {/* Right — Visual card with logo overlay */}
        <div
          className="about-right"
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Outer glow ring */}
          <div
            style={{
              position: "absolute",
              inset: "-20px",
              borderRadius: "20px",
              background:
                "linear-gradient(135deg, rgba(56,189,248,0.15) 0%, transparent 50%, rgba(56,189,248,0.05) 100%)",
              filter: "blur(20px)",
            }}
          />

          {/* Main card */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "420px",
              aspectRatio: "3/4",
              background: "linear-gradient(160deg, #111111 0%, #080808 100%)",
              borderRadius: "16px",
              border: "1px solid rgba(56,189,248,0.2)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Gradient border effect */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "16px",
                padding: "1px",
                background:
                  "linear-gradient(135deg, rgba(56,189,248,0.4) 0%, transparent 40%, rgba(56,189,248,0.1) 100%)",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                pointerEvents: "none",
              }}
            />

            {/* Foto real de Juan — con filtro cinematico */}
            <Image
              src="/juan-founder.png"
              alt="Juan José Gil — Fundador Fitvang"
              width={420}
              height={560}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                filter: "grayscale(1) contrast(1.25) brightness(0.78)",
              }}
            />

            {/* Overlay azul cinematico — tinte de profundidad */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(2,6,23,0.1) 0%, rgba(2,6,23,0.0) 40%, rgba(2,6,23,0.75) 100%)",
                zIndex: 1,
              }}
            />

            {/* Tinte azul sutil sobre toda la foto */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(14, 165, 233, 0.18)",
                mixBlendMode: "screen",
                zIndex: 2,
              }}
            />

            {/* Nombre sobre la foto — abajo */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "28px 24px",
                zIndex: 3,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                  fontSize: "32px",
                  letterSpacing: "3px",
                  color: "#ffffff",
                  marginBottom: "2px",
                  lineHeight: 1,
                }}
              >
                JUAN JOSÉ GIL
              </p>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "4px",
                  color: "#38BDF8",
                  textTransform: "uppercase",
                }}
              >
                FUNDADOR · HEAD COACH
              </p>
            </div>

            {/* Bottom bar */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(90deg, transparent, #38BDF8, transparent)",
                zIndex: 4,
              }}
            />
          </div>

          {/* Floating badge */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "0px",
              background: "#38BDF8",
              color: "#000000",
              borderRadius: "8px",
              padding: "10px 16px",
              boxShadow: "0 8px 30px rgba(56,189,248,0.4)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                fontSize: "22px",
                letterSpacing: "1px",
                lineHeight: 1,
                fontWeight: 700,
              }}
            >
              FITVANG
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
                color: "rgba(0,0,0,0.6)",
              }}
            >
              MÉTODO OFICIAL
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .about-right {
            order: -1;
          }
          .about-left {
            border-left: 2px solid #38BDF8;
            padding-left: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
