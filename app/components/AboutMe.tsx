"use client";

import { FaCode, FaTerminal } from "react-icons/fa";
import { HiSparkles, HiChip } from "react-icons/hi";
import { useInView, useGnStyles } from "../hook/useInView";

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="gn-mono text-[11px] text-[#58a6ff] uppercase tracking-[.18em] mb-2 flex items-center gap-2">
        <span className="inline-block w-4 h-px bg-[#58a6ff]" />
        {label}
      </p>
      <h2 className="gn-font text-3xl sm:text-4xl font-extrabold text-[#e6edf3] leading-tight">
        {title}
        <span
          className="inline-block w-1.5 h-7 ml-1 bg-[#58a6ff] rounded-sm align-middle"
          style={{ animation: "blink 1.2s step-end infinite" }}
        />
      </h2>
    </div>
  );
}

export default function AboutMe() {
  useGnStyles();
  const { ref, visible } = useInView(0.1);

  const cards = [
    { icon: <FaCode className="text-[#58a6ff]" />,      label: "Full-Stack",   value: "React · Next.js · Node" },
    { icon: <HiChip className="text-[#3fb950]" />,      label: "Data Science", value: "Python · ML · Analytics" },
    { icon: <FaTerminal className="text-[#f0883e]" />,  label: "Mobile",       value: "React Native · Expo" },
  ];

  return (
    <section
      id="about-me"
      ref={ref}
      className="gn-font relative my-20 px-4 sm:px-8 max-w-5xl mx-auto"
    >
      {/* bg glow blob */}
      <div
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(88,166,255,0.07) 0%, transparent 70%)" }}
      />

      {/* Header */}
      <div
        style={{
          animation: visible ? "fadeUp .9s cubic-bezier(0.16,1,0.3,1) both" : "none",
          opacity: visible ? undefined : 0,
        }}
      >
        <SectionHeader label="// about me" title="Qui suis-je ?" />
      </div>

      <div className="grid lg:grid-cols-5 gap-8 items-start">

        {/* ── Text block ── */}
        <div
          className="lg:col-span-3 space-y-4"
          style={{
            animation: visible ? "fadeLeft .9s cubic-bezier(0.16,1,0.3,1) .1s both" : "none",
            opacity: visible ? undefined : 0,
          }}
        >
          {[
            "Étudiant en master de science des données et développeur full-stack passionné, je combine génie logiciel et science des données pour créer des applications modernes, efficaces et intelligentes.",
            "Je développe des solutions web et mobiles avec React, Next.js, Node.js, TypeScript et React Native, en exploitant les données pour apporter une réelle valeur ajoutée à chaque projet.",
            "Ce qui me motive : concevoir des produits qui allient performance, design soigné et intelligence, offrant une expérience utilisateur fluide et percutante.",
          ].map((text, i) => (
            <p
              key={i}
              className="text-[#8b949e] leading-relaxed text-[15px] pl-4"
              style={{ borderLeft: "2px solid rgba(88,166,255,0.2)" }}
            >
              {text}
            </p>
          ))}

          {/* Terminal quote */}
          <div
            className="gn-mono mt-6 p-4 rounded-xl text-[12px]"
            style={{
              background: "rgba(22,27,34,0.8)",
              border: "1px solid rgba(48,54,61,0.85)",
            }}
          >
            <span className="text-[#3fb950]">❯</span>{" "}
            <span className="text-[#58a6ff]">const</span>{" "}
            <span className="text-[#e6edf3]">dev</span>{" "}
            <span className="text-[#8b949e]">=</span>{" "}
            <span className="text-[#f0883e]">"build · learn · impact"</span>
            <span
              className="inline-block w-1.5 h-3.5 ml-1 bg-[#58a6ff] rounded-sm align-middle"
              style={{ animation: "blink 1s step-end infinite" }}
            />
          </div>
        </div>

        {/* ── Stat cards ── */}
        <div
          className="lg:col-span-2 flex flex-col gap-3"
          style={{
            animation: visible ? "fadeRight .9s cubic-bezier(0.16,1,0.3,1) .2s both" : "none",
            opacity: visible ? undefined : 0,
          }}
        >
          {cards.map(({ icon, label, value }, i) => (
            <div
              key={i}
              className="card-lift flex items-center gap-4 p-4 rounded-xl"
              style={{
                background: "rgba(22,27,34,0.7)",
                border: "1px solid rgba(48,54,61,0.85)",
              }}
            >
              <span
                className="w-10 h-10 flex items-center justify-center rounded-lg text-lg shrink-0"
                style={{
                  background: "rgba(88,166,255,0.07)",
                  border: "1px solid rgba(88,166,255,0.13)",
                  animation: "glowPulse 3s ease-in-out infinite",
                  animationDelay: `${i * 0.4}s`,
                }}
              >
                {icon}
              </span>
              <div>
                <p className="gn-mono text-[10px] text-[#484f58] uppercase tracking-widest mb-0.5">{label}</p>
                <p className="text-[#e6edf3] font-semibold text-sm">{value}</p>
              </div>
            </div>
          ))}

          {/* Availability badge */}
          <div
            className="flex items-center gap-2 mt-1 px-4 py-2 rounded-xl"
            style={{ background: "rgba(63,185,80,0.06)", border: "1px solid rgba(63,185,80,0.18)" }}
          >
            <span
              className="w-2 h-2 rounded-full bg-[#3fb950] shrink-0"
              style={{ animation: "glowPulse 2s ease-in-out infinite", boxShadow: "0 0 6px rgba(63,185,80,.6)" }}
            />
            <span className="gn-mono text-[11px] text-[#3fb950]">Disponible pour opportunités</span>
            <HiSparkles className="text-[#3fb950] text-xs ml-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}