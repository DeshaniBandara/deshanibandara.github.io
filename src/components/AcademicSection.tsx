import React, { useState } from 'react';
import { ACADEMIC_TIMELINE } from '../data/portfolioData';

export const AcademicSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('univ-vavuniya');

  return (
    <section className="flex flex-col px-4 sm:px-6 py-8 relative z-10 max-w-4xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-1.5">
        <span className="material-symbols-outlined text-cyan-400 text-[24px]">school</span>
        <h2 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
          Academic Background
        </h2>
      </div>
      <p className="font-['Inter'] text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mb-8">
        Structured engineering progression, language pedagogy, and technical grounding.
      </p>

      {/* Timeline Container with Glowing Center Node Line */}
      <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-violet-400 before:to-emerald-400">
        {ACADEMIC_TIMELINE.map((item) => {
          const isExpanded = expandedId === item.id;
          const nodeColors = {
            primary: 'bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] border-cyan-400/40',
            secondary: 'bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)] border-violet-400/40',
            tertiary: 'bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)] border-emerald-400/40'
          }[item.glowColor];

          const badgeStyles = {
            primary: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
            secondary: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
            tertiary: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
          }[item.glowColor];

          const titleColor = {
            primary: 'text-cyan-400',
            secondary: 'text-violet-400',
            tertiary: 'text-emerald-400'
          }[item.glowColor];

          return (
            <div key={item.id} className="relative group">
              {/* Glowing Timeline Node Marker */}
              <span
                className={`absolute -left-[27px] sm:-left-[35px] top-3 w-4 h-4 rounded-full bg-[#0a0f1d] border flex items-center justify-center transition-transform group-hover:scale-125 ${nodeColors}`}
              >
                <span className={`w-2 h-2 rounded-full ${titleColor.replace('text-', 'bg-')}`} />
              </span>

              {/* Card Container */}
              <div 
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className="p-4 sm:p-5 rounded-xl bg-[#0f172a]/70 dark:bg-[#0f172a]/70 light:bg-slate-100/90 border border-white/8 dark:border-white/8 light:border-slate-200/80 backdrop-blur-xl shadow-md transition-all duration-300 hover:border-white/20 hover:bg-[#161b2a] dark:hover:bg-[#161b2a] light:hover:bg-white cursor-pointer"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                  <span className={`font-['JetBrains_Mono'] text-xs font-semibold ${titleColor}`}>
                    {item.period}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full border font-['JetBrains_Mono'] text-[11px] font-medium ${badgeStyles}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 mb-0.5">
                  {item.institution}
                </h3>

                <p className="font-['JetBrains_Mono'] text-xs sm:text-[13px] text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium mb-2.5">
                  {item.degree}
                </p>

                <p className="font-['Inter'] text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3.5 pt-2 border-t border-white/5 dark:border-white/5 light:border-slate-200">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-white/5 dark:bg-white/5 light:bg-slate-200/60 border border-white/8 dark:border-white/8 light:border-slate-300 font-['JetBrains_Mono'] text-[11px] text-slate-300 dark:text-slate-300 light:text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
