import React, { memo } from 'react';
import { education } from '../data/education';

const statusClasses = {
  blue: 'bg-blue-50 text-blue-800 ring-blue-100',
};

function GraduationCap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
      <path d="m2 9 10-5 10 5-10 5L2 9Z" />
      <path d="M6 11v6c4 3 8 3 12 0v-6M22 9v7" />
    </svg>
  );
}

const Education = memo(function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="max-w-[1600px] mx-auto py-12 px-4 sm:px-6 lg:px-12 scroll-mt-16">
      <h2 id="education-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
        Education
      </h2>

      <ul aria-label="Academic qualifications" className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {education.map((entry) => (
          <li key={entry.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <GraduationCap />
              </div>
              <p aria-label="Years of study" className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-600 whitespace-nowrap">
                <time dateTime={String(entry.startYear)}>{entry.startYear}</time>
                {entry.endYear !== entry.startYear && (
                  <> – <time dateTime={String(entry.endYear)}>{entry.endYear}</time></>
                )}
              </p>
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2">{entry.level}</p>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug mb-2">{entry.qualification}</h3>
            <p className="font-semibold text-gray-700">{entry.institution}</p>
            <p className="text-sm text-gray-500 mt-1">{entry.location}</p>

            {entry.status && (
              <div className="mt-5">
                <p className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${statusClasses[entry.statusTone]}`}>
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.78-9.97a.75.75 0 0 0-1.06-1.06L9 10.69 7.28 8.97a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l4.25-4.25Z" clipRule="evenodd" />
                  </svg>
                  {entry.status}
                </p>
              </div>
            )}

            <p className="text-sm leading-6 text-gray-600 mt-4 mb-6">{entry.summary}</p>

            <div className="mt-auto border-t border-gray-100 pt-5">
              <ul aria-label={`Recognition for ${entry.qualification}`} className="flex flex-wrap gap-2">
                {entry.recognition.map((recognition) => (
                  <li key={recognition} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                    {recognition}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
});

export default Education;
