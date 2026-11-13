import React, { Suspense, lazy } from 'react';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Navigation from './components/Navigation';
import Contact from './components/Contact';

// Lazy load the projects section to reduce initial bundle size
const Projects = lazy(() => import('./components/Projects'));

// Bolt: Moved static fallback JSX object outside of the App component to prevent it from being unnecessarily recreated in memory and triggering garbage collection on every render cycle.
const projectsFallback = (
  <>
    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
      Projects
    </h2>
    <div
      className="h-64 flex flex-col items-center justify-center text-gray-500 gap-4"
      role="status"
      aria-live="polite"
    >
      <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin" aria-hidden="true"></div>
      <span className="text-sm font-medium">Loading projects...</span>
    </div>
  </>
);

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

      <Navigation />

      {/* Hero Section (Intro & Avatar) */}
      <Hero /> 
      
      {/* Main Content Area */}
      <main id="main-content" tabIndex={-1} className="outline-none">
        {/* Projects Section */}
        <section id="projects" aria-label="Projects" className="max-w-[1600px] mx-auto py-12 px-4 sm:px-6 lg:px-12 scroll-mt-16">
          {/* Grid of Projects (Code Split) */}
          <Suspense fallback={projectsFallback}>
            <Projects />
          </Suspense>
        </section>

        <Education />

        {/* Skills & Certifications Section */}
        <div className="max-w-[1600px] mx-auto py-12 px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-12">
            <div className="xl:col-span-3"><Skills /></div>
            <div className="xl:col-span-2"><Certifications /></div>
          </div>
        </div>

        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-8 text-center">
        <p>© {new Date().getFullYear()} Arjun Ramphal. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
