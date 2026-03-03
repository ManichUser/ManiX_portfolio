"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { HiChip } from "react-icons/hi";
import { useInView, useGnStyles } from "../hook/useInView";
import { ul } from "framer-motion/client";

const experiences = [
  {
    role: "Développeur Full-Stack",
    project: "Application de Gestion de Stock",
    year: "Nov 2025",
    company: "Orient Belge Sarl",
    color: "#58a6ff",
    details: [
      "Analyse et conception du système",
      "Développement frontend (React / Next.js)",
      "Développement backend (Node.js / PostgreSQL)",
    ],
  },
  {
    role: "Chef de Projet",
    project: "Application EcoSolar",
    year: "2023 – Présent",
    company: "Young Ecolo",
    color: "#3fb950",
    details: [
      "Analyse et conception produit",
      "Développement frontend",
      "Développement backend",
    ],
  },
  {
    role: "Chef de Projet",
    project: "Application MonFax",
    year: "Août 2025 – Présent",
    company: "Particulier",
    color: "#f0883e",
    details: [
      "Analyse et conception",
      "Gestion d'équipe technique",
      "Développement frontend",
    ],
  },
];

export default function Experience() {
  useGnStyles();
  const { ref, visible } = useInView(0.05);

  return (
    <section
      id="experiences"
      ref={ref}
      className="gn-font relative my-20 px-4 sm:px-8 max-w-5xl mx-auto"
    >
      {/* glow blob */}
      <div
        className="absolute top-0 -right-10 w-72 h-72 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(63,185,80,0.04) 0%, transparent 70%)" }}
      />

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <p className="gn-mono text-[11px] text-[#58a6ff] uppercase tracking-[.18em] mb-2 flex items-center gap-2">
          <span className="inline-block w-4 h-px bg-[#58a6ff]" />
          // experience
        </p>
        <h2 className="gn-font text-3xl sm:text-4xl font-extrabold text-[#e6edf3] leading-tight">
          Expériences
          <span
            className="inline-block w-1.5 h-7 ml-1 bg-[#58a6ff] rounded-sm align-middle"
            style={{ animation: "blink 1.2s step-end infinite" }}
          />
        </h2>
      </motion.div>

      {/* ── Timeline ── */}
      <div className="relative">

        {/* vertical line */}
        <motion.div
          className="absolute left-[19px] top-3 bottom-3 w-px"
          initial={{ scaleY: 0, originY: 0 }}
          animate={visible ? { scaleY: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ background: "linear-gradient(to bottom, #58a6ff55, #3fb95033, transparent)" }}
        />

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -28 }}
              animate={visible ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.75,
                delay: 0.15 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex gap-5"
            >
              {/* ── Timeline dot ── */}
              <div className="flex flex-col items-center shrink-0" style={{ width: "40px" }}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={visible ? { scale: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                    delay: 0.2 + i * 0.12,
                  }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center z-10"
                  style={{
                    background: `${exp.color}12`,
                    border: `1px solid ${exp.color}33`,
                    boxShadow: `0 0 14px ${exp.color}22`,
                  }}
                >
                  <FaBriefcase style={{ color: exp.color, fontSize: "13px" }} />
                </motion.div>
              </div>

              {/* ── Card ── */}
              <div
                className="card-lift flex-1 p-5 rounded-xl relative overflow-hidden mb-1"
                style={{
                  background: "rgba(22,27,34,0.75)",
                  border: "1px solid rgba(48,54,61,0.85)",
                }}
              >
                {/* top accent */}
                <div
                  className="absolute top-0 inset-x-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${exp.color}44, transparent)` }}
                />

                {/* role + year row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                  <div>
                    <span
                      className="gn-mono text-[10px] uppercase tracking-widest font-semibold"
                      style={{ color: exp.color }}
                    >
                      {exp.role}
                    </span>
                    <h3 className="gn-font text-[15px] font-bold text-[#e6edf3] mt-0.5">
                      {exp.project}
                    </h3>
                  </div>
                  <span
                    className="gn-mono text-[11px] flex items-center gap-1.5 px-2.5 py-1 rounded-lg shrink-0 h-fit"
                    style={{
                      background: "rgba(88,166,255,0.06)",
                      color: "#8b949e",
                      border: "1px solid rgba(88,166,255,0.12)",
                    }}
                  >
                    <FaCalendarAlt className="text-[9px] text-[#58a6ff]" />
                    {exp.year}
                  </span>
                </div>

                {/* company */}
                <div className="flex items-center gap-1.5 mb-4 mt-1">
                  <HiChip className="text-[#484f58] text-[11px]" />
                  <span className="gn-mono text-[11px] text-[#484f58]">{exp.company}</span>
                </div>

                {/* details */}
                <ul className="flex flex-col gap-2">
                  {exp.details.map((d, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -12 }}
                      animate={visible ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: 0.3 + i * 0.12 + j * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="flex items-center gap-2.5 text-[13px] text-[#8b949e]"
                    >
                      <span
                        className="w-1 h-1 rounded-full shrink-0"
                        style={{ background: exp.color, boxShadow: `0 0 4px ${exp.color}` }}
                      />
                      {d}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}