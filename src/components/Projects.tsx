import React, { useState } from 'react';
import { Github, ExternalLink, Sparkles, BarChart2, Layers, CheckCircle2, ChevronRight, Info, X } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'data-analytics', label: 'Data Analytics & EDA' },
    { id: 'bi-dashboard', label: 'Business Intelligence' },
    { id: 'ai-web', label: 'Applied AI & Web' }
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedFilter);

  const featuredProjects = projectsData.filter((p) => p.isFeatured);

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t border-slate-900 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 font-mono">
            <span>03</span>
            <span className="w-6 h-px bg-emerald-500/40"></span>
            <span>Real Technical Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Projects &amp; Data Analysis
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Real technical implementations and data analysis projects. Highlighting rigorous data preprocessing, statistical validation, exploratory patterns, and practical AI applications.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-800/80">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedFilter === cat.id
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/40 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/20 hover:-translate-y-1 group relative overflow-hidden"
            >
              {/* Featured Badge */}
              {project.isFeatured && (
                <div className="absolute top-0 right-0">
                  <div className="bg-emerald-500/10 text-emerald-400 text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-bl-xl border-l border-b border-emerald-500/20 font-bold">
                    Featured
                  </div>
                </div>
              )}

              <div>
                {/* Category Pill */}
                <div className="mb-4">
                  <span className="text-[11px] font-semibold text-emerald-400/90 tracking-wide uppercase font-mono">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-2.5 font-heading group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {project.shortDescription}
                </p>

                {/* Verified Findings / Key Metric Banner if available */}
                {project.findingsOrMetrics && project.findingsOrMetrics.length > 0 && (
                  <div className="mb-5 p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                    <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5 mb-1.5 font-mono">
                      <BarChart2 className="w-3.5 h-3.5" />
                      <span>Key Verified Findings:</span>
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.findingsOrMetrics[0]}
                    </p>
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700/60 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Details, GitHub, Live Demo */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Technical Details</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700"
                    aria-label={`View ${project.title} GitHub repository`}
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 transition-colors border border-emerald-500/30"
                      aria-label={`View ${project.title} live demo`}
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Technical Deep Dive Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl shadow-black relative">
            
            {/* Close Modal Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-4 pr-8">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                {activeModalProject.categoryLabel}
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight mt-1 font-heading">
                {activeModalProject.title}
              </h3>
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {activeModalProject.shortDescription}
            </p>

            {/* Key Implementation Functionality */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3">
                Key Technical Implementation:
              </h4>
              <ul className="space-y-2.5">
                {activeModalProject.keyFunctionality.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Verified Findings / Quantitative Results */}
            {activeModalProject.findingsOrMetrics && (
              <div className="mb-6 p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono mb-2">
                  Quantitative Findings / Business Highlights:
                </h4>
                <ul className="space-y-2">
                  {activeModalProject.findingsOrMetrics.map((finding, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-slate-300 list-disc list-inside">
                      {finding}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2.5">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Links */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs sm:text-sm font-semibold border border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Open Repository</span>
              </a>

              {activeModalProject.liveDemoUrl && (
                <a
                  href={activeModalProject.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
              )}

              <button
                onClick={() => setActiveModalProject(null)}
                className="ml-auto text-xs text-slate-400 hover:text-white px-3 py-2"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
