import React from 'react';
import { GraduationCap, Award, Calendar, BookCheck, MapPin } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative border-t border-slate-900 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 font-mono">
            <span>05</span>
            <span className="w-6 h-px bg-emerald-500/40"></span>
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Education &amp; Qualifications
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Academic degree, university affiliations, and ongoing Computer Science Engineering qualifications.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 relative overflow-hidden shadow-xl shadow-black/20"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-2">
                    <GraduationCap className="w-4 h-4" />
                    <span>{edu.status}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                    {edu.degree}
                  </h3>
                  <h4 className="text-base font-semibold text-slate-300 mt-1">
                    {edu.institution}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Affiliated with {edu.university}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold font-mono">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.score}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400 font-mono">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {/* Coursework & Focus Points */}
              <div className="pt-4 border-t border-slate-800/80">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3">
                  Academic Focus &amp; Practical Training:
                </h5>
                <ul className="space-y-2.5">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-sm text-slate-300">
                      <BookCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
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
