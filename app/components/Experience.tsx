'use client';

export default function Experience() {
  const experiences = [
    {
      role: "Développeur Full-Stack - Application de Gestion de Stock",
      year: "Nov 2025",
      company: "Orient Belge Sarl",
      details: [
        "Analyse et conception",
        "Développement frontend",
        "Développement backend",
      ],
    },
    {
      role: "Chef de Projet - Application EcoSolar",
      year: "2023 - Présent",
      company: "Young Ecolo",
      details: [
        "Analyse et conception",
        "Développement frontend",
        "Développement backend",
      ],
    },
    {
      role: "Chef de Projet - Application MonFax",
      year: "Août 2025 - Présent",
      company: "Particulier",
      details: [
        "Analyse et conception",
        "Gestion d'équipe",
        "Développement frontend",
      ],
    },
  ];
  
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>

      <div className="border-l border-gray-700 ml-4">
        {experiences.map((exp, i) => (
          <div key={i} className="ml-6 mb-6">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-blue-400">{exp.company}</p>
            <p className="text-gray-400 mb-2">{exp.year}</p>
            {exp.details && (
              <ul className="list-disc list-inside text-gray-400">
                {exp.details.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
