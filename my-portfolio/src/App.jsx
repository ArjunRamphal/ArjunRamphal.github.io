import React, { Suspense, lazy } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Certifications from './components/Certifications';

// Lazy load the projects section to reduce initial bundle size
const Projects = lazy(() => import('./components/Projects'));

function App() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      
      {/* Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-slate-900 text-white font-bold rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transition-transform"
      >
        Skip to main content
      </a>

      {/* Hero Section (Intro & Avatar) */}
      <Hero /> 
      
      {/* Skills & Certifications Section */}
      <section className="max-w-[1600px] mx-auto py-12 px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Skills />
          <Certifications />
        </div>
      </section>

      {/* Main Content Area (Projects) */}
      <main id="main-content" className="max-w-[1600px] mx-auto py-12 px-4 sm:px-6 lg:px-12 scroll-mt-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
          Featured Projects
        </h2>
        
        {/* Grid of Projects (Code Split) */}
        <Suspense fallback={<div className="h-64 flex items-center justify-center text-gray-500">Loading projects...</div>}>
          <Projects />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-8 text-center">
        <p>© {new Date().getFullYear()} Arjun Ramphal. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
