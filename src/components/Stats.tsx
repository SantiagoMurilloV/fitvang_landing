"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Clock, Layers, Star } from "lucide-react";

const statsData = [
  { value: 500, suffix: "+", label: "ATLETAS ENTRENADOS", prefix: "", icon: Users },
  { value: 5, suffix: "+", label: "AÑOS DE EXPERIENCIA", prefix: "", icon: Clock },
  { value: 3, suffix: "", label: "MÉTODOS DE ENTRENAMIENTO", prefix: "", icon: Layers },
  { value: 100, suffix: "%", label: "COMPROMISO TOTAL", prefix: "", icon: Star },
];

function useCounter(target: number, duration: number, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

function StatItem({
  stat,
  index,
  started,
}: {
  stat: (typeof statsData)[0];
  index: number;
  started: boolean;
}) {
  const count = useCounter(stat.value, 1800 + index * 200, started);
  const IconComponent = stat.icon;

  return (
    <div
      style={{
        textAlign: "center",
        padding: "48px 24px",
        position: "relative",
      }}
    >
      {/* Vertical divider (not last) */}
      {index < statsData.length - 1 && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: "1px",
            height: "100px",
            background:
              "linear-gradient(180deg, transparent, rgba(56,189,248,0.25), transparent)",
          }}
        />
      )}

      {/* Icon */}
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            background: "rgba(56,189,248,0.08)",
            border: "1px solid rgba(56,189,248,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconComponent size={24} color="#38BDF8" />
        </div>
      </div>

      {/* Big number */}
      <div
        style={{
          fontFamily: "var(--font-bebas-neue), 'Bebas Neue', sans-serif",
          fontSize: "clamp(80px, 10vw, 130px)",
          color: "#38BDF8",
          textShadow: started
            ? "0 0 40px rgba(56,189,248,0.6), 0 0 80px rgba(56,189,248,0.25)"
            : "none",
          lineHeight: 0.85,
          marginBottom: "16px",
          letterSpacing: "2px",
          transition: "text-shadow 0.5s ease",
        }}
      >
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <p
        style={{
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "3.5px",
          color: "#9ca3af",
          textTransform: "uppercase",
        }}
      >
        {stat.label}
      </p>
    </div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".stat-item-wrap", {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats-section",
            start: "top 80%",
            onEnter: () => setStarted(true),
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
      className="stats-section"
      style={{
        background: "#0a0a0a",
        position: "relative",
        overflow: "hidden",
        padding: "80px 24px",
      }}
    >
      {/* Animated gradient background layer */}
      <div
        className="animate-gradient-shift"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #081520 50%, #0a0a0a 100%)",
          opacity: 0.8,
          pointerEvents: "none",
        }}
      />

      {/* Strong center radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "300px",
          background:
            "radial-gradient(ellipse at center, rgba(56,189,248,0.15) 0%, transparent 60%)",
          pointerEvents: "none",
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
            "linear-gradient(90deg, transparent, rgba(56,189,248,0.5), transparent)",
        }}
      />

      {/* Bottom border accent */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(56,189,248,0.5), transparent)",
        }}
      />

      {/* Animated horizontal scan line */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          width: "200px",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(56,189,248,0.6), transparent)",
          animation: "scan-line 4s linear infinite",
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
        {/* Header */}
        <p
          style={{
            fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "6px",
            color: "#38BDF8",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "56px",
          }}
        >
          FITVANG EN NÚMEROS
        </p>

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0",
          }}
        >
          {statsData.map((stat, i) => (
            <div key={stat.label} className="stat-item-wrap">
              <StatItem stat={stat} index={i} started={started} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
