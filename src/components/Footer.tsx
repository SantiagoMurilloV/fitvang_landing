"use client";

import { Camera } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Programas", href: "#programas" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

const instagramLinks = [
  { label: "@fitvang10", href: "https://instagram.com/fitvang10" },
  { label: "@gilcho.10", href: "https://instagram.com/gilcho.10" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "64px 24px 32px",
        position: "relative",
      }}
    >
      {/* Top border accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "1px",
          background: "#38BDF8",
          opacity: 0.6,
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Main footer content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "56px",
          }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div>
            {/* Logo */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginBottom: "20px",
                gap: "4px",
              }}
            >
              <Image
                src="/logo-nobg.png"
                alt="Fitvang Logo"
                width={547}
                height={456}
                style={{
                  objectFit: "contain",
                  width: "110px",
                  height: "auto",
                  filter: "drop-shadow(0 0 6px rgba(56,189,248,0.3))",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  color: "#38BDF8",
                  textTransform: "uppercase",
                }}
              >
                CENTRO DE ENTRENAMIENTO
              </span>
            </div>

            <p
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: "14px",
                color: "#6b7280",
                lineHeight: 1.7,
                maxWidth: "280px",
              }}
            >
              Fútbol, entrenamiento funcional y fitness de élite con Juan José
              Gil. Transforma tu juego.
            </p>

            {/* Blue divider */}
            <div
              style={{
                width: "40px",
                height: "2px",
                background: "#38BDF8",
                marginTop: "24px",
                borderRadius: "2px",
                opacity: 0.6,
              }}
            />
          </div>

          {/* Nav Links */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "3px",
                color: "#38BDF8",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              NAVEGACIÓN
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: "12px" }}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    style={{
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: "14px",
                      color: "#6b7280",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#ffffff")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "#6b7280")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "3px",
                color: "#38BDF8",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              REDES SOCIALES
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {instagramLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: "12px" }}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: "14px",
                      color: "#6b7280",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "#38BDF8";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "#6b7280";
                    }}
                  >
                    <Camera size={14} />
                    {link.label}
                  </a>
                </li>
              ))}

              <li style={{ marginTop: "24px" }}>
                <div
                  style={{
                    background: "rgba(56,189,248,0.06)",
                    border: "1px solid rgba(56,189,248,0.15)",
                    borderRadius: "8px",
                    padding: "16px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                      fontSize: "12px",
                      color: "#9ca3af",
                      lineHeight: 1.6,
                    }}
                  >
                    ¿Preguntas? Escríbenos directamente en Instagram o envía un
                    mensaje para más información.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: "13px",
              color: "#4b5563",
            }}
          >
            &copy; 2026 Fitvang. Todos los derechos reservados.
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: "13px",
              color: "#4b5563",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            Diseñado con
            <span style={{ color: "#38BDF8" }}>♥</span>
            para el fútbol
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
