import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mzebddnb';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    onShowToast(`Copied email to clipboard: ${PERSONAL_INFO.email}`);
  };

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    onShowToast(`Copied phone number to clipboard: ${PERSONAL_INFO.phone}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!inquiry.trim()) {
      onShowToast('Please enter your inquiry or message.');
      return;
    }

    setIsSending(true);
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: senderName.trim() || 'Anonymous Visitor',
          email: senderEmail.trim() || 'not-provided@example.com',
          message: inquiry.trim(),
          _subject: `New Portfolio Inquiry from ${senderName.trim() || 'Website Visitor'}`,
        }),
      });

      if (response.ok) {
        setIsSending(false);
        setSentSuccess(true);
        onShowToast('✓ Inquiry submitted successfully! Deshani has received your message via Formspree.');
        setInquiry('');
        setSenderName('');
        setSenderEmail('');

        setTimeout(() => {
          setSentSuccess(false);
        }, 6000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Submission failed. Please try again.');
      }
    } catch (err: unknown) {
      setIsSending(false);
      const msg = err instanceof Error ? err.message : 'Failed to deliver message via Formspree.';
      setErrorMessage(msg);
      onShowToast(`Dispatch issue: ${msg}`);
    }
  };

  const handleManualEmailFallback = () => {
    const subject = encodeURIComponent(`Project Inquiry for Deshani Bandara${senderName ? ` from ${senderName}` : ''}`);
    const body = encodeURIComponent(`From: ${senderName || 'Anonymous'}\nEmail: ${senderEmail || 'Not specified'}\n\nMessage:\n${inquiry}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="flex flex-col px-4 sm:px-6 pt-4 pb-24 relative z-10 max-w-4xl mx-auto w-full">
      <div className="rounded-2xl bg-[#0f172a]/70 dark:bg-[#0f172a]/70 light:bg-slate-100/90 border border-white/10 dark:border-white/10 light:border-slate-300 p-5 sm:p-7 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl" />

        {/* Section Header */}
        <div className="flex items-center justify-between flex-wrap gap-2 mb-1.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <h2 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
              Let's Connect
            </h2>
          </div>

          {/* Formspree Powered Live Badge */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-['JetBrains_Mono'] text-[11px]">
            <span className="material-symbols-outlined text-[13px] text-cyan-400">bolt</span>
            <span>Direct Formspree Connected</span>
          </div>
        </div>

        <p className="font-['Inter'] text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 mb-6 leading-relaxed">
          Available for software developer projects, SQA verification assignments, or tutoring inquiries. Send a direct message below.
        </p>

        {/* Quick Action Touchpoint Buttons */}
        <div className="flex flex-col gap-3 mb-6">
          {/* Action 1: Email */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            onClick={handleCopyEmail}
            className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 dark:bg-white/5 dark:hover:bg-white/10 light:bg-white light:hover:bg-slate-50 border border-white/8 dark:border-white/8 light:border-slate-200 transition-all shadow-sm active:scale-[0.99]"
            title="Click to copy email address"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-['JetBrains_Mono'] text-xs text-slate-400">
                  Primary Email (Click to copy)
                </span>
                <span className="font-['JetBrains_Mono'] text-xs sm:text-sm text-white dark:text-white light:text-slate-900 font-semibold truncate">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-cyan-400 text-[20px] group-hover:translate-x-1 transition-transform">
              content_copy
            </span>
          </a>

          {/* Action 2: Phone Call */}
          <a
            href={`tel:${PERSONAL_INFO.phoneClean}`}
            onClick={handleCopyPhone}
            className="group flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 dark:bg-white/5 dark:hover:bg-white/10 light:bg-white light:hover:bg-slate-50 border border-white/8 dark:border-white/8 light:border-slate-200 transition-all shadow-sm active:scale-[0.99]"
            title="Click to copy phone number"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[20px]">call</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-['JetBrains_Mono'] text-xs text-slate-400">
                  Direct Mobile (Click to copy)
                </span>
                <span className="font-['JetBrains_Mono'] text-xs sm:text-sm text-white dark:text-white light:text-slate-900 font-semibold truncate">
                  {PERSONAL_INFO.phone}
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-emerald-400 text-[20px] group-hover:translate-x-1 transition-transform">
              phone_in_talk
            </span>
          </a>
        </div>

        {/* Live Formspree Direct Dispatch Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <label htmlFor="user-name" className="font-['JetBrains_Mono'] text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[15px] text-cyan-400">badge</span>
              Your Details & Message:
            </label>
            <span className="font-['JetBrains_Mono'] text-[11px] text-slate-400">Direct to Inbox</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* Name Input */}
            <input
              id="user-name"
              type="text"
              name="name"
              placeholder="Your Name or Organization"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#030712]/80 dark:bg-[#030712]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 text-white dark:text-white light:text-slate-900 font-['Inter'] text-sm placeholder:text-slate-500 outline-none transition-all shadow-inner focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
            />

            {/* Email Input */}
            <input
              id="user-email"
              type="email"
              name="email"
              placeholder="Your Email (for Deshani to reply)"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#030712]/80 dark:bg-[#030712]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 text-white dark:text-white light:text-slate-900 font-['Inter'] text-sm placeholder:text-slate-500 outline-none transition-all shadow-inner focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
            />
          </div>

          {/* Message Textarea */}
          <div className="relative">
            <textarea
              id="user-msg"
              name="message"
              rows={3}
              required
              value={inquiry}
              onChange={(e) => setInquiry(e.target.value)}
              placeholder="Type your inquiry, project scope, or feedback here..."
              className="w-full px-3.5 py-3 rounded-xl bg-[#030712]/80 dark:bg-[#030712]/80 light:bg-white border border-white/10 dark:border-white/10 light:border-slate-300 text-white dark:text-white light:text-slate-900 font-['Inter'] text-sm placeholder:text-slate-500 outline-none transition-all shadow-inner focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30 resize-none"
            />
          </div>

          {/* Success Banner */}
          {sentSuccess && (
            <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-['Inter'] flex items-center gap-2.5 animate-fadeIn">
              <span className="material-symbols-outlined text-emerald-400 text-[20px] flex-shrink-0">
                check_circle
              </span>
              <div>
                <p className="font-semibold text-emerald-200">Message Delivered via Formspree!</p>
                <p className="text-slate-300 text-xs">Deshani has received your message and will review your inquiry promptly.</p>
              </div>
            </div>
          )}

          {/* Error Banner with Mailto fallback */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-['Inter'] flex items-center justify-between gap-2">
              <span>{errorMessage}</span>
              <button
                type="button"
                onClick={handleManualEmailFallback}
                className="underline hover:text-white text-xs cursor-pointer font-medium"
              >
                Send via Email App
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSending}
            className={`w-full py-3.5 rounded-xl font-['JetBrains_Mono'] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer ${
              sentSuccess
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                : isSending
                ? 'bg-cyan-500/40 text-cyan-200 cursor-wait'
                : 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 shadow-[0_0_16px_rgba(6,182,212,0.25)] active:scale-[0.98]'
            }`}
          >
            {isSending ? (
              <>
                <span className="w-4 h-4 border-2 border-cyan-300 border-t-transparent rounded-full animate-spin" />
                <span>Transmitting via Formspree...</span>
              </>
            ) : sentSuccess ? (
              <>
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                <span>Inquiry Sent to Deshani!</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">forward_to_inbox</span>
                <span>Send Fast Ping (Direct to Inbox)</span>
              </>
            )}
          </button>
        </form>

        {/* Copyright Statement */}
        <div className="mt-8 pt-4 border-t border-white/5 dark:border-white/5 light:border-slate-200 text-center">
          <p className="font-['JetBrains_Mono'] text-xs text-slate-400 dark:text-slate-400 light:text-slate-500 leading-relaxed">
            © 2026 Deshani Bandara. Engineering & Technical Education Portfolio.
          </p>
        </div>
      </div>
    </section>
  );
};
