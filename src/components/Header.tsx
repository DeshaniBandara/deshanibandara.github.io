import React, { useState } from 'react';
import { NavTab } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onOpenCvModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  isDarkMode,
  toggleDarkMode,
  onOpenCvModal
}) => {
  const [imageError, setImageError] = useState(false);

  const navItems: { tab: NavTab; label: string }[] = [
    { tab: 'home', label: 'Home' },
    { tab: 'about', label: 'Academic' },
    { tab: 'tech', label: 'Tech & SQA' },
    { tab: 'ecosystem', label: 'Ecosystem' },
    { tab: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-safe bg-[#030712]/85 dark:bg-[#030712]/85 light:bg-white/85 backdrop-blur-xl border-b border-white/8 dark:border-white/8 light:border-slate-200/80 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.5)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Zone */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group min-w-0"
        >
          {/* Logo / Badge */}
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden flex-shrink-0 bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.3)]">
            {!imageError ? (
              <img
                src={PERSONAL_INFO.avatarImage}
                alt="Deshani Bandara Tech Wordmark"
                className="w-full h-full object-cover object-center"
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="material-symbols-outlined text-cyan-400 text-[20px]">
                terminal
              </span>
            )}
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-[15px] sm:text-[17px] text-white dark:text-white light:text-slate-900 tracking-tight truncate group-hover:text-cyan-400 transition-colors">
                {PERSONAL_INFO.shortName}
              </span>
              <span className="font-['JetBrains_Mono'] text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-medium uppercase border border-cyan-500/20">
                {activeTab.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span className="font-['JetBrains_Mono'] text-[10px] sm:text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 truncate">
                {PERSONAL_INFO.status}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <button
              key={item.tab}
              onClick={() => setActiveTab(item.tab)}
              className={`px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all ${
                activeTab === item.tab
                  ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                  : 'text-slate-400 hover:text-white dark:hover:text-white light:text-slate-600 light:hover:text-slate-900 hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
          {/* Quick CV Viewer Button (Desktop) */}
          <button
            onClick={onOpenCvModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-all"
            title="View Deshani's Resume / CV"
          >
            <span className="material-symbols-outlined text-[16px] text-cyan-400">description</span>
            <span>CV</span>
          </button>

          {/* Theme Toggle (Dark / Light Mode) */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark/light mode"
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 dark:bg-white/5 dark:hover:bg-white/10 light:bg-slate-200/70 light:hover:bg-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 transition-all border border-white/10 dark:border-white/10 light:border-slate-300"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <span className="material-symbols-outlined text-[18px]">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Direct Send Contact Button */}
          <button
            onClick={() => setActiveTab('contact')}
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400 hover:bg-cyan-500/25 border border-cyan-500/30 transition-all shadow-[0_0_12px_rgba(6,182,212,0.25)] active:scale-95"
            title="Send Fast Message"
            aria-label="Contact Deshani"
          >
            <span className="material-symbols-outlined text-[18px]">send</span>
          </button>

          {/* Profile Badge Icon */}
          <button
            onClick={onOpenCvModal}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center flex-shrink-0 text-slate-950 font-bold shadow-md hover:opacity-90 transition-opacity"
            title="Deshani Bandara Profile"
          >
            <span className="material-symbols-outlined text-slate-950 text-[18px]">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};
