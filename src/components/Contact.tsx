import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Check, Copy, ArrowUpRight, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative border-t border-slate-900 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 font-mono">
            <span>07</span>
            <span className="w-6 h-px bg-emerald-500/40"></span>
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Let’s Connect
          </h2>
          <p className="mt-3 text-base text-slate-400">
            I am actively seeking fresher, internship, and entry-level opportunities in Data Analytics, Python development, and applied AI. Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Direct Communication Card */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-9 shadow-2xl">
            <h3 className="text-2xl font-bold text-white font-heading mb-3">
              Direct Contact Details
            </h3>
            <p className="text-sm text-slate-300 mb-8 leading-relaxed">
              Recruiters, hiring managers, and collaborators can reach me via email or phone. The email link below uses a standard mailto link that opens your default mail client directly.
            </p>

            <div className="space-y-4">
              
              {/* Email Block */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                      Email Address
                    </span>
                    <a
                      id="contact-email-link"
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-semibold text-slate-100 hover:text-emerald-400 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <button
                    id="btn-copy-email"
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-300 bg-emerald-950/50 hover:bg-emerald-900/50 transition-colors border border-emerald-500/30"
                  >
                    <span>Send Mail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone Block */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                      Phone Number
                    </span>
                    <a
                      id="contact-phone-link"
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-semibold text-slate-100 hover:text-blue-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="self-start sm:self-center inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-blue-300 bg-blue-950/50 hover:bg-blue-900/50 transition-colors border border-blue-500/30"
                >
                  <span>Call Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Location Block */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                    Location
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-slate-100">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Professional Channels & Social Links */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Profile Channels */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono mb-4">
                Professional Profiles
              </h4>

              <div className="space-y-3">
                <a
                  id="contact-github-link"
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                    <div>
                      <span className="text-xs text-slate-400 block">GitHub</span>
                      <span className="text-sm font-semibold text-slate-200">github.com/Mantrapandya</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
                </a>

                <a
                  id="contact-linkedin-link"
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn - Mantra Pandya"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-blue-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <div>
                      <span className="text-xs text-slate-400 block">LinkedIn</span>
                      <span className="text-sm font-semibold text-slate-200">Mantra Pandya</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
