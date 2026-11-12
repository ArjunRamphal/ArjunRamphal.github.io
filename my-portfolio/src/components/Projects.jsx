import React, { memo, useMemo, useState } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

// Bolt: Wrapped in React.memo() to prevent unnecessary re-renders when parent component updates
const Projects = memo(function Projects() {
  const [sortOrder, setSortOrder] = useState('oldest');
  const sortedProjects = useMemo(() => {
    const ordered = [...projects].sort((a, b) => {
      const startOrder = (a.startDate || a.sortDate || '9999-12').localeCompare(b.startDate || b.sortDate || '9999-12');
      return startOrder || (a.endDate || '9999-12').localeCompare(b.endDate || '9999-12');
    });
    return sortOrder === 'newest' ? ordered.reverse() : ordered;
  }, [sortOrder]);

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-end gap-3">
        <label htmlFor="project-sort" className="text-sm font-medium text-gray-700">
          Sort projects
        </label>
        <select
          id="project-sort"
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
        >
          <option value="oldest">Oldest to newest</option>
          <option value="newest">Newest to oldest</option>
        </select>
      </div>
      <p role="status" className="sr-only">
        Projects sorted {sortOrder === 'oldest' ? 'oldest to newest' : 'newest to oldest'}.
      </p>
      <ul aria-label="Projects list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </>
  );
});

export default Projects;
