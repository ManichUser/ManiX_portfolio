"use client";

import { useEffect, useRef, useState } from "react";

/* ── Keyframes & global styles ─────────────────────────── */
const KEYFRAMES = `
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap');

@keyframes fadeUp {
  from { opacity:0; transform:translateY(32px); }
  to   { opacity:1; transform:translateY(0); }
}
@keyframes fadeLeft {
  from { opacity:0; transform:translateX(-28px); }
  to   { opacity:1; transform:translateX(0); }
}
@keyframes fadeRight {
  from { opacity:0; transform:translateX(28px); }
  to   { opacity:1; transform:translateX(0); }
}
@keyframes fillBar {
  from { width:0%; }
  to   { width:var(--target-w); }
}
@keyframes glowPulse {
  0%,100% { box-shadow:0 0 10px rgba(88,166,255,.2); }
  50%      { box-shadow:0 0 26px rgba(88,166,255,.55); }
}
@keyframes borderFlow {
  0%   { background-position:0% 50%; }
  50%  { background-position:100% 50%; }
  100% { background-position:0% 50%; }
}
@keyframes scanline {
  0%   { top:-20%; }
  100% { top:120%; }
}
@keyframes blink {
  0%,100% { opacity:1; }
  50%      { opacity:0; }
}

.gn-font { font-family:'Outfit', sans-serif; }
.gn-mono { font-family:'JetBrains Mono', monospace; }

.skill-bar { animation:fillBar 1.2s cubic-bezier(0.16,1,0.3,1) forwards; }

.icon-float { transition:transform .6s cubic-bezier(0.34,1.56,0.64,1), color .4s; }
.icon-float:hover { transform:translateY(-4px) scale(1.15); }

.card-lift {
  transition:transform .55s cubic-bezier(0.34,1.56,0.64,1),
             box-shadow .55s ease, border-color .4s ease;
}
.card-lift:hover {
  transform:translateY(-5px);
  box-shadow:0 16px 48px rgba(0,0,0,.55), 0 0 0 1px rgba(88,166,255,.18);
  border-color:rgba(88,166,255,.3) !important;
}

.footer-link { transition:color .4s ease, transform .5s cubic-bezier(0.34,1.56,0.64,1); }
.footer-link:hover { color:#58a6ff !important; transform:translateX(4px); }
`;

/* ── Hook: scroll-triggered visibility ─────────────────── */
export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ── Hook: inject global styles once ───────────────────── */
export function useGnStyles() {
  useEffect(() => {
    if (document.getElementById("gn-section-styles")) return;
    const tag = document.createElement("style");
    tag.id = "gn-section-styles";
    tag.textContent = KEYFRAMES;
    document.head.appendChild(tag);
  }, []);
}