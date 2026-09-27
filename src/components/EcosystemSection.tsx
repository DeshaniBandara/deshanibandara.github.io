import React, { useState } from 'react';
import { ECOSYSTEMS, PHONICS_SAMPLE_WORDS } from '../data/portfolioData';

interface EcosystemSectionProps {
  onShowToast: (message: string) => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({ onShowToast }) => {
  const [activePhonicsWord, setActivePhonicsWord] = useState<string | null>(null);

  const speakWord = (word: string) => {
    setActivePhonicsWord(word);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 0.85; // slower, clear pedagogical pronunciation
      utterance.pitch = 1.05;
      utterance.lang = 'en-US';
      utterance.onend = () => setActivePhonicsWord(null);
      utterance.onerror = () => setActivePhonicsWord(null);
      window.speechSynthesis.speak(utterance);
      onShowToast(`Phonetic speech synthesis for "${word}"`);
    } else {
      onShowToast(`Phonics pronunciation for "${word}" (Audio API unavailable)`);
      setTimeout(() => setActivePhonicsWord(null), 800);
    }
  };

  return (
    <section id="ecosystems" className="flex flex-col px-4 sm:px-6 py-8 relative z-10 max-w-4xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-1.5">
        <span className="material-symbols-outlined text-emerald-400 text-[24px]">hub</span>
        <h2 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
          Ecosystems & Learning Hubs
        </h2>
      </div>
      <p className="font-['Inter'] text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6">
        Explore live channels, digital classrooms, and open-access resources.
      </p>

      {/* Ecosystem Cards Stack */}
      <div className="space-y-4 w-full mb-8">
        {/* Card 1: English For Kids (YouTube) */}
        <div className="rounded-xl bg-[#0f172a]/70 dark:bg-[#0f172a]/70 light:bg-slate-100/90 border border-white/8 dark:border-white/8 light:border-slate-200/80 p-4 sm:p-5 shadow-lg backdrop-blur-xl relative overflow-hidden transition-all hover:bg-[#161b2a] dark:hover:bg-[#161b2a] light:hover:bg-white group">
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <span className="material-symbols-outlined text-[20px]">smart_display</span>
              </div>
              <div>
                <span className="font-['JetBrains_Mono'] text-[11px] text-rose-400 uppercase font-bold tracking-wider">
                  Video Platform
                </span>
                <h3 className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 leading-tight">
                  English For Kids
                </h3>
              </div>
            </div>
            <span className="font-['JetBrains_Mono'] text-xs text-slate-400">
              @EnglishForKidsLk
            </span>
          </div>

          {/* Platform Graphic */}
          <div className="relative w-full h-44 sm:h-52 rounded-lg overflow-hidden mb-3 shadow-inner bg-slate-900 border border-white/5">
            <img
              src={ECOSYSTEMS[0].image}
              alt={ECOSYSTEMS[0].imageAlt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/40 to-transparent" />
            <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#030712]/85 backdrop-blur-md border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              <span className="font-['JetBrains_Mono'] text-xs text-white font-medium">
                Phonics & Vocab Series
              </span>
            </div>
          </div>

          <p className="font-['Inter'] text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mb-4 leading-relaxed">
            {ECOSYSTEMS[0].description}
          </p>

          <a
            href={ECOSYSTEMS[0].primaryAction.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 active:scale-[0.98] border border-rose-500/30 backdrop-blur-xl transition-all duration-300 shadow-[0_0_16px_rgba(244,63,94,0.2)]"
          >
            <span className="material-symbols-outlined text-rose-400 text-[20px] group-hover/btn:scale-110 transition-transform">
              play_circle
            </span>
            <span className="font-['JetBrains_Mono'] text-sm font-semibold text-white dark:text-white light:text-slate-900">
              Open YouTube Channel
            </span>
            <span className="material-symbols-outlined text-rose-400 text-[16px] group-hover/btn:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>

        {/* Card 2: Telegram Resource Hub */}
        <div className="rounded-xl bg-[#0f172a]/70 dark:bg-[#0f172a]/70 light:bg-slate-100/90 border border-white/8 dark:border-white/8 light:border-slate-200/80 p-4 sm:p-5 shadow-lg backdrop-blur-xl relative overflow-hidden transition-all hover:bg-[#161b2a] dark:hover:bg-[#161b2a] light:hover:bg-white group">
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <span className="material-symbols-outlined text-[20px]">send</span>
              </div>
              <div>
                <span className="font-['JetBrains_Mono'] text-[11px] text-cyan-400 uppercase font-bold tracking-wider">
                  Broadcast Hub
                </span>
                <h3 className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 leading-tight">
                  Telegram Resource Hub
                </h3>
              </div>
            </div>
            <span className="font-['JetBrains_Mono'] text-xs text-slate-400">
              t.me/Englishforkids_Lk
            </span>
          </div>

          {/* Platform Graphic */}
          <div className="relative w-full h-40 sm:h-48 rounded-lg overflow-hidden mb-3 shadow-inner bg-slate-900 border border-white/5">
            <img
              src={ECOSYSTEMS[1].image}
              alt={ECOSYSTEMS[1].imageAlt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/40 to-transparent" />
            <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#030712]/85 backdrop-blur-md border border-white/10">
              <span className="material-symbols-outlined text-cyan-400 text-[14px]">inventory_2</span>
              <span className="font-['JetBrains_Mono'] text-xs text-white font-medium">
                Instant PDF Handouts
              </span>
            </div>
          </div>

          <p className="font-['Inter'] text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mb-4 leading-relaxed">
            {ECOSYSTEMS[1].description}
          </p>

          <a
            href={ECOSYSTEMS[1].primaryAction.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 active:scale-[0.98] border border-cyan-500/30 backdrop-blur-xl transition-all duration-300 shadow-[0_0_16px_rgba(6,182,212,0.2)]"
          >
            <span className="material-symbols-outlined text-cyan-400 text-[20px] group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform">
              send
            </span>
            <span className="font-['JetBrains_Mono'] text-sm font-semibold text-white dark:text-white light:text-slate-900">
              Access Resources
            </span>
            <span className="material-symbols-outlined text-cyan-400 text-[16px] group-hover/btn:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>

        {/* Card 3: Facebook Platform & English Class Web */}
        <div className="rounded-xl bg-[#0f172a]/70 dark:bg-[#0f172a]/70 light:bg-slate-100/90 border border-white/8 dark:border-white/8 light:border-slate-200/80 p-4 sm:p-5 shadow-lg backdrop-blur-xl relative overflow-hidden transition-all hover:bg-[#161b2a] dark:hover:bg-[#161b2a] light:hover:bg-white group">
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400">
                <span className="material-symbols-outlined text-[20px]">groups</span>
              </div>
              <div>
                <span className="font-['JetBrains_Mono'] text-[11px] text-violet-400 uppercase font-bold tracking-wider">
                  Social & Web Portal
                </span>
                <h3 className="font-['Plus_Jakarta_Sans'] text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 leading-tight">
                  Facebook Platform
                </h3>
              </div>
            </div>
            <span className="font-['JetBrains_Mono'] text-xs text-slate-400">
              EnglishforkidszLk
            </span>
          </div>

          <p className="font-['Inter'] text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mb-4 leading-relaxed">
            {ECOSYSTEMS[2].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <a
              href={ECOSYSTEMS[2].primaryAction.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-violet-500/15 hover:bg-violet-500/25 active:scale-[0.98] border border-violet-500/30 backdrop-blur-xl transition-all duration-300 shadow-[0_0_16px_rgba(139,92,246,0.2)]"
            >
              <span className="material-symbols-outlined text-violet-400 text-[18px]">thumb_up</span>
              <span className="font-['JetBrains_Mono'] text-sm font-semibold text-white dark:text-white light:text-slate-900">
                Follow Platform
              </span>
              <span className="material-symbols-outlined text-violet-400 text-[16px] group-hover/btn:translate-x-1 transition-transform">
                open_in_new
              </span>
            </a>

            {ECOSYSTEMS[2].secondaryAction && (
              <a
                href={ECOSYSTEMS[2].secondaryAction.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 active:scale-[0.98] border border-emerald-500/30 backdrop-blur-xl transition-all duration-300 shadow-[0_0_16px_rgba(16,185,129,0.2)]"
              >
                <span className="material-symbols-outlined text-emerald-400 text-[18px]">language</span>
                <span className="font-['JetBrains_Mono'] text-sm font-semibold text-white dark:text-white light:text-slate-900">
                  Explore English Class Web
                </span>
                <span className="material-symbols-outlined text-emerald-400 text-[16px] group-hover/btn:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Phonics Pedagogy Soundboard */}
      <div className="w-full rounded-xl bg-[#0a0f1d]/90 dark:bg-[#0a0f1d]/90 light:bg-slate-900 border border-cyan-500/30 p-4 sm:p-5 shadow-xl relative overflow-hidden">
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-cyan-400 text-[20px]">volume_up</span>
          <div>
            <h4 className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-bold text-white tracking-tight">
              Phonics Phoneme Soundboard (Speech Synthesis)
            </h4>
            <p className="font-['JetBrains_Mono'] text-xs text-slate-400">
              Tap any phonics card to test pronunciation synthesis and phonetic segment analysis
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {PHONICS_SAMPLE_WORDS.map((item) => {
            const isPlaying = activePhonicsWord === item.word;
            return (
              <button
                key={item.word}
                onClick={() => speakWord(item.word)}
                className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                  isPlaying
                    ? 'bg-cyan-500/25 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)] scale-105'
                    : 'bg-white/5 border-white/10 hover:border-cyan-500/40 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-base text-white">
                    {item.word}
                  </span>
                  <span className="material-symbols-outlined text-[16px] text-cyan-400">
                    {isPlaying ? 'graphic_eq' : 'volume_up'}
                  </span>
                </div>
                <div className="font-['JetBrains_Mono'] text-xs text-cyan-300 font-semibold mb-0.5">
                  {item.ipa}
                </div>
                <div className="font-['JetBrains_Mono'] text-[10px] text-slate-400 truncate">
                  {item.blend}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
