import React from 'react';
import { profile } from '../data/profile';
import ExternalLinkIcon from './ExternalLinkIcon';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-12 scroll-mt-28">
      <div className="rounded-2xl bg-slate-900 px-6 py-10 sm:p-12 lg:p-14 text-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-300 mb-3">{profile.location}</p>
            <h2 id="contact-heading" className="text-3xl font-bold mb-4">Get in touch</h2>
            <p className="text-slate-300 leading-7">I’m interested in graduate and junior opportunities in software development, AI and cybersecurity. If you have a role or a project in mind, I’d be glad to hear from you.</p>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-4">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-3 rounded-lg bg-white px-6 py-3 font-bold text-slate-900 hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-slate-900">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
              Email me
            </a>
            <a href={`mailto:${profile.email}`} className="rounded text-sm text-slate-300 underline underline-offset-4 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-slate-900">{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn (opens in a new tab)" className="inline-flex items-center gap-1 rounded text-sm font-semibold text-blue-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-slate-900">Connect on LinkedIn <ExternalLinkIcon /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
