import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section (Intro & Avatar) */}
      <Hero /> 
      
      {/* Skills Section (Languages & Tools) */}
      <Skills />

      {/* Main Content Area (Projects) */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
          Featured Projects
        </h2>
        
        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-8 text-center">
        <p>© {new Date().getFullYear()} Arjun Ramphal. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;