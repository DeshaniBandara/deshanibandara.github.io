import React, { useState } from 'react';
import { PERSONAL_INFO, CODE_SNIPPETS } from '../data/portfolioData';
import { NavTab } from '../types';

interface HeroSectionProps {
  setActiveTab: (tab: NavTab) => void;
  onOpenCvModal: () => void;
  onShowToast: (message: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  setActiveTab,
  onOpenCvModal,
  onShowToast
}) => {
  const [activeSnippetIdx, setActiveSnippetIdx] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);

  const currentSnippet = CODE_SNIPPETS[activeSnippetIdx];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopiedCode(true);
    onShowToast(`Copied ${currentSnippet.fileName} to clipboard`);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    onShowToast('Phone number copied to clipboard: ' + PERSONAL_INFO.phone);
  };

  return (
    <section className="flex flex-col px-4 sm:px-6 pt-4 pb-8 sm:pb-12 relative z-10 max-w-4xl mx-auto w-full">
      {/* Top System Badges */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {/* Terminal Pill */}
        <button
          onClick={() => {
            navigator.clipboard.writeText('print("Deshani Bandara")');
            onShowToast('Copied terminal command to clipboard!');
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0f1d]/80 dark:bg-[#0a0f1d]/80 light:bg-slate-100 border border-cyan-500/30 backdrop-blur-md shadow-sm hover:border-cyan-400 transition-colors text-left"
          title="Click to copy terminal command"
        >
          <span className="material-symbols-outlined text-[15px] text-cyan-400">terminal</span>
          <code className="font-['JetBrains_Mono'] text-xs text-cyan-400 font-medium tracking-tight">
            print("Deshani Bandara")
          </code>
        </button>

        {/* Availability Status Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-['JetBrains_Mono'] text-xs text-emerald-400 font-medium">
            Open to Dev & SQA Opportunities
          </span>
        </div>
      </div>

      {/* Role Sub-tag */}
      <div className="flex items-center gap-2 mb-2">
        <span className="w-5 h-[2px] bg-cyan-400 rounded-full" />
        <span className="font-['JetBrains_Mono'] text-xs sm:text-[13px] uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600 font-semibold">
          {PERSONAL_INFO.title}
        </span>
      </div>

      {/* Main Gradient Headline */}
      <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 mb-3 leading-tight">
        {PERSONAL_INFO.headlineLead} <br className="hidden sm:inline" />
        <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
          {PERSONAL_INFO.headlineSub}
        </span>
      </h1>

      {/* Bio Description */}
      <p className="font-['Inter'] text-[15px] sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 mb-6 leading-relaxed max-w-2xl">
        {PERSONAL_INFO.bio}
      </p>

      {/* Visual Code-Snippet Banner Card */}
      <div className="w-full rounded-xl bg-[#0a0f1d]/90 dark:bg-[#0a0f1d]/90 light:bg-slate-900 border border-white/10 p-3 sm:p-4 mb-6 shadow-xl relative overflow-hidden group">
        {/* Subtle Ambient Glow */}
        <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500 pointer-events-none" />

        {/* Window Dots Header & Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>

            {/* Snippet Selector Tabs */}
            <div className="flex items-center gap-1 ml-2 overflow-x-auto no-scrollbar">
              {CODE_SNIPPETS.map((snippet, idx) => (
                <button
                  key={snippet.fileName}
                  onClick={() => setActiveSnippetIdx(idx)}
                  className={`px-2 py-0.5 rounded text-[11px] font-['JetBrains_Mono'] transition-all ${
                    activeSnippetIdx === idx
                      ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {snippet.fileName}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCode}
              className="text-[11px] font-['JetBrains_Mono'] text-slate-400 hover:text-cyan-400 flex items-center gap-1 px-2 py-0.5 rounded hover:bg-white/5 transition-colors"
              title="Copy code snippet"
            >
              <span className="material-symbols-outlined text-[14px]">
                {copiedCode ? 'done' : 'content_copy'}
              </span>
              <span>{copiedCode ? 'Copied' : 'Copy'}</span>
            </button>
            <span className="font-['JetBrains_Mono'] text-[11px] text-cyan-400 flex items-center gap-1 px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
              <span className="material-symbols-outlined text-[13px]">check_circle</span> verified
            </span>
          </div>
        </div>

        {/* Code Preview Area */}
        <pre className="font-['JetBrains_Mono'] text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto no-scrollbar py-1">
          <code>
            {currentSnippet.code}
          </code>
        </pre>
      </div>

      {/* Futuristic Transparent Glass Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-5">
        {/* Primary Glass CTA Button: Download CV */}
        <button
          onClick={onOpenCvModal}
          className="group relative w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 active:scale-[0.98] border border-cyan-400/40 backdrop-blur-xl transition-all duration-300 shadow-[0_0_24px_rgba(6,182,212,0.25)] text-left"
        >
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 via-transparent to-cyan-400/20 opacity-60 group-hover:opacity-100 transition-opacity" />
          <span className="material-symbols-outlined text-cyan-400 text-[22px] group-hover:translate-y-0.5 transition-transform">
            download
          </span>
          <span className="font-['JetBrains_Mono'] text-sm sm:text-[15px] font-semibold text-white dark:text-white light:text-slate-900 tracking-wide relative z-10">
            Download CV (.pdf)
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping ml-1" />
        </button>

        {/* Secondary Glass Button: Explore Hub */}
        <button
          onClick={() => {
            setActiveTab('ecosystem');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group relative w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#0f172a]/70 hover:bg-[#1a1f2e] active:scale-[0.98] border border-white/10 hover:border-violet-500/40 backdrop-blur-xl transition-all duration-300 shadow-md text-left"
        >
          <span className="material-symbols-outlined text-violet-400 text-[20px] group-hover:rotate-45 transition-transform duration-300">
            hub
          </span>
          <span className="font-['JetBrains_Mono'] text-sm sm:text-[15px] font-medium text-white dark:text-white light:text-slate-900">
            Explore Classes & Socials
          </span>
          <span className="material-symbols-outlined text-slate-400 text-[18px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>

      {/* Quick Direct Social & Reach Chips */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        {/* LinkedIn */}
        <a
          href={PERSONAL_INFO.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0f172a]/70 dark:bg-[#0f172a]/70 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 backdrop-blur-md text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 hover:border-cyan-400/40 transition-all text-xs font-['JetBrains_Mono'] font-medium"
        >
          <span className="material-symbols-outlined text-[16px] text-cyan-400">link</span>
          <span>LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href={PERSONAL_INFO.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0f172a]/70 dark:bg-[#0f172a]/70 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 backdrop-blur-md text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-violet-400 hover:border-violet-400/40 transition-all text-xs font-['JetBrains_Mono'] font-medium"
        >
          <span className="material-symbols-outlined text-[16px] text-violet-400">code_blocks</span>
          <span>GitHub</span>
        </a>

        {/* Direct Email */}
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0f172a]/70 dark:bg-[#0f172a]/70 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 backdrop-blur-md text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-emerald-400 hover:border-emerald-400/40 transition-all text-xs font-['JetBrains_Mono'] font-medium"
        >
          <span className="material-symbols-outlined text-[16px] text-emerald-400">mail</span>
          <span>Email Me</span>
        </a>

        {/* Direct Call with Copy Action */}
        <a
          href={`tel:${PERSONAL_INFO.phoneClean}`}
          onClick={handleCopyPhone}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0f172a]/70 dark:bg-[#0f172a]/70 light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 backdrop-blur-md text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 hover:border-cyan-400/40 transition-all text-xs font-['JetBrains_Mono'] font-medium"
          title="Click to copy / call"
        >
          <span className="material-symbols-outlined text-[16px] text-cyan-400">call</span>
          <span>{PERSONAL_INFO.phone}</span>
        </a>
      </div>
    </section>
  );
};
