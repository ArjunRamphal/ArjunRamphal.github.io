import React, { useEffect, useId, useRef } from 'react';
import ProjectDates from './ProjectDates';
import ExternalLinkIcon from './ExternalLinkIcon';

export default function ProjectDetails({ project, onClose }) {
  const dialogRef = useRef(null);
  const headingRef = useRef(null);
  const id = useId();

  useEffect(() => {
    if (project && !dialogRef.current.open) {
      dialogRef.current.showModal();
      headingRef.current?.focus();
    }
  }, [project]);

  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialogRef.current.close();
  }

  const details = project?.details;

  return (
    <dialog ref={dialogRef} aria-labelledby={`${id}-title`} aria-describedby={`${id}-description`} onClose={onClose} onClick={closeOnBackdrop} className="fixed inset-0 m-auto h-fit max-h-[calc(100dvh_-_2rem)] w-[calc(100%_-_2rem)] max-w-4xl overflow-y-auto rounded-2xl border border-gray-200 bg-white p-0 text-gray-900 shadow-2xl backdrop:bg-slate-950/70 backdrop:backdrop-blur-sm">
      {project && (
        <>
          <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-gray-100 bg-white/95 px-6 py-4 backdrop-blur-sm sm:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">Project details</span>
            <button type="button" onClick={() => dialogRef.current.close()} aria-label="Close project details" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6" /></svg>
            </button>
          </div>
          <div className="p-6 sm:p-8">
            <p className="mb-3 text-sm font-semibold text-blue-700">{details?.context}</p>
            <h2 id={`${id}-title`} ref={headingRef} tabIndex={-1} className="text-2xl sm:text-3xl font-bold leading-tight outline-none">{project.title}</h2>
            {project.subtitle && <p className="mt-2 font-medium text-gray-500">{project.subtitle}</p>}
            <ProjectDates project={project} className="mt-4" />
            <p id={`${id}-description`} className="mt-5 leading-7 text-gray-600">{project.description}</p>

            <figure className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
              <img src={project.detailImage || project.image} alt={details?.imageAlt || `${project.title} preview`} className="h-60 sm:h-80 w-full object-contain" decoding="async" />
              <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-200 bg-white px-4 py-3 text-xs text-gray-500">
                <span>{details?.imageCaption || 'Project preview'}</span>
                <a href={project.detailImage || project.image} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size preview for ${project.title} (opens in a new tab)`} className="inline-flex items-center gap-1 rounded font-semibold text-blue-700 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">View full-size image <ExternalLinkIcon className="h-3 w-3" /></a>
              </figcaption>
            </figure>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <section aria-labelledby={`${id}-problem`}>
                <h3 id={`${id}-problem`} className="text-lg font-bold">The problem</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{details?.problem}</p>
              </section>
              <section aria-labelledby={`${id}-role`}>
                <h3 id={`${id}-role`} className="text-lg font-bold">My involvement</h3>
                <p className="mt-3 text-sm font-semibold text-blue-700">{details?.role}</p>
                <p className="mt-2 text-sm leading-7 text-gray-600">{details?.contribution}</p>
              </section>
            </div>

            <section aria-labelledby={`${id}-features`} className="mt-8">
              <h3 id={`${id}-features`} className="text-lg font-bold">What it does</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {details?.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 rounded-lg bg-gray-50 p-4 text-sm leading-6 text-gray-700">
                    <svg className="mt-1 h-4 w-4 shrink-0 text-blue-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd" /></svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby={`${id}-outcome`} className="mt-8 rounded-xl border border-blue-100 bg-blue-50/60 p-5">
              <h3 id={`${id}-outcome`} className="font-bold text-blue-900">{details?.outcomeLabel || 'Outcome'}</h3>
              <p className="mt-2 text-sm leading-7 text-gray-700">{details?.outcome}</p>
            </section>

            <ul aria-label="Project technologies" className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => <li key={tech} className="rounded-md bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">{tech}</li>)}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-gray-100 pt-6">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`View source code for ${project.title} (opens in a new tab)`} className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">View source code <ExternalLinkIcon /></a>
              {details?.documentationUrl && <a href={details.documentationUrl} target="_blank" rel="noopener noreferrer" aria-label={`Read documentation for ${project.title} (opens in a new tab)`} className="rounded text-sm font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">Project documentation</a>}
            </div>
          </div>
        </>
      )}
    </dialog>
  );
}
