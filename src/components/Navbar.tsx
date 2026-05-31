"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Programas", href: "#programas" },
  { label: "Metodología", href: "#metodologia" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "background 0.4s ease, backdrop-filter 0.4s ease",
          background: scrolled ? "rgba(0,0,0,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(56,189,248,0.1)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            height: "76px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#inicio");
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textDecoration: "none",
              gap: "2px",
            }}
          >
            <div style={{ lineHeight: 1 }}>
              <div
                style={{
                  fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                  fontSize: "28px",
                  letterSpacing: "4px",
                  color: "#ffffff",
                  lineHeight: 1,
                }}
              >
                FIT<span style={{ color: "#38BDF8" }}>VANG</span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: "8px",
                  letterSpacing: "3.5px",
                  color: "#38BDF8",
                  textTransform: "uppercase",
                  marginTop: "3px",
                }}
              >
                CENTRO DE ENTRENAMIENTO
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div
            style={{
              alignItems: "center",
              gap: "36px",
            }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#9ca3af",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#38BDF8")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#9ca3af")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a
              href="#programas"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#programas");
              }}
              className="hidden md:block"
              style={{
                fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                fontSize: "16px",
                letterSpacing: "2px",
                background: "#38BDF8",
                color: "#000000",
                padding: "10px 24px",
                borderRadius: "4px",
                textDecoration: "none",
                transition: "transform 0.2s, box-shadow 0.2s",
                fontWeight: 700,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "scale(1.05)";
                el.style.boxShadow = "0 0 28px rgba(56,189,248,0.55)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "scale(1)";
                el.style.boxShadow = "none";
              }}
            >
              EMPIEZA AHORA
            </a>

            {/* Hamburger */}
            <button
              className="flex md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
              }}
              aria-label="Menú"
            >
              {menuOpen ? <X size={24} color="#ffffff" /> : <Menu size={24} color="#ffffff" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          style={{
            overflow: "hidden",
            maxHeight: menuOpen ? "420px" : "0",
            transition: "max-height 0.4s ease",
            background: "rgba(0,0,0,0.98)",
            borderTop: menuOpen ? "1px solid rgba(56,189,248,0.1)" : "none",
          }}
          className="md:hidden"
        >
          <div
            style={{
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#9ca3af",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#programas"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#programas");
              }}
              style={{
                fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
                fontSize: "18px",
                letterSpacing: "2px",
                background: "#38BDF8",
                color: "#000000",
                padding: "14px 24px",
                borderRadius: "4px",
                textDecoration: "none",
                textAlign: "center",
                marginTop: "8px",
                fontWeight: 700,
              }}
            >
              EMPIEZA AHORA
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
