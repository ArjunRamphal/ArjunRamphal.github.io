import React from 'react';

const monthFormatter = new Intl.DateTimeFormat('en-ZA', {
  month: 'short', year: 'numeric', timeZone: 'UTC',
});
const formatMonth = (value) => monthFormatter.format(new Date(`${value}-01T00:00:00Z`));

export default function ProjectDates({ project, className = '' }) {
  if (!project.startDate && !project.ongoing && !project.year) return null;
  return (
    <dl aria-label="Project dates" className={`flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 ${className}`}>
      {project.year && !project.startDate && !project.ongoing ? (
        <div className="flex gap-1">
          <dt className="font-medium text-gray-600">Year</dt>
          <dd><time dateTime={project.year}>{project.year}</time></dd>
        </div>
      ) : (
        <>
          {project.startDate && (
            <div className="flex gap-1">
              <dt className="font-medium text-gray-600">Start</dt>
              <dd><time dateTime={project.startDate}>{formatMonth(project.startDate)}</time></dd>
            </div>
          )}
          <div className="flex gap-1">
            <dt className="font-medium text-gray-600">{project.startDate ? 'End' : 'Status'}</dt>
            <dd>{project.endDate ? <time dateTime={project.endDate}>{formatMonth(project.endDate)}</time> : 'Present'}</dd>
          </div>
        </>
      )}
    </dl>
  );
}
