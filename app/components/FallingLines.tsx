'use client';

const symbols = [
  "{", "}", "(", ")", "[", "]", "<", ">", "=", "+", "-", "*", "/", 
  ";", "console.log", "React", "Node.js", "JS", "TS", "HTML", "CSS", "Python"
];

export default function FallingCode() {
  const items = Array.from({ length: 50 }); 

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {items.map((_, i) => {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        return (
          <span
            key={i}
            className="falling-code text-xs md:text-sm font-mono text-green-400 opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 5}s`,
            }}
          >
            {symbol}
          </span>
        );
      })}
    </div>
  );
}
