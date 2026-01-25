import React from 'react';

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

export default function Skills() {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2 inline-block">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}