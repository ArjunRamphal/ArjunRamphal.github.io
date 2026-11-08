// src/components/Skills.jsx
import React, { memo } from 'react';

const skills = [
  {
    category: "Languages & Scripting",
    items: ["C# / .NET", "C++", "Python", "SQL", "JavaScript", "Bash"]
  },
  {
    category: "Security & Networking",
    items: ["Kali Linux", "Nmap", "Cryptography"]
  },
  {
    category: "Tools & Infrastructure",
    items: ["Docker", "Git / GitHub", "Linux", "VMWare", "Azure"]
  }
];

// Bolt: Wrapped in React.memo() to prevent unnecessary re-renders when parent component updates
const Skills = memo(function Skills() {
  return (
    <div>
      {/* Font updated to match */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
        Technical Skills
      </h2>
      
      <div className="grid grid-cols-1 gap-6">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2 inline-block">
              {skillGroup.category}
            </h3>
            <ul aria-label={`Skills in ${skillGroup.category}`} className="flex flex-wrap gap-2">
              {skillGroup.items.map((item) => (
                <li
                  key={item} 
                  className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Skills;
