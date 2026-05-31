"use client";

const TICKER_TEXT =
  "FÚTBOL · ENTRENAMIENTO FUNCIONAL · FITNESS · MENTE · CUERPO · RENDIMIENTO · FITVANG · CENTRO DE ENTRENAMIENTO · ";

export default function MarqueeBand() {
  return (
    <div
      style={{
        width: "100%",
        background: "#080808",
        borderTop: "1px solid rgba(56,189,248,0.12)",
        borderBottom: "1px solid rgba(56,189,248,0.12)",
        padding: "18px 0",
        overflow: "hidden",
        position: "relative",
        zIndex: 5,
      }}
    >
      {/* Left fade mask */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "80px",
          background: "linear-gradient(90deg, #080808, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      {/* Right fade mask */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "80px",
          background: "linear-gradient(270deg, #080808, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        className="animate-marquee"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
      >
        {/* Repeat 4× so the loop is seamless */}
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
              fontSize: "17px",
              letterSpacing: "4px",
              color: "#38BDF8",
              opacity: 0.85,
              paddingRight: "0",
            }}
          >
            {TICKER_TEXT}
          </span>
        ))}
      </div>
    </div>
  );
}
