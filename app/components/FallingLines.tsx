"use client";

import { useEffect, useState } from "react";

const symbols = ["TS", "{}","=>", "//", "[]", "</>", "fn", "&&", "||", "??", "0", "1"];

interface Line {
  id: number;
  symbol: string;
  left: string;
  animationDelay: string;
  animationDuration: string;
}

const STYLES = `
  @keyframes fall {
    0%   { transform: translateY(-40px); opacity: 0; }
    10%  { opacity: 0.7; }
    90%  { opacity: 0.4; }
    100% { transform: translateY(100vh); opacity: 0; }
  }
  .falling-code { 
    position: absolute;
    top: 0;
    animation: fall linear infinite;
    user-select: none;
    pointer-events: none;
  }
`;

export default function FallingLines({ count = 18 }: { count?: number }) {
  const [lines, setLines] = useState<Line[]>([]);

  /* Generate random values ONLY on the client to avoid hydration mismatch */
  useEffect(() => {
    const generated: Line[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: `${(Math.random() * 96).toFixed(4)}%`,
      animationDelay: `${(Math.random() * 8).toFixed(4)}s`,
      animationDuration: `${(6 + Math.random() * 8).toFixed(4)}s`,
    }));
    setLines(generated);

    /* inject keyframes once */
    if (!document.getElementById("falling-styles")) {
      const tag = document.createElement("style");
      tag.id = "falling-styles";
      tag.textContent = STYLES;
      document.head.appendChild(tag);
    }
  }, [count]);

  /* Render nothing on the server — avoids hydration mismatch entirely */
  if (lines.length === 0) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {lines.map((line) => (
        <span
          key={line.id}
          className="falling-code text-xs md:text-sm font-mono text-green-400 opacity-70"
          style={{
            left: line.left,
            animationDelay: line.animationDelay,
            animationDuration: line.animationDuration,
          }}
        >
          {line.symbol}
        </span>
      ))}
    </div>
  );
}