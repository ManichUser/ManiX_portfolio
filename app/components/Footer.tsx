"use client";

import {
  FaGithub, FaLinkedin, FaEnvelope,
  FaPhone, FaMapMarkerAlt, FaTerminal,
} from "react-icons/fa";
import { useInView, useGnStyles } from "../hook/useInView";

const contacts = [
  { Icon: FaPhone,        text: "657 857 548 · 679 840 680", href: "tel:+237657857548"          },
  { Icon: FaEnvelope,     text: "manichdebami@gmail.com",    href: "mailto:manichdebami@gmail.com" },
  { Icon: FaMapMarkerAlt, text: "Yaoundé, Cameroun",         href: "#"                            },
];

const socials = [
  { Icon: FaGithub,   href: "#", label: "GitHub"   },
  { Icon: FaLinkedin, href: "#", label: "LinkedIn"  },
];

export default function Footer() {
  useGnStyles();
  const { ref, visible } = useInView(0.1);

  return (
    <footer
      ref={ref}
      className="gn-font px-4 relative border-t border-[rgba(48,54,61,0.85)] overflow-hidden"
      style={{ background: "#0d1117" }}
    >
      {/* Scanline */}
      <div
        className="absolute inset-x-0 h-20 pointer-events-none"
        style={{
          background: "linear-gradient(transparent, rgba(88,166,255,0.025), transparent)",
          animation: "scanline 8s linear infinite",
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #58a6ff, #a5d6ff, transparent)",
          backgroundSize: "200% 100%",
          animation: "borderFlow 5s ease infinite",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16">

        {/* ── 3-col grid ── */}
        <div
          className="grid sm:grid-cols-3 gap-10 mb-12"
          style={{
            animation: visible ? "fadeUp .9s cubic-bezier(0.16,1,0.3,1) both" : "none",
            opacity: visible ? undefined : 0,
          }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #58a6ff, #a5d6ff)",
                  animation: "glowPulse 3s ease-in-out infinite",
                }}
              >
                <FaTerminal className="text-[#0d1117] text-[11px]" />
              </div>
              <span className="gn-font font-bold text-[#e6edf3] text-sm">
                ManiX<span className="text-[#58a6ff]">.portfolio</span>
              </span>
            </div>
            <p className="text-[#484f58] text-[13px] leading-relaxed">
              Développeur full-stack & data scientist.
              <br />
              Yaoundé, Cameroun.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <p className="gn-mono text-[10px] text-[#484f58] uppercase tracking-[.15em] mb-4">Contact</p>
            <ul className="space-y-3 list-none p-0 m-0">
              {contacts.map(({ Icon, text, href }, i) => (
                <li key={i}>
                  <a
                    href={href}
                    className="footer-link flex items-center gap-3 text-[#8b949e] no-underline text-[13px]"
                  >
                    <span
                      className="w-7 h-7 flex items-center justify-center rounded-md shrink-0"
                      style={{
                        background: "rgba(88,166,255,0.06)",
                        border: "1px solid rgba(88,166,255,0.12)",
                      }}
                    >
                      <Icon className="text-[#58a6ff] text-[10px]" />
                    </span>
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="gn-mono text-[10px] text-[#484f58] uppercase tracking-[.15em] mb-4">Réseaux</p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="icon-float w-10 h-10 flex items-center justify-center rounded-xl
                             text-[#8b949e] hover:text-[#58a6ff] no-underline"
                  style={{
                    background: "rgba(22,27,34,0.9)",
                    border: "1px solid rgba(48,54,61,0.85)",
                    transition: "border-color .4s, color .4s",
                  }}
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>

            {/* Open to work */}
            <div className="flex items-center gap-2 mt-5">
              <span
                className="w-2 h-2 rounded-full bg-[#3fb950]"
                style={{
                  animation: "glowPulse 2s ease-in-out infinite",
                  boxShadow: "0 0 6px rgba(63,185,80,.6)",
                }}
              />
              <span className="gn-mono text-[11px] text-[#484f58]">Open to work</span>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="pt-6 border-t border-[rgba(48,54,61,0.6)] flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{
            animation: visible ? "fadeUp .9s cubic-bezier(0.16,1,0.3,1) .2s both" : "none",
            opacity: visible ? undefined : 0,
          }}
        >
          <span className="gn-mono text-[11px] text-[#373e47]">
            &copy; {new Date().getFullYear()} — MANICH DIBAKTO
          </span>
          <span
            className="gn-mono text-[11px] px-3 py-1 rounded-full"
            style={{
              background: "rgba(88,166,255,0.06)",
              color: "#484f58",
              border: "1px solid rgba(88,166,255,0.1)",
            }}
          >
            built with Next.js · TypeScript
          </span>
        </div>
      </div>
    </footer>
  );
}
