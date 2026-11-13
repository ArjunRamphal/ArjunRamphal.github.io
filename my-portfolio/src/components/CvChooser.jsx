import React, { useId, useRef } from 'react';
import { cvVersions } from '../data/cvs';

function DocumentIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" />
      <path d="M14 3v6h6M8 13h8M8 17h5" />
    </svg>
  );
}

export default function CvChooser() {
  const dialogId = useId();
  const dialogRef = useRef(null);
  const firstOptionRef = useRef(null);

  function openDialog() {
    dialogRef.current.showModal();
    firstOptionRef.current?.focus();
  }

  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) return;
    const { left, right, top, bottom } = event.currentTarget.getBoundingClientRect();
    if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) {
      dialogRef.current.close();
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        aria-haspopup="dialog"
        aria-controls={dialogId}
        className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-lg shadow-md hover:bg-blue-50 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-all duration-200"
      >
        <DocumentIcon className="w-5 h-5" />
        View CV
      </button>

      <dialog
        id={dialogId}
        ref={dialogRef}
        aria-labelledby={`${dialogId}-title`}
        aria-describedby={`${dialogId}-description`}
        onClick={closeOnBackdrop}
        className="fixed inset-0 m-auto h-fit max-h-[calc(100dvh_-_2rem)] w-[calc(100%_-_2rem)] max-w-xl overflow-y-auto rounded-2xl border border-gray-200 bg-white p-0 text-left text-gray-900 shadow-2xl backdrop:bg-slate-950/70 backdrop:backdrop-blur-sm"
      >
        <div className="relative p-6 sm:p-8">
          <button
            type="button"
            onClick={() => dialogRef.current.close()}
            aria-label="Close CV chooser"
            className="absolute right-4 top-4 rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="m6 6 12 12M6 18 18 6" />
            </svg>
          </button>

          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
            <DocumentIcon className="h-7 w-7" />
          </div>
          <h2 id={`${dialogId}-title`} className="text-2xl font-bold">My CV</h2>
          <p id={`${dialogId}-description`} className="mt-2 text-sm leading-6 text-gray-600">
            Choose the level of detail you need.
          </p>

          <ul aria-label="CV versions" className="mt-6 space-y-3">
            {cvVersions.map((version, index) => (
              <li key={version.id}>
                <a
                  ref={index === 0 ? firstOptionRef : null}
                  href={version.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${version.title.toLowerCase()} (PDF, opens in a new tab)`}
                  className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 hover:border-blue-400 hover:bg-blue-50/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-colors"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-800">{version.title}</h3>
                      <span className="text-xs text-gray-500">{version.pages} {version.pages === 1 ? 'page' : 'pages'} · PDF</span>
                    </div>
                    <p className="mt-1.5 text-sm leading-6 text-gray-600">{version.description}</p>
                  </div>
                  <svg className="h-5 w-5 shrink-0 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M14 3h7v7M21 3l-9 9M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  );
}
