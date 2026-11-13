import React, { useId, useState } from 'react';

const links = [
  ['Projects', '#projects'],
  ['Education', '#education'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between gap-6">
          <a href="#top" aria-label="Arjun Ramphal, back to top" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 rounded-lg font-bold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-sm tracking-wide text-white" aria-hidden="true">AR</span>
            <span>Arjun Ramphal</span>
          </a>
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {links.map(([label, href]) => (
              <a key={href} href={href} className="rounded text-sm font-semibold text-gray-600 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4">{label}</a>
            ))}
          </nav>
          <button type="button" aria-expanded={menuOpen} aria-controls={menuId} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-semibold text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
            Menu
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <nav id={menuId} aria-label="Mobile navigation" className="md:hidden grid grid-cols-2 gap-2 border-t border-gray-100 py-4">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-lg bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">{label}</a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
