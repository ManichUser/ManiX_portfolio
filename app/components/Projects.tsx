"use client";

import { useState } from "react";
import { projects } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { useInView, useGnStyles } from "../hook/useInView";

const PROJECTS_PER_PAGE = 4;

export default function Projects() {
  useGnStyles();
  const { ref, visible } = useInView(0.05);
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection]     = useState(1); // 1 = forward, -1 = backward

  const totalPages     = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex     = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const goTo = (next: number) => {
    setDirection(next > currentPage ? 1 : -1);
    setCurrentPage(next);
  };

  /* Framer Motion variants — slide direction-aware */
  const variants = {
    enter:  (d: number) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0 },
    exit:   (d: number) => ({ opacity: 0, x: d * -40 }),
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="gn-font relative my-20 px-4 sm:px-8 max-w-5xl mx-auto"
    >
      {/* glow blob */}
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-40 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(88,166,255,0.05) 0%, transparent 70%)" }}
      />

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <p className="gn-mono text-[11px] text-[#58a6ff] uppercase tracking-[.18em] mb-2 flex items-center gap-2">
          <span className="inline-block w-4 h-px bg-[#58a6ff]" />
          // projects
        </p>
        <h2 className="gn-font text-3xl sm:text-4xl font-extrabold text-[#e6edf3] leading-tight">
          Projets
          <span
            className="inline-block w-1.5 h-7 ml-1 bg-[#58a6ff] rounded-sm align-middle"
            style={{ animation: "blink 1.2s step-end infinite" }}
          />
        </h2>
      </motion.div>

      {/* ── Cards grid ── */}
      <div className="grid sm:grid-cols-2 gap-5 min-h-[420px]">
        <AnimatePresence custom={direction} initial={false}>
          {currentProjects.map((p, i) => (
            <motion.div
              key={`${currentPage}-${p.title}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.55,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="card-lift relative flex flex-col rounded-xl overflow-hidden"
              style={{
                background: "rgba(22,27,34,0.8)",
                border: "1px solid rgba(48,54,61,0.85)",
              }}
            >
              {/* top accent */}
              <div
                className="absolute top-0 inset-x-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, #58a6ff55, transparent)" }}
              />

              {/* Image strip */}
              {p.images?.length > 0 && (
                <div className="flex overflow-x-auto gap-2 p-3 pb-0 scrollbar-none"
                  style={{ scrollbarWidth: "none" }}>
                  {p.images.map((img: string, idx: number) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${p.title} ${idx + 1}`}
                      className="w-28 h-16 object-cover rounded-lg shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                  ))}
                </div>
              )}

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="gn-font text-[15px] font-bold text-[#e6edf3] leading-snug">
                    {p.title}
                  </h3>
                  <span
                    className="w-7 h-7 flex items-center justify-center rounded-lg flex-shrink-0"
                    style={{ background: "rgba(88,166,255,0.08)", border: "1px solid rgba(88,166,255,0.15)" }}
                  >
                    <FaCode className="text-[#58a6ff] text-[10px]" />
                  </span>
                </div>

                <p className="text-[#8b949e] text-[13px] leading-relaxed mb-3 flex-1">{p.desc}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech?.split(/[,·]/).map((t: string, j: number) => (
                    <span
                      key={j}
                      className="gn-mono text-[10px] px-2 py-0.5 rounded-md"
                      style={{
                        background: "rgba(88,166,255,0.07)",
                        color: "#58a6ff",
                        border: "1px solid rgba(88,166,255,0.15)",
                      }}
                    >
                      {t.trim()}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gn-mono flex items-center gap-1.5 text-[12px] text-[#58a6ff] no-underline
                             hover:text-[#a5d6ff] transition-colors duration-300 mt-auto w-fit"
                >
                  <FiExternalLink className="text-[12px]" />
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ── Pagination ── */}
      {totalPages > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center items-center gap-4 mt-8"
        >
          <button
            onClick={() => goTo(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className="w-9 h-9 flex items-center justify-center rounded-lg
                       text-[#8b949e] disabled:opacity-30 cursor-pointer
                       transition-all duration-400 hover:text-[#e6edf3]"
            style={{
              background: "rgba(22,27,34,0.9)",
              border: "1px solid rgba(48,54,61,0.85)",
            }}
          >
            <FiChevronLeft size={16} />
          </button>

          {/* page dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i + 1)}
                className="rounded-full transition-all duration-500 cursor-pointer"
                style={{
                  width:      currentPage === i + 1 ? "20px" : "6px",
                  height:     "6px",
                  background: currentPage === i + 1 ? "#58a6ff" : "rgba(88,166,255,0.25)",
                  border:     "none",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => goTo(Math.min(currentPage + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="w-9 h-9 flex items-center justify-center rounded-lg
                       text-[#8b949e] disabled:opacity-30 cursor-pointer
                       transition-all duration-400 hover:text-[#e6edf3]"
            style={{
              background: "rgba(22,27,34,0.9)",
              border: "1px solid rgba(48,54,61,0.85)",
            }}
          >
            <FiChevronRight size={16} />
          </button>
        </motion.div>
      )}
    </section>
  );
}