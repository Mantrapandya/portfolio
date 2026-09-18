import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 font-mono">
            <span>04</span>
            <span className="w-6 h-px bg-emerald-500/40"></span>
            <span>Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Practical Work Experience
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Real industry experience focusing on data preprocessing, exploratory analysis, and business intelligence reporting.
          </p>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="space-y-8 max-w-4xl">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 relative overflow-hidden shadow-xl shadow-black/20"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-2 h-full bg-emerald-400" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                    {exp.role}
                  </h3>
                  <h4 className="text-base font-semibold text-slate-300 mt-1">
                    {exp.company}
                  </h4>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-400 gap-1 font-mono">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-200 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    {exp.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-slate-400 mt-1">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                  Key Technical Contributions:
                </h5>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
