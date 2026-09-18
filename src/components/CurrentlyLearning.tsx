import React from 'react';
import { BookOpen, Sparkles, Cpu, GitBranch, ArrowUpRight } from 'lucide-react';
import { currentlyLearningData } from '../data/portfolioData';

export const CurrentlyLearning: React.FC = () => {
  return (
    <section id="learning" className="py-16 lg:py-20 relative border-t border-slate-900 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Growth &amp; Curiosity</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading">
            Currently Learning
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Disciplined technical exploration in progress. These represent active study areas and practical experiments, presented transparently as learning tracks rather than established expertise.
          </p>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentlyLearningData.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-slate-900/40 border border-slate-800/80 p-6 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    {index === 0 && <Cpu className="w-4 h-4" />}
                    {index === 1 && <Sparkles className="w-4 h-4" />}
                    {index === 2 && <GitBranch className="w-4 h-4" />}
                  </div>
                  <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 font-heading">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-1.5 mb-4">
                  <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block">
                    Focus Topics:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.keyTopics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/60"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 italic pt-3 border-t border-slate-800/60">
                Transparently shared as developmental learning.
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
