import React, { useState } from 'react';
import { CAPABILITIES, INITIAL_TEST_CASES } from '../data/portfolioData';
import { TestCase } from '../types';

interface TechSectionProps {
  onShowToast: (message: string) => void;
}

export const TechSection: React.FC<TechSectionProps> = ({ onShowToast }) => {
  const [testCases, setTestCases] = useState<TestCase[]>(INITIAL_TEST_CASES);
  const [isRunningTests, setIsRunningTests] = useState(false);
  const [testsCompleted, setTestsCompleted] = useState(true);

  const runTestSuite = () => {
    setIsRunningTests(true);
    setTestsCompleted(false);

    // Set all to running
    setTestCases((prev) =>
      prev.map((tc) => ({
        ...tc,
        status: 'running'
      }))
    );

    // Simulate progressive completion
    INITIAL_TEST_CASES.forEach((tc, index) => {
      setTimeout(() => {
        setTestCases((prev) =>
          prev.map((item, idx) =>
            idx === index
              ? { ...item, status: 'passed' }
              : item
          )
        );

        if (index === INITIAL_TEST_CASES.length - 1) {
          setIsRunningTests(false);
          setTestsCompleted(true);
          onShowToast('✓ All automated SQA test cases passed successfully (0 regressions)');
        }
      }, (index + 1) * 350);
    });
  };

  return (
    <section className="flex flex-col px-4 sm:px-6 py-8 relative z-10 max-w-4xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-1.5">
        <span className="material-symbols-outlined text-violet-400 text-[24px]">
          developer_mode_tv
        </span>
        <h2 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
          Core Technical Capabilities
        </h2>
      </div>
      <p className="font-['Inter'] text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mb-6">
        Hover over blocks to trigger dynamic interactive glow transitions.
      </p>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 w-full mb-8">
        {CAPABILITIES.map((cap) => {
          const colorConfig = {
            primary: {
              iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
              glow: 'hover:shadow-[0_0_24px_rgba(6,182,212,0.25)] group-hover:bg-cyan-500/20',
              dot: 'bg-cyan-400',
              text: 'text-cyan-400',
              borderHover: 'hover:border-cyan-500/40'
            },
            secondary: {
              iconBg: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
              glow: 'hover:shadow-[0_0_24px_rgba(139,92,246,0.25)] group-hover:bg-violet-500/20',
              dot: 'bg-violet-400',
              text: 'text-violet-400',
              borderHover: 'hover:border-violet-500/40'
            },
            tertiary: {
              iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
              glow: 'hover:shadow-[0_0_24px_rgba(16,185,129,0.25)] group-hover:bg-emerald-500/20',
              dot: 'bg-emerald-400',
              text: 'text-emerald-400',
              borderHover: 'hover:border-emerald-500/40'
            },
            cyan: {
              iconBg: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
              glow: 'hover:shadow-[0_0_24px_rgba(20,184,166,0.25)] group-hover:bg-teal-500/20',
              dot: 'bg-teal-400',
              text: 'text-teal-300',
              borderHover: 'hover:border-teal-500/40'
            }
          }[cap.glowColor];

          return (
            <div
              key={cap.id}
              className={`group relative rounded-xl bg-[#0f172a]/70 dark:bg-[#0f172a]/70 light:bg-slate-100/90 border border-white/8 dark:border-white/8 light:border-slate-200/80 p-4 sm:p-5 shadow-md backdrop-blur-xl transition-all duration-300 ${colorConfig.borderHover} ${colorConfig.glow} overflow-hidden`}
            >
              <div className="flex items-start gap-3.5">
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 border shadow-sm group-hover:scale-105 transition-transform ${colorConfig.iconBg}`}
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {cap.iconName}
                  </span>
                </div>

                <div className="flex flex-col min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <h3 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white dark:text-white light:text-slate-900 truncate">
                      {cap.title}
                    </h3>
                    <span className={`w-2 h-2 rounded-full ${colorConfig.dot} animate-pulse flex-shrink-0`} />
                  </div>

                  <p className={`font-['JetBrains_Mono'] text-xs font-semibold mb-2 ${colorConfig.text}`}>
                    {cap.subtitle}
                  </p>

                  <p className="font-['Inter'] text-xs sm:text-[13px] text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed mb-3">
                    {cap.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {cap.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-white/5 dark:bg-white/5 light:bg-slate-200/60 font-['JetBrains_Mono'] text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive SQA Automated Verification Suite Widget */}
      <div className="w-full rounded-xl bg-[#0a0f1d]/90 dark:bg-[#0a0f1d]/90 light:bg-slate-900 border border-emerald-500/30 p-4 sm:p-5 shadow-xl relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <div>
              <h4 className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2">
                <span>Playwright & Vitest SQA Test Suite</span>
                <span className="font-['JetBrains_Mono'] text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {testCases.filter(t => t.status === 'passed').length}/{testCases.length} Passed
                </span>
              </h4>
              <p className="font-['JetBrains_Mono'] text-xs text-slate-400">
                Interactive automated quality verification and boundary assertions
              </p>
            </div>
          </div>

          <button
            onClick={runTestSuite}
            disabled={isRunningTests}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 active:scale-95 border border-emerald-500/40 text-emerald-300 font-['JetBrains_Mono'] text-xs font-semibold transition-all disabled:opacity-50 cursor-pointer shadow-[0_0_12px_rgba(16,185,129,0.3)]"
          >
            <span className={`material-symbols-outlined text-[16px] ${isRunningTests ? 'animate-spin' : ''}`}>
              {isRunningTests ? 'sync' : 'play_arrow'}
            </span>
            <span>{isRunningTests ? 'Running Assertions...' : 'Run Test Suite'}</span>
          </button>
        </div>

        {/* Test Cases List */}
        <div className="space-y-2">
          {testCases.map((tc) => (
            <div
              key={tc.id}
              className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5 text-xs font-['JetBrains_Mono'] gap-2"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="material-symbols-outlined text-[16px] flex-shrink-0 text-emerald-400">
                  {tc.status === 'running' ? 'hourglass_top' : 'check_circle'}
                </span>
                <span className="text-white truncate font-medium">
                  {tc.title}
                </span>
                <span className="hidden sm:inline text-slate-400 text-[11px]">
                  · {tc.details}
                </span>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-slate-400 text-[11px]">{tc.duration}</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px]">
                  {tc.status.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
