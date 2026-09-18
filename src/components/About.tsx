import React from 'react';
import { Database, LineChart, Code2, Briefcase, GraduationCap, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 font-mono">
            <span>01</span>
            <span className="w-6 h-px bg-emerald-500/40"></span>
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Computer Science Student Focusing on Data Analytics &amp; Python
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            {personalInfo.fullBio.map((paragraph, idx) => (
              <p key={idx} className="font-normal text-slate-300">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <Database className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-white text-sm">Data Cleaning &amp; Prep</h4>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Cleaning raw tables and API responses, dealing with missing values, and shaping columns with Pandas.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <LineChart className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-white text-sm">Exploratory Analysis</h4>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Checking distributions, finding correlations, and plotting clear charts to see what the data actually says.
                </p>
              </div>
            </div>
          </div>

          {/* Key Facts & Career Lens */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 font-heading flex items-center gap-2">
                <Compass className="w-5 h-5 text-emerald-400" />
                <span>Professional Snapshot</span>
              </h3>

              <dl className="space-y-4 text-sm">
                <div className="flex flex-col pb-3 border-b border-slate-800/80">
                  <dt className="text-xs text-slate-400 uppercase tracking-wider mb-1">Education</dt>
                  <dd className="font-semibold text-slate-200">
                    B.E. in Computer Science Engineering (NLJIET / GTU)
                  </dd>
                  <dd className="text-xs text-emerald-400 mt-0.5">Final-Year · CGPA 7.5 / 10.0</dd>
                </div>

                <div className="flex flex-col pb-3 border-b border-slate-800/80">
                  <dt className="text-xs text-slate-400 uppercase tracking-wider mb-1">Current Practical Experience</dt>
                  <dd className="font-semibold text-slate-200">
                    Data Analytics &amp; Machine Learning Intern
                  </dd>
                  <dd className="text-xs text-slate-400 mt-0.5">Infolabz IT Services Pvt. Ltd., Ahmedabad</dd>
                </div>

                <div className="flex flex-col pb-3 border-b border-slate-800/80">
                  <dt className="text-xs text-slate-400 uppercase tracking-wider mb-1">Target Roles</dt>
                  <dd className="font-semibold text-slate-200">
                    Data Analyst, Business Analyst (Entry Level), Applied Data Intern
                  </dd>
                </div>

                <div className="flex flex-col">
                  <dt className="text-xs text-slate-400 uppercase tracking-wider mb-1">Location &amp; Availability</dt>
                  <dd className="font-semibold text-slate-200">
                    Ahmedabad, Gujarat · Open to In-office, Hybrid, &amp; Remote roles
                  </dd>
                </div>
              </dl>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
