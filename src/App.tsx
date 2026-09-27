/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Deshani Bandara — Engineering & Technical Education Portfolio
 * Built with React, TypeScript, Tailwind CSS, and Motion.
 * Supports Futuristic Neon Glass aesthetics, Dark/Light mode,
 * responsive mobile/desktop layouts, and GitHub Pages static hosting.
 */

import { useState, useEffect } from 'react';
import { NavTab } from './types';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AcademicSection } from './components/AcademicSection';
import { TechSection } from './components/TechSection';
import { EcosystemSection } from './components/EcosystemSection';
import { ContactSection } from './components/ContactSection';
import { CvModal } from './components/CvModal';
import { Toast } from './components/Toast';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isCvOpen, setIsCvOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Initialize theme from preference or default to futuristic dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('db_portfolio_theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  // Handle dark/light mode toggle
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        localStorage.setItem('db_portfolio_theme', 'dark');
        showToast('Switched to Futuristic Dark Neon Glass theme');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('db_portfolio_theme', 'light');
        showToast('Switched to Modern Light Glass theme');
      }
      return next;
    });
  };

  // Toast notification helper
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3800);
  };

  // Scroll to designated section with proper header offset
  const handleTabSelect = (tab: NavTab) => {
    setActiveTab(tab);
    const element = document.getElementById(tab);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Observe scroll position to highlight active nav tab dynamically
  useEffect(() => {
    const handleScroll = () => {
      const sections: NavTab[] = ['contact', 'ecosystem', 'tech', 'about', 'home'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveTab(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] dark:bg-[#030712] light:bg-[#f8fafc] text-[#dee2f6] dark:text-[#dee2f6] light:text-[#0f172a] transition-colors duration-300 relative selection:bg-cyan-500/20 selection:text-cyan-400 font-sans antialiased overflow-x-hidden">
      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabSelect}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        onOpenCvModal={() => setIsCvOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex flex-col relative w-full pt-16 pb-20 min-h-screen">
        {/* Dynamic Ambient Glow Blobs (Non-blocking decorative background) */}
        <div className="pointer-events-none absolute -top-10 -left-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-cyan-500/15 dark:bg-cyan-500/15 light:bg-cyan-500/10 blur-[90px] animate-pulse" />
        <div className="pointer-events-none absolute top-96 -right-20 w-80 sm:w-[28rem] h-80 sm:h-[28rem] rounded-full bg-purple-600/15 dark:bg-purple-600/15 light:bg-purple-600/10 blur-[110px]" />
        <div className="pointer-events-none absolute top-[1400px] left-1/2 -translate-x-1/2 w-96 sm:w-[32rem] h-96 sm:h-[32rem] rounded-full bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-500/5 blur-[120px]" />
        <div className="pointer-events-none absolute top-[2200px] -left-10 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px]" />

        {/* Section 1: Home / Hero */}
        <div id="home" className="scroll-mt-20">
          <HeroSection
            setActiveTab={handleTabSelect}
            onOpenCvModal={() => setIsCvOpen(true)}
            onShowToast={showToast}
          />
        </div>

        {/* Section 2: Academic Background */}
        <div id="about" className="scroll-mt-20">
          <AcademicSection />
        </div>

        {/* Section 3: Core Technical Capabilities */}
        <div id="tech" className="scroll-mt-20">
          <TechSection onShowToast={showToast} />
        </div>

        {/* Section 4: Ecosystems & Learning Hubs */}
        <div id="ecosystem" className="scroll-mt-20">
          <EcosystemSection onShowToast={showToast} />
        </div>

        {/* Section 5: Let's Connect */}
        <div id="contact" className="scroll-mt-20">
          <ContactSection onShowToast={showToast} />
        </div>
      </main>

      {/* Persistent Bottom Navigation Menu */}
      <Navigation activeTab={activeTab} setActiveTab={handleTabSelect} />

      {/* Curriculum Vitae Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        onShowToast={showToast}
      />
    </div>
  );
}
