import React from 'react';
import { NavTab } from '../types';

interface NavigationProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const items: { tab: NavTab; label: string; icon: string }[] = [
    { tab: 'home', label: 'Home', icon: 'terminal' },
    { tab: 'about', label: 'About', icon: 'badge' },
    { tab: 'tech', label: 'Tech', icon: 'verified' },
    { tab: 'ecosystem', label: 'Ecosystem', icon: 'hub' },
    { tab: 'contact', label: 'Contact', icon: 'mail' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pb-safe bg-[#0a0f1d]/90 dark:bg-[#0a0f1d]/90 light:bg-white/90 backdrop-blur-xl border-t border-white/8 dark:border-white/8 light:border-slate-200 shadow-[0_-8px_32px_-4px_rgba(0,0,0,0.6)]">
      <div className="max-w-md mx-auto flex justify-around items-center h-16 px-2">
        {items.map((item) => {
          const isActive = activeTab === item.tab;
          return (
            <button
              key={item.tab}
              onClick={() => {
                setActiveTab(item.tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center min-w-[54px] min-h-[48px] px-1 py-1 rounded-xl transition-all relative ${
                isActive
                  ? 'text-cyan-400 font-semibold after:absolute after:bottom-1.5 after:w-1.5 after:h-1.5 after:rounded-full after:bg-cyan-400 after:shadow-[0_0_8px_rgba(6,182,212,0.9)]'
                  : 'text-slate-400 dark:text-slate-400 light:text-slate-500 hover:text-white dark:hover:text-white light:hover:text-slate-900'
              }`}
            >
              <span className={`material-symbols-outlined text-[22px] transition-transform ${isActive ? 'scale-110' : ''}`}>
                {item.icon}
              </span>
              <span className="font-['JetBrains_Mono'] text-[11px] tracking-tight mt-0.5">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
