'use client';

import { useState } from "react";
import { projects } from "../data/projects"; 
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  // Animation variants pour Framer Motion
  const variants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <section id="projects" className="my-12">
      <h2 className="text-3xl font-bold mb-6">Projets</h2>

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
        <AnimatePresence mode="wait">
          {currentProjects.map((p, i) => (
            <motion.div
              key={p.title} // Framer Motion recommande une clé unique
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-[#0B0F1A] p-6 rounded-xl border border-gray-800 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 mb-2">{p.desc}</p>
              <p className="text-gray-500 italic mb-4">{p.tech}</p>

              {/* Carrousel d’images simple */}
              <div className="flex space-x-2 overflow-x-auto mb-4">
                {p.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${p.title} screenshot ${idx + 1}`}
                    className="w-32 h-20 object-cover rounded-md shrink-0"
                  />
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-500 hover:underline font-medium"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination avec icônes */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="p-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50"
        >
          <FiChevronLeft size={24} />
        </button>

        <span className="text-gray-300">
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="p-2 bg-gray-700 text-white rounded hover:bg-gray-600 disabled:opacity-50"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
