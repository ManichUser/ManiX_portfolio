"use client";

import { JSX } from "react";
import {
  FaReact, FaNodeJs, FaJava, FaPython, FaProjectDiagram,
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiVite, SiAngular, SiExpo,
  SiMysql, SiMongodb, SiFirebase, SiSpringboot,
} from "react-icons/si";
import { useInView, useGnStyles } from "../hook/useInView";

interface Skill {
  name: string;
  level: number;
  color: string;
  icons: JSX.Element[];
}

const skills: Skill[] = [
  {
    name: "TypeScript / Next.js / React / Vite",
    level: 60,
    color: "#58a6ff",
    icons: [
      <SiTypescript className="text-blue-400"   key="ts"   />,
      <SiNextdotjs  className="text-white"       key="next" />,
      <FaReact      className="text-cyan-400"    key="react"/>,
      <SiVite       className="text-purple-400"  key="vite" />,
    ],
  },
  {
    name: "React Native / Expo / Angular",
    level: 45,
    color: "#a5d6ff",
    icons: [
      <FaReact   className="text-cyan-400"   key="rn"  />,
      <SiExpo    className="text-purple-400" key="expo"/>,
      <SiAngular className="text-red-500"    key="ng"  />,
    ],
  },
  {
    name: "Node.js / Express.js",
    level: 60,
    color: "#3fb950",
    icons: [<FaNodeJs className="text-green-400" key="node" />],
  },
  {
    name: "Python / Flask",
    level: 60,
    color: "#f0883e",
    icons: [<FaPython className="text-yellow-400" key="py" />],
  },
  {
    name: "Java / Spring Boot",
    level: 65,
    color: "#ff7b72",
    icons: [
      <FaJava      className="text-red-400"   key="java"/>,
      <SiSpringboot className="text-green-500" key="sb"  />,
    ],
  },
  {
    name: "SQL (PostgreSQL / MySQL)",
    level: 70,
    color: "#58a6ff",
    icons: [<SiMysql className="text-blue-400" key="mysql" />],
  },
  {
    name: "NoSQL (MongoDB / Firebase)",
    level: 55,
    color: "#3fb950",
    icons: [
      <SiMongodb  className="text-green-500"  key="mongo"/>,
      <SiFirebase className="text-yellow-400" key="fb"   />,
    ],
  },
  {
    name: "Gestion de projets logiciels",
    level: 65,
    color: "#f0883e",
    icons: [<FaProjectDiagram className="text-orange-400" key="pm" />],
  },
];

export default function Competences() {
  useGnStyles();
  const { ref, visible } = useInView(0.1);

  return (
    <section
      id="skills"
      ref={ref}
      className="gn-font relative my-20 px-4 sm:px-8 max-w-5xl mx-auto"
    >
      {/* bg glow blob */}
      <div
        className="absolute -top-10 -right-10 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(88,166,255,0.05) 0%, transparent 70%)" }}
      />

      {/* Header */}
      <div
        style={{
          animation: visible ? "fadeUp .9s cubic-bezier(0.16,1,0.3,1) both" : "none",
          opacity: visible ? undefined : 0,
        }}
      >
        <div className="mb-10">
          <p className="gn-mono text-[11px] text-[#58a6ff] uppercase tracking-[.18em] mb-2 flex items-center gap-2">
            <span className="inline-block w-4 h-px bg-[#58a6ff]" />
            // skills
          </p>
          <h2 className="gn-font text-3xl sm:text-4xl font-extrabold text-[#e6edf3] leading-tight">
            Compétences
            <span
              className="inline-block w-1.5 h-7 ml-1 bg-[#58a6ff] rounded-sm align-middle"
              style={{ animation: "blink 1.2s step-end infinite" }}
            />
          </h2>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className="card-lift p-5 rounded-xl relative overflow-hidden"
            style={{
              background: "rgba(22,27,34,0.75)",
              border: "1px solid rgba(48,54,61,0.85)",
              animation: visible
                ? `fadeUp .8s cubic-bezier(0.16,1,0.3,1) ${0.05 + i * 0.055}s both`
                : "none",
              opacity: visible ? undefined : 0,
            }}
          >
            {/* top accent line */}
            <div
              className="absolute top-0 inset-x-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${skill.color}55, transparent)` }}
            />

            {/* Icons + percentage */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-2 text-[18px]">
                {skill.icons.map((ic, j) => (
                  <span key={j} className="icon-float">{ic}</span>
                ))}
              </div>
              <span
                className="gn-mono text-[11px] font-bold px-2 py-0.5 rounded-md"
                style={{
                  background: `${skill.color}14`,
                  color: skill.color,
                  border: `1px solid ${skill.color}33`,
                }}
              >
                {skill.level}%
              </span>
            </div>

            <p className="text-[#c9d1d9] text-[13px] font-medium mb-3">{skill.name}</p>

            {/* Progress bar */}
            <div
              className="w-full h-1.5 rounded-full overflow-hidden"
              style={{ background: "rgba(48,54,61,0.8)" }}
            >
              <div
                className="skill-bar h-full rounded-full"
                style={{
                  "--target-w": `${skill.level}%`,
                  background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                  boxShadow: `0 0 8px ${skill.color}55`,
                  animationDelay: `${0.1 + i * 0.055}s`,
                  animationPlayState: visible ? "running" : "paused",
                } as React.CSSProperties}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}