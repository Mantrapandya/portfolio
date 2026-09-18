import React from 'react';
import { Database, BarChart3, Wrench, CheckCircle, ShieldCheck } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 1:
        return <BarChart3 className="w-5 h-5 text-blue-400" />;
      case 2:
        return <Wrench className="w-5 h-5 text-purple-400" />;
      default:
        return <CheckCircle className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative border-t border-slate-900 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 font-mono">
            <span>02</span>
            <span className="w-6 h-px bg-emerald-500/40"></span>
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Technical Skills &amp; Applied Toolset
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Truthfully documented skills grounded in completed academic coursework, hands-on portfolio projects, and internship experience at Infolabz IT Services.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700/80 transition-all duration-300 shadow-lg shadow-black/20 group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(idx)}
                  </div>
                  <h3 className="text-lg font-bold text-white font-heading">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/70 text-slate-200 text-xs font-medium flex items-center gap-1.5 hover:border-emerald-500/50 hover:bg-slate-800 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verification Context */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Verified in Portfolio Projects &amp; GitHub</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
