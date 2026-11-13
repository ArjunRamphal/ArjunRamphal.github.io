// src/components/Skills.jsx
import React, { memo } from 'react';

const skills = [
  {
    category: "Languages & Scripting",
    items: ["C#", "C++", "Java", "Python", "Kotlin", "SQL", "JavaScript", "HTML", "CSS", "Bash"]
  },
  {
    category: "Frameworks & Data",
    items: [".NET", "ASP.NET Web Forms", "React", "Tailwind CSS", "Jetpack Compose", "Flask", "Room", "SQLite", "SQL Server", "OpenCV", "PyTorch"]
  },
  {
    category: "Security & Networking",
    items: ["Kali Linux", "Nmap", "Cryptography"]
  },
  {
    category: "Tools & Infrastructure",
    items: ["Docker", "Git / GitHub", "Linux", "VMware", "Azure"]
  }
];

// Bolt: Wrapped in React.memo() to prevent unnecessary re-renders when parent component updates
const Skills = memo(function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-28">
      {/* Font updated to match */}
      <h2 id="skills-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
        Technical Skills
      </h2>
      
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((skillGroup) => (
          <li key={skillGroup.category} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2 inline-block">
              {skillGroup.category}
            </h3>
            <ul aria-label={`Skills in ${skillGroup.category}`} className="flex flex-wrap gap-2">
              {skillGroup.items.map((item) => (
                <li
                  key={item} 
                  className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-sm font-medium cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
});

export default Skills;
