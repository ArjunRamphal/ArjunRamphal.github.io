import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl focus-within:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
      
      {/* Image Section */}
      <div className="h-48 overflow-hidden shrink-0">
        {/* Bolt: Added decoding="async" alongside loading="lazy" to offload image decoding to a background thread, preventing main-thread blocking and scroll jank. */}
        <img 
          src={project.image} 
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 group-focus-within:scale-105 transition-transform duration-500"
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
        <ul aria-label="Technologies used" className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <li
              key={tech} 
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-md hover:bg-blue-200 transition-colors cursor-default"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Button */}
        <a 
          href={project.githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={`View code for ${project.title} (opens in a new tab)`}
          className="group/btn mt-auto inline-block w-full text-center bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 active:scale-[0.98] transition-all duration-200"
        >
          View Code <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1 group-focus-visible/btn:translate-x-1" aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}