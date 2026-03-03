"use client"
import { useState, useEffect, useRef } from "react";
import { GiSkills, GiHouse } from "react-icons/gi";
import {
  FaUser,
  FaCode,
  FaBriefcase,
  FaDownload,
  FaTimes,
  FaTerminal,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { button } from "framer-motion/client";

/* ─── Keyframe animations injected once ───────────────────────── */
const KEYFRAMES = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');

  @keyframes slideInRight {
    from { transform: translateX(100%); opacity: 0; }
    to   { transform: translateX(0);   opacity: 1; }
  }
  @keyframes slideOutRight {
    from { transform: translateX(0);   opacity: 1; }
    to   { transform: translateX(100%); opacity: 0; }
  }
  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 10px rgba(88,166,255,0.22); }
    50%       { box-shadow: 0 0 26px rgba(88,166,255,0.55); }
  }
  @keyframes scanline {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(800%); }
  }
  @keyframes staggerIn {
    from { opacity: 0; transform: translateX(18px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes borderFlow {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes overlayFade {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .gn-font   { font-family: 'Outfit', sans-serif; }
  .gn-mono   { font-family: 'JetBrains Mono', monospace; }

  /* Nav link underline reveal */
  .gn-navlink { position: relative; overflow: hidden; }
  .gn-navlink::after {
    content: '';
    position: absolute;
    bottom: 2px; left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 70%; height: 1.5px;
    background: #58a6ff;
    border-radius: 2px;
    transition: transform 0.55s cubic-bezier(0.34,1.56,0.64,1);
  }
  .gn-navlink:hover::after { transform: translateX(-50%) scaleX(1); }
  .gn-navlink:hover .gn-icon {
    transform: translateY(-3px) rotate(-6deg);
    color: #58a6ff !important;
  }
  .gn-icon {
    transition: transform 0.6s cubic-bezier(0.34,1.56,0.64,1), color 0.4s ease;
  }

  /* Sidebar link */
  .gn-slink {
    transition: background 0.45s ease, padding-left 0.5s cubic-bezier(0.34,1.56,0.64,1), color 0.4s ease;
  }
  .gn-slink:hover { background: rgba(88,166,255,0.07) !important; padding-left: 1.6rem !important; color: #e6edf3 !important; }
  .gn-slink:hover .gn-sicon { transform: scale(1.18) rotate(-6deg); color: #58a6ff !important; }
  .gn-sicon { transition: transform 0.55s cubic-bezier(0.34,1.56,0.64,1), color 0.4s ease; }

  /* Download button shimmer */
  .gn-dl {
    position: relative; overflow: hidden;
    transition: transform 0.5s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.5s ease;
  }
  .gn-dl::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
    transform: translateX(-100%);
    transition: transform 0.75s ease;
  }
  .gn-dl:hover::after { transform: translateX(100%); }
  .gn-dl:hover { transform: translateY(-2px) scale(1.04); box-shadow: 0 8px 28px rgba(88,166,255,0.42); }
  .gn-dl:active { transform: scale(0.97); }

  /* Burger */
  .gn-burger { transition: background 0.4s ease, border-color 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1); }
  .gn-burger:hover { transform: scale(1.07); border-color: rgba(88,166,255,0.5) !important; background: rgba(88,166,255,0.07) !important; }

  /* Logo mark */
  .gn-logo-mark { transition: transform 0.65s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.5s ease; }
  .gn-logo-mark:hover { transform: rotate(-10deg) scale(1.1); box-shadow: 0 0 24px rgba(88,166,255,0.6) !important; }

  /* Scrolled nav */
  .gn-scrolled {
    background: rgba(13,17,23,0.9) !important;
    backdrop-filter: blur(22px) saturate(180%);
    -webkit-backdrop-filter: blur(22px) saturate(180%);
    border-bottom-color: rgba(48,54,61,0.8) !important;
    box-shadow: 0 4px 32px rgba(0,0,0,0.5);
  }
`;

const NAV_LINKS = [
  { label: "Home",        href: "#",            Icon: GiHouse    },
  { label: "About me",    href: "#about-me",    Icon: FaUser     },
  { label: "Skills",      href: "#skills",      Icon: GiSkills   },
  { label: "Projects",    href: "#projects",    Icon: FaCode     },
  { label: "Experiences", href: "#experiences", Icon: FaBriefcase },
];

/* ─── NavBar component ──────────────────────────────────────────── */
export const NavBar = () => {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted,  setMounted]  = useState(false);
  const sidebarRef              = useRef<HTMLElement>(null);

  /* inject global keyframes once */
  useEffect(() => {
    if (!document.getElementById("gn-styles")) {
      const tag = document.createElement("style");
      tag.id = "gn-styles";
      tag.textContent = KEYFRAMES;
      document.head.appendChild(tag);
    }
    const t = setTimeout(() => setMounted(true), 40);
    return () => clearTimeout(t);
  }, []);

  /* scroll → frosted glass */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* close on outside click */
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (open && sidebarRef.current && !sidebarRef.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, [open]);

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ══════════ NAV BAR ══════════ */}
      <nav
        className={`gn-font fixed px-2 top-0 left-0 right-0 z-50 border-b transition-all duration-700
          ${scrolled
            ? "gn-scrolled border-[rgba(48,54,61,0.8)]"
            : "bg-transparent border-transparent"}`}
        style={{ animation: mounted ? "fadeInDown 0.9s cubic-bezier(0.16,1,0.3,1) both" : "none" }}
      >
        {/* animated top accent line */}
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #58a6ff 35%, #a5d6ff 65%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: "borderFlow 5s ease infinite",
          }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">

          {/* ── Logo ── */}
          <a href="#" className="flex items-center gap-3 no-underline shrink-0">
            <div
              className="gn-logo-mark w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #58a6ff, #a5d6ff)",
                boxShadow: "0 0 14px rgba(88,166,255,0.3)",
              }}
            >
              <FaTerminal className="text-[#0d1117] text-[11px]" />
            </div>
            <span className="gn-font text-[#e6edf3] font-semibold text-[15px] tracking-tight hidden sm:block">
              ManiX<span className="text-[#58a6ff]">.portfolio</span>
            </span>
          </a>

          {/* ── Desktop links ── */}
          <ul className="hidden lg:flex items-center gap-0.5 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, href, Icon }, i) => (
              <li
                key={label}
                className="gn-navlink"
                style={{
                  animation: mounted
                    ? `fadeInDown 0.75s cubic-bezier(0.16,1,0.3,1) ${0.08 + i * 0.07}s both`
                    : "none",
                }}
              >
                <a
                  href={href}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg
                             text-[#8b949e] hover:text-[#e6edf3] text-[13.5px] font-medium
                             no-underline transition-colors duration-400"
                >
                  <Icon className="gn-icon text-[12px]" />
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Right actions ── */}
          <div
            className="flex items-center gap-3 shrink-0"
            style={{
              animation: mounted ? "fadeInDown 0.9s cubic-bezier(0.16,1,0.3,1) 0.45s both" : "none",
            }}
          >
            {/* Desktop download */}
            <button
              className="gn-dl gn-mono hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg
                         text-[#0d1117] font-bold text-[12px] tracking-wide cursor-pointer border-none"
              style={{ background: "linear-gradient(135deg, #58a6ff 0%, #79c0ff 100%)" }}
            >
              <FaDownload className="text-[11px]" />
             <a  href="/CV-Manich_Dibakto.pd" download >
                Resume
             </a>
            </button>

            {/* vertical divider */}
            <div className="hidden lg:block w-px h-5 bg-[rgba(48,54,61,0.9)]" />

            {/* Burger */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="gn-burger lg:hidden flex flex-col items-center justify-center
                         w-9 h-9 rounded-lg bg-[#161b22] border border-[rgba(48,54,61,0.85)]
                         cursor-pointer gap-[5px] p-0"
            >
              {open ? (
                <FaTimes className="text-[#8b949e] text-[13px]" />
              ) : (
                <>
                  <span className="block h-[1.5px] w-4 rounded-full bg-[#8b949e]" />
                  <span className="block h-[1.5px] w-3 rounded-full bg-[#8b949e]" />
                  <span className="block h-[1.5px] w-4 rounded-full bg-[#8b949e]" />
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ══════════ OVERLAY ══════════ */}
      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{
            background: "rgba(1,4,9,0.72)",
            backdropFilter: "blur(5px)",
            animation: "overlayFade 0.5s ease both",
          }}
          onClick={() => setOpen(false)}
        />
      )}

      {/* ══════════ SIDEBAR ══════════ */}
      <aside
        ref={sidebarRef}
        className="gn-font fixed top-0 right-0 bottom-0 z-50 w-[280px] lg:hidden flex flex-col"
        style={{
          background: "#0d1117",
          borderLeft: "1px solid rgba(48,54,61,0.9)",
          boxShadow: "-20px 0 60px rgba(0,0,0,0.65)",
          animation: open
            ? "slideInRight 0.6s cubic-bezier(0.16,1,0.3,1) both"
            : "slideOutRight 0.45s cubic-bezier(0.55,0,1,0.45) both",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {/* Sidebar top bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(48,54,61,0.85)]">
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #58a6ff, #a5d6ff)",
                animation: "glowPulse 3s ease-in-out infinite",
              }}
            >
              <FaTerminal className="text-[#0d1117] text-[10px]" />
            </div>
            <span className="gn-font text-[#e6edf3] font-semibold text-sm">
              ManiX<span className="text-[#58a6ff]">.portfolio</span>
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg
                       bg-[#161b22] border border-[rgba(48,54,61,0.7)]
                       text-[#8b949e] hover:text-[#e6edf3]
                       hover:border-[rgba(88,166,255,0.4)]
                       transition-all duration-400 cursor-pointer"
          >
            <FaTimes className="text-[11px]" />
          </button>
        </div>

        {/* Scrolling scanline effect */}
        <div className="relative flex-1 flex flex-col overflow-hidden">
          <div
            className="absolute inset-x-0 h-16 pointer-events-none z-10"
            style={{
              background: "linear-gradient(transparent, rgba(88,166,255,0.03), transparent)",
              animation: "scanline 5s linear infinite",
            }}
          />

          {/* Nav links */}
          <div className="flex-1 px-3 pt-5 pb-2">
            <p className="gn-mono text-[10px] text-[#484f58] uppercase tracking-[0.15em] px-3 mb-3">
              Navigation
            </p>
            {NAV_LINKS.map(({ label, href, Icon }, i) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="gn-slink flex items-center gap-3.5 pl-3 pr-4 py-2.5 rounded-lg
                           text-[#8b949e] no-underline font-medium text-[13.5px] mb-0.5"
                style={{
                  animation: open
                    ? `staggerIn 0.65s cubic-bezier(0.16,1,0.3,1) ${0.12 + i * 0.065}s both`
                    : "none",
                }}
              >
                <span
                  className="w-7 h-7 flex items-center justify-center rounded-md shrink-0"
                  style={{
                    background: "rgba(88,166,255,0.06)",
                    border: "1px solid rgba(88,166,255,0.12)",
                  }}
                >
                  <Icon className="gn-sicon text-[11px]" />
                </span>
                {label}
                <span className="ml-auto gn-mono text-[10px] text-[#373e47]">
                  0{i + 1}
                </span>
              </a>
            ))}
          </div>

          {/* Sidebar footer */}
          <div
            className="px-4 py-5 border-t border-[rgba(48,54,61,0.85)]"
            style={{
              animation: open
                ? "fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.45s both"
                : "none",
            }}
          >
            <p className="gn-mono text-[10px] text-[#484f58] uppercase tracking-[0.15em] mb-3">
              Download
            </p>
            <button
              className="gn-dl gn-mono w-full flex items-center justify-center gap-2.5
                         py-2.5 rounded-lg text-[#0d1117] font-bold text-[12px]
                         tracking-wide cursor-pointer border-none"
              style={{ background: "linear-gradient(135deg, #58a6ff, #79c0ff)" }}
            >
              <FaDownload className="text-[11px]" />
             
              <a href="/CV-Manich_Dibakto.pdf" download >
              Download Resume
              </a>
            </button>

            {/* availability badge */}
            <div className="flex items-center gap-2 mt-4 px-1">
              <span
                className="w-2 h-2 rounded-full bg-[#3fb950] shrink-0"
                style={{ animation: "glowPulse 2s ease-in-out infinite", boxShadow: "0 0 6px rgba(63,185,80,0.65)" }}
              />
              <span className="gn-mono text-[11px] text-[#484f58]">
                Available for work
              </span>
              <HiSparkles className="text-[#3fb950] text-[11px] ml-auto opacity-70" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default NavBar;