"use client";

import { useEffect, useRef } from "react";
import { Camera, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".cta-content", {
          opacity: 0,
          y: 50,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 80%",
          },
        });

        gsap.to(".cta-float-1", {
          y: -20,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".cta-float-2", {
          y: -16,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.5,
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
      id="contacto"
      ref={sectionRef}
      className="cta-section"
      style={{
        background: "#020617",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* MASSIVE blue radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "1000px",
          height: "600px",
          background:
            "radial-gradient(ellipse at center, rgba(56,189,248,0.12) 0%, rgba(56,189,248,0.05) 40%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Background logo watermark — large centered, very low opacity */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          opacity: 0.04,
          userSelect: "none",
          zIndex: 0,
        }}
      >
        <Image
          src="/logo-nobg.png"
          alt=""
          width={600}
          height={600}
          style={{
            objectFit: "contain",
            filter: "brightness(0) invert(1)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Diagonal stripe texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(56,189,248,0.03) 0px, rgba(56,189,248,0.03) 1px, transparent 1px, transparent 24px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Top border accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(56,189,248,0.7), transparent)",
        }}
      />

      {/* Large decorative glow orb top-right */}
      <div
        className="cta-float-1"
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Large decorative glow orb bottom-left */}
      <div
        className="cta-float-2"
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="cta-content"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Label */}
        <p
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "6px",
            color: "#7DD3FC",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          DA EL PRIMER PASO
        </p>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
            fontSize: "clamp(60px, 10vw, 130px)",
            color: "#ffffff",
            letterSpacing: "2px",
            lineHeight: 0.88,
            marginBottom: "32px",
            textShadow: "0 0 60px rgba(56,189,248,0.15)",
          }}
        >
          ¿LISTO PARA
          <br />
          <span
            style={{
              color: "#38BDF8",
              textShadow: "0 0 40px rgba(56,189,248,0.5)",
            }}
          >
            ENTRENAR?
          </span>
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: "18px",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7,
            maxWidth: "520px",
            margin: "0 auto 56px",
          }}
        >
          Únete a los más de 500 atletas que ya entrenan con el método Fitvang. Tu
          transformación empieza con una primera sesión. Sin excusas, sin límites.
        </p>

        {/* CTA Button */}
        <button
          style={{
            fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
            fontSize: "22px",
            letterSpacing: "3px",
            background: "#38BDF8",
            color: "#000000",
            border: "none",
            padding: "22px 64px",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
            marginBottom: "48px",
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            fontWeight: 700,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.transform = "scale(1.05)";
            el.style.boxShadow = "0 20px 70px rgba(56,189,248,0.55)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.transform = "scale(1)";
            el.style.boxShadow = "none";
          }}
        >
          EMPIEZA HOY
          <ArrowRight size={22} color="#000000" />
        </button>

        {/* Divider */}
        <div
          style={{
            width: "60px",
            height: "2px",
            background: "rgba(56,189,248,0.35)",
            margin: "0 auto 28px",
            borderRadius: "2px",
          }}
        />

        {/* Instagram Handles */}
        <p
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: "13px",
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "1px",
            marginBottom: "16px",
          }}
        >
          Síguenos en Instagram
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          {["@fitvang10", "@gilcho.10"].map((handle) => (
            <a
              key={handle}
              href={`https://instagram.com/${handle.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                fontSize: "20px",
                letterSpacing: "2px",
                color: "#ffffff",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 20px",
                background: "rgba(56,189,248,0.08)",
                border: "1px solid rgba(56,189,248,0.2)",
                borderRadius: "100px",
                transition: "background 0.2s, border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(56,189,248,0.18)";
                el.style.borderColor = "rgba(56,189,248,0.5)";
                el.style.color = "#38BDF8";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(56,189,248,0.08)";
                el.style.borderColor = "rgba(56,189,248,0.2)";
                el.style.color = "#ffffff";
              }}
            >
              <Camera size={18} color="#38BDF8" />
              {handle}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
