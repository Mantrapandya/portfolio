import React from 'react';
import { Award, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 lg:py-28 relative border-t border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 font-mono">
            <span>06</span>
            <span className="w-6 h-px bg-emerald-500/40"></span>
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Certifications &amp; Training
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Professional certifications, analytics credentials, and job simulation training programs.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 shadow-xl shadow-black/20 group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60">
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-2 group-hover:text-emerald-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {cert.focus}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {cert.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/60 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
