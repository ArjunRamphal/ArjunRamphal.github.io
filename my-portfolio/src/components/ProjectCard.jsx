import React, { memo } from 'react';
import ProjectDates from './ProjectDates';
import ExternalLinkIcon from './ExternalLinkIcon';

const ProjectCard = memo(function ProjectCard({ project, onViewDetails }) {
  return (
    <li className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl focus-within:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
      <div className="h-48 overflow-hidden shrink-0 bg-gray-100">
        <img src={project.image} alt="" aria-hidden="true" loading="lazy" decoding="async" style={{ objectPosition: project.imagePosition, objectFit: project.imageFit }} className="w-full h-full object-cover group-hover:scale-105 group-focus-within:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        {project.subtitle && <p className="text-xs font-medium text-gray-500 mb-3">{project.subtitle}</p>}
        <ProjectDates project={project} className="mb-3" />
        <p className="text-gray-600 text-sm leading-6 mb-4">{project.description}</p>
        <ul aria-label="Technologies used" className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => <li key={tech} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-md cursor-default">{tech}</li>)}
        </ul>
        <div className="mt-auto flex items-center gap-4">
          <button type="button" aria-haspopup="dialog" aria-label={`View project details for ${project.title}`} onClick={() => onViewDetails(project)} className="group/btn flex-1 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-[0.98] transition-all duration-200">
            View project <span className="inline-block ml-1 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true">→</span>
          </button>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`View code for ${project.title} (opens in a new tab)`} className="inline-flex items-center gap-1 shrink-0 rounded text-sm font-semibold text-blue-700 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">GitHub <ExternalLinkIcon /></a>
        </div>
      </div>
    </li>
  );
});

export default ProjectCard;
