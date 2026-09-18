import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin, GraduationCap, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div
              id="hero-status-pill"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-slate-300 text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-emerald-950/20"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Fresher &amp; Internship Roles</span>
            </div>

            {/* Complete Full Name - exactly as requested: MANTRA PANDYA */}
            <h1
              id="hero-full-name"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3 font-heading"
            >
              MANTRA PANDYA
            </h1>

            {/* Subtitle - exactly as requested: Open to Opportunities */}
            <h2
              id="hero-subheading"
              className="text-2xl sm:text-3xl font-semibold text-emerald-400 tracking-tight mb-5 font-heading flex items-center gap-2"
            >
              Open to Opportunities
            </h2>

            {/* Short natural introduction based on Resume */}
            <p
              id="hero-intro-text"
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal"
            >
              I am a final-year Computer Science student at New L.J. Institute of Engineering &amp; Technology (NLJIET), Ahmedabad. I work with Python and SQL for data analysis, and enjoy turning messy datasets into clean charts, clear dashboards, and straightforward insights.
            </p>

            {/* Action Buttons - Exactly the 5 requested buttons */}
            <div id="hero-action-buttons" className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
              
              {/* Button 1: View Projects */}
              <a
                id="btn-view-projects"
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Button 2: GitHub */}
              <a
                id="btn-github-hero"
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/60 shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4 text-emerald-400" />
                <span>GitHub</span>
              </a>

              {/* Button 3: LinkedIn */}
              <a
                id="btn-linkedin-hero"
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all duration-200"
                aria-label="LinkedIn Profile - Mantra Pandya"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              {/* Button 5: Contact Me */}
              <a
                id="btn-contact-hero"
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Quick Context Highlights */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 border-t border-slate-800/80 pt-4">
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                B.E. Computer Science · CGPA: 7.5 / 10.0
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Ahmedabad, Gujarat, India
              </span>
            </div>

          </div>

          {/* Right Column: Professional Profile/Headshot Card Area */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              id="hero-profile-card"
              className="w-full max-w-md bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl shadow-black/40 relative overflow-hidden backdrop-blur-sm"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-blue-500" />

              {/* Profile Identity Visual */}
              <div className="flex flex-col items-center text-center">
                
                {/* Profile Portrait Monogram / Headshot Presentation */}
                <div className="relative mb-5">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-1 border-2 border-emerald-500/40 shadow-xl flex items-center justify-center relative overflow-hidden group">
                    <div className="w-full h-full rounded-xl bg-slate-950/80 flex flex-col items-center justify-center relative">
                      {/* Geometric Monogram Portrait Graphic */}
                      <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-emerald-400 font-heading tracking-wider">
                        MP
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 mt-1">
                        Candidate
                      </span>
                    </div>
                  </div>
                  
                  {/* Verified Presence Badge */}
                  <div
                    title="Actively Open to Opportunities"
                    className="absolute -bottom-2 -right-2 bg-slate-900 border border-emerald-500/50 text-emerald-400 p-1.5 rounded-full shadow-lg"
                  >
                    <CheckCircle2 className="w-4 h-4 fill-emerald-500/20" />
                  </div>
                </div>

                {/* Name & Academic Credentials */}
                <h3 className="text-xl font-bold text-white tracking-tight font-heading mb-1">
                  MANTRA PANDYA
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                  B.Tech CSE Final Year
                </p>
                <p className="text-xs text-slate-400 mb-5">
                  New L.J. Institute of Engineering &amp; Technology
                </p>

                {/* Key Profile Badges */}
                <div className="w-full grid grid-cols-2 gap-2 text-left mb-5">
                  <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80">
                    <span className="block text-[11px] text-slate-400">Target Roles</span>
                    <span className="text-xs font-semibold text-slate-200">Data Analyst / Tech</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80">
                    <span className="block text-[11px] text-slate-400">Academic Standing</span>
                    <span className="text-xs font-semibold text-emerald-400">7.5 / 10.0 CGPA</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80">
                    <span className="block text-[11px] text-slate-400">Core Stack</span>
                    <span className="text-xs font-semibold text-slate-200">Python · SQL · BI</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/70 border border-slate-800/80">
                    <span className="block text-[11px] text-slate-400">Internship</span>
                    <span className="text-xs font-semibold text-slate-200">Infolabz IT Services</span>
                  </div>
                </div>

                {/* Direct Connect Quick Links */}
                <div className="w-full pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center gap-1.5 font-medium"
                  >
                    <Mail className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Email Direct</span>
                  </a>
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium flex items-center gap-1"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
