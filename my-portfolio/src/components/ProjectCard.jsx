import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
      
      {/* Image Section */}
      <div className="h-48 overflow-hidden shrink-0">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Button */}
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-auto inline-block w-full text-center bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          View Code &rarr;
        </a>
      </div>
    </div>
  );
}