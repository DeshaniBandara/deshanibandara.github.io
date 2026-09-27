import React, { useEffect } from 'react';
import { PERSONAL_INFO, ACADEMIC_TIMELINE, CAPABILITIES } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (message: string) => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, onShowToast }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
    onShowToast('Preparing document for print / PDF export...');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0a0f1d] dark:bg-[#0a0f1d] light:bg-white border border-white/15 dark:border-white/15 light:border-slate-300 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200 dark:text-slate-200 light:text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Controls */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 dark:border-white/10 light:border-slate-200 bg-white/5 dark:bg-white/5 light:bg-slate-50">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-cyan-400">description</span>
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-white dark:text-white light:text-slate-900">
              Curriculum Vitae — {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 font-['JetBrains_Mono'] text-xs font-semibold transition-all cursor-pointer"
              title="Print or Save as PDF"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer"
              title="Close (ESC)"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
        </div>

        {/* CV Document Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-['Inter'] text-sm">
          {/* Candidate Bio Header */}
          <div className="border-b border-white/10 dark:border-white/10 light:border-slate-200 pb-5">
            <h1 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-white dark:text-white light:text-slate-900 mb-1">
              {PERSONAL_INFO.name}
            </h1>
            <p className="font-['JetBrains_Mono'] text-cyan-400 text-xs sm:text-sm font-semibold mb-3">
              Full-Stack Developer · SQA Specialist · English Linguistics Educator
            </p>
            <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs font-['JetBrains_Mono'] text-slate-400 dark:text-slate-400 light:text-slate-600">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-cyan-400">mail</span>
                {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-emerald-400">call</span>
                {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] text-violet-400">location_on</span>
                {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white dark:text-white light:text-slate-900 mb-2 uppercase tracking-wider text-xs border-b border-white/5 pb-1">
              Professional Summary
            </h2>
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-xs sm:text-sm">
              {PERSONAL_INFO.bio} Experienced in automated test script authoring, boundary verification, and architecting robust digital educational hubs with cross-platform reach.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white dark:text-white light:text-slate-900 mb-3 uppercase tracking-wider text-xs border-b border-white/5 pb-1">
              Education & Academic Grounding
            </h2>
            <div className="space-y-4">
              {ACADEMIC_TIMELINE.map((item) => (
                <div key={item.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline mb-0.5">
                    <span className="font-bold text-white dark:text-white light:text-slate-900 font-['Plus_Jakarta_Sans']">
                      {item.institution}
                    </span>
                    <span className="font-['JetBrains_Mono'] text-xs text-cyan-400">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium mb-1">
                    {item.degree}
                  </div>
                  <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Capabilities */}
          <div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white dark:text-white light:text-slate-900 mb-3 uppercase tracking-wider text-xs border-b border-white/5 pb-1">
              Key Technical & Engineering Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {CAPABILITIES.map((cap) => (
                <div key={cap.id} className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="font-bold text-white dark:text-white light:text-slate-900 block mb-1">
                    {cap.title}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {cap.skills.map((s) => (
                      <span key={s} className="px-1.5 py-0.5 rounded bg-white/5 font-['JetBrains_Mono'] text-[10px] text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ecosystems & Educational Initiatives */}
          <div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white dark:text-white light:text-slate-900 mb-2 uppercase tracking-wider text-xs border-b border-white/5 pb-1">
              Educational & Digital Initiatives
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700">
              <li><strong className="text-white dark:text-white light:text-slate-900">English For Kids (@EnglishForKidsLk):</strong> Educational video production and digital phonetic foundations for young learners.</li>
              <li><strong className="text-white dark:text-white light:text-slate-900">Telegram Resource Hub:</strong> Direct digital distribution of structured student workbooks, audio materials, and PDF flashcards.</li>
              <li><strong className="text-white dark:text-white light:text-slate-900">English Class Web Application:</strong> Open-access web platform deployed on GitHub Pages for interactive language learning.</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-white/10 dark:border-white/10 light:border-slate-200 bg-white/5 dark:bg-white/5 light:bg-slate-50 flex items-center justify-between text-xs font-['JetBrains_Mono'] text-slate-400">
          <span>Deshani Bandara Curriculum Vitae</span>
          <button
            onClick={onClose}
            className="text-cyan-400 hover:underline"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
