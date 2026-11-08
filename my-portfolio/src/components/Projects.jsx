import React, { memo } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

// Bolt: Wrapped in React.memo() to prevent unnecessary re-renders when parent component updates
const Projects = memo(function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
});

export default Projects;
