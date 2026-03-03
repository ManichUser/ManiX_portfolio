"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  FaWhatsapp, FaDownload, FaTerminal,
  FaReact, FaMobileAlt, FaServer, FaChartBar,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { useGnStyles } from "../hook/useInView";

/* ── Typewriter ─────────────────────────────────────────── */
const PHRASES = [
  "Build the future with me.",
  "Craft seamless web apps.",
  "Ship mobile experiences.",
  "Design intelligent APIs.",
  "Turn data into insights.",
];

function Typewriter() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting,  setDeleting]  = useState(false);
  const [pause,     setPause]     = useState(false);

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => { setPause(false); setDeleting(true); }, 1800);
      return () => clearTimeout(t);
    }
    const full = PHRASES[phraseIdx];
    if (!deleting) {
      if (displayed.length < full.length) {
        const t = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 52);
        return () => clearTimeout(t);
      } else { setPause(true); }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 28);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % PHRASES.length);
      }
    }
  }, [displayed, deleting, pause, phraseIdx]);

  return (
    <span className="gn-mono text-[#58a6ff] text-[15px] sm:text-[18px] font-medium tracking-wide">
      {displayed}
      <span
        className="inline-block w-0.5 h-[1em] bg-[#58a6ff] ml-0.5 align-middle"
        style={{ animation: "blink 1s step-end infinite" }}
      />
    </span>
  );
}

/* ── Tags ───────────────────────────────────────────────── */
const TAGS = [
  { Icon: FaReact,    color: "#58a6ff", label: "Web Applications", tech: "React · Next.js · TypeScript" },
  { Icon: FaMobileAlt,color: "#a5d6ff", label: "Mobile Apps",       tech: "React Native · Expo"          },
  { Icon: FaServer,   color: "#3fb950", label: "Backend & APIs",    tech: "Node.js · Python · Java"      },
  { Icon: FaChartBar, color: "#f0883e", label: "Data Science",      tech: "ML · Analytics · Python"      },
];

/* ── Hero ───────────────────────────────────────────────── */
export default function Hero() {
  useGnStyles();

  const container: Variants = {
    hidden: {},
    show:   { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, x: -24 },
    show:   { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="home"
      className="gn-font relative w-screen h-screen flex items-center overflow-hidden"
      style={{ background: "#060b18" }}
    >
      {/* ══ BACKGROUND PHOTO — right-aligned, full height ══ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <img
          src="/profile-2.PNG"
          alt=""
          aria-hidden="true"
          className="absolute top-0 right-0 h-full w-full sm:w-[65%] lg:w-[55%]"
          style={{
            objectFit: "cover",
            objectPosition: "top center",
            filter: "brightness(0.82) saturate(0.9)",
          }}
        />
        {/* right-edge fade */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, transparent 50%, rgba(6,11,24,0.55) 80%, #060b18 100%)",
          }}
        />
      </div>

      {/* ══ LEFT HAZE ══ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: `linear-gradient(
            108deg,
            #060b18 0%,
            #060b18 28%,
            rgba(6,11,24,0.94) 42%,
            rgba(6,11,24,0.68) 58%,
            rgba(6,11,24,0.18) 76%,
            transparent 100%
          )`,
        }}
      />

      {/* ══ BOTTOM FOG ══ */}
      <div
        className="absolute bottom-0 inset-x-0 h-52 pointer-events-none"
        style={{ zIndex: 2, background: "linear-gradient(to top, #060b18 0%, transparent 100%)" }}
      />

      {/* ══ BLUE AMBIENT GLOW ══ */}
      <div
        className="absolute pointer-events-none"
        style={{
          zIndex: 1,
          top: "15%", left: "0%",
          width: "560px", height: "560px",
          background: "radial-gradient(circle, rgba(88,166,255,0.08) 0%, transparent 65%)",
        }}
      />

      {/* ══ GRID ══ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          backgroundImage: `
            linear-gradient(rgba(88,166,255,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(88,166,255,0.022) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* ══ TOP ACCENT LINE ══ */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{
          zIndex: 3,
          background: "linear-gradient(90deg, transparent, #58a6ff44, #a5d6ff33, transparent)",
          backgroundSize: "200% 100%",
          animation: "borderFlow 5s ease infinite",
        }}
      />

      {/* ══ CONTENT ══ */}
      <div className="relative w-full h-full flex items-center" style={{ zIndex: 10 }}>
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-[600px]"
          >
            {/* Availability pill */}
            <motion.div variants={item} className="mb-7">
              <span
                className="gn-mono inline-flex items-center gap-2 text-[11px] px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(63,185,80,0.07)",
                  border: "1px solid rgba(63,185,80,0.22)",
                  color: "#3fb950",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#3fb950] shrink-0"
                  style={{ animation: "glowPulse 2s ease-in-out infinite", boxShadow: "0 0 5px rgba(63,185,80,.7)" }}
                />
                Disponible pour missions
                <HiSparkles className="text-[11px]" />
              </span>
            </motion.div>

            {/* Label */}
            <motion.p
              variants={item}
              className="gn-mono text-[11px] text-[#58a6ff] uppercase tracking-[.2em] mb-3 flex items-center gap-2"
            >
              <FaTerminal className="text-[10px]" />
              Full-Stack Developer · Data Science Student
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={item}
              className="gn-font text-5xl sm:text-6xl lg:text-[74px] font-extrabold leading-[1.04] tracking-tight mb-4"
            >
              <span className="text-[#e6edf3]">Manich</span>
              <br />
              <span
                style={{
                  background: "linear-gradient(130deg, #e6edf3 0%, #a5d6ff 55%, #58a6ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Dibakto
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={item} className="mb-8 h-7">
              <Typewriter />
            </motion.div>

            {/* Tags */}
            <motion.div variants={item} className="flex flex-col gap-2.5 mb-10">
              {TAGS.map((tag, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 8, transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] } }}
                  className="flex items-center w-fit cursor-default"
                >
                  <div
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-[13.5px] text-[#c9d1d9]"
                    style={{
                      background: "rgba(13,17,23,0.72)",
                      border: "1px solid rgba(48,54,61,0.9)",
                      backdropFilter: "blur(14px)",
                      WebkitBackdropFilter: "blur(14px)",
                    }}
                  >
                    {/* icon badge */}
                    <span
                      className="w-6 h-6 flex items-center justify-center rounded-md shrink-0"
                      style={{
                        background: `${tag.color}14`,
                        border: `1px solid ${tag.color}33`,
                      }}
                    >
                      <tag.Icon style={{ color: tag.color, fontSize: "11px" }} />
                    </span>
                    <span className="font-semibold tracking-tight">{tag.label}</span>
                    <span className="gn-mono text-[10px] text-[#373e47] hidden sm:inline">
                      · {tag.tech}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/237657857548?text=Salut%20!%20Je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(88,166,255,0.38)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  className="gn-font flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-[13.5px] text-[#060b18] cursor-pointer border-none"
                  style={{ background: "linear-gradient(135deg, #58a6ff 0%, #79c0ff 100%)" }}
                >
                  <FaWhatsapp className="text-[15px]" />
                  Discuter
                </motion.button>
              </a>

              <motion.button
                whileHover={{
                  y: -3,
                  borderColor: "rgba(88,166,255,0.45)",
                  background: "rgba(88,166,255,0.07)",
                  color: "#e6edf3",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="gn-mono flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-[12px] text-[#8b949e] cursor-pointer"
                style={{
                  background: "rgba(22,27,34,0.8)",
                  border: "1px solid rgba(48,54,61,0.9)",
                  backdropFilter: "blur(14px)",
                }}
              >
                <FaDownload className="text-[11px]" />
                <a  href="/CV-Manich_Dibakto.pd" download >
                Resume
                </a>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ══ SCROLL HINT ══ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ zIndex: 10 }}
      >
        <span className="gn-mono text-[10px] text-[#2d333b] uppercase tracking-widest">scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 rounded-full"
          style={{ background: "linear-gradient(to bottom, #58a6ff66, transparent)" }}
        />
      </motion.div>
    </section>
  );
}