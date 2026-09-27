import React from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed top-20 right-4 sm:right-6 z-50 max-w-sm w-full animate-in slide-in-from-top-3 fade-in duration-200">
      <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0f172a]/95 dark:bg-[#0f172a]/95 light:bg-slate-900/95 border border-cyan-500/40 text-white shadow-[0_8px_32px_rgba(6,182,212,0.35)] backdrop-blur-xl">
        <div className="flex items-center gap-2.5 min-w-0 pr-2">
          <span className="material-symbols-outlined text-cyan-400 text-[20px] flex-shrink-0">
            info
          </span>
          <p className="font-['Inter'] text-xs sm:text-[13px] text-slate-200 leading-snug truncate">
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 rounded-md transition-colors flex-shrink-0"
        >
          <span className="material-symbols-outlined text-[16px]">close</span>
        </button>
      </div>
    </div>
  );
};
