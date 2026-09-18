import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { CurrentlyLearning } from './components/CurrentlyLearning';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Currently Learning (Separate Section) */}
        <CurrentlyLearning />

        {/* 5. Projects & Featured Projects */}
        <Projects />

        {/* 6. Experience Section */}
        <Experience />

        {/* 7. Education Section */}
        <Education />

        {/* 8. Certifications Section */}
        <Certifications />

        {/* 9. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
