'use client';

import { JSX } from "react";
import { FaReact, FaNodeJs, FaJava, FaPython, FaDatabase, FaProjectDiagram } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiVite, SiAngular, SiExpo, SiMysql, SiMongodb, SiFirebase, SiSpringboot } from "react-icons/si";

interface Skill {
  name: string;
  level: number;
  icons?: JSX.Element[]; // plusieurs logos
}

const skills: Skill[] = [
  {
    name: "TypeScript / Next.js / React / Vite",
    level: 90,
    icons: [
      <SiTypescript className="text-blue-500" key="ts" />,
      <SiNextdotjs className="text-white" key="next" />,
      <FaReact className="text-cyan-400" key="react" />,
      <SiVite className="text-purple-500" key="vite" />
    ],
  },
  {
    name: "React Native / Expo / Ionic / Angular",
    level: 75,
    icons: [
      <FaReact className="text-cyan-400" key="react-native" />,
      <SiExpo className="text-purple-500" key="expo" />,
      <SiAngular className="text-red-600" key="angular" />
    ],
  },
  {
    name: "Node.js / Express.js",
    level: 80,
    icons: [<FaNodeJs className="text-green-500" key="node" />],
  },
  {
    name: "Python / Flask",
    level: 70,
    icons: [<FaPython className="text-yellow-400" key="python" />],
  },
  {
    name: "Java / Spring Boot",
    level: 75,
    icons: [
      <FaJava className="text-red-500" key="java" />,
      <SiSpringboot className="text-green-700" key="spring" />
    ],
  },
  {
    name: "SQL (PostgreSQL / MySQL)",
    level: 80,
    icons: [<SiMysql className="text-blue-600" key="mysql" />],
  },
  {
    name: "NoSQL (MongoDB / Firebase)",
    level: 65,
    icons: [
      <SiMongodb className="text-green-600" key="mongodb" />,
      <SiFirebase className="text-yellow-400" key="firebase" />
    ],
  },
  {
    name: "Gestion de projets logiciels",
    level: 70,
    icons: [<FaProjectDiagram className="text-orange-400" key="project" />], // logo parlant
  },
];

export default function Competences() {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">Compétences</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-gray-900 p-4 rounded-xl shadow-lg flex items-center gap-4">
            <div className="flex gap-2 text-2xl">
              {skill.icons?.map((icon) => icon)}
            </div>
            <div className="w-full">
              <div className="flex justify-between mb-1 font-medium text-gray-200">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
