"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from "react-icons/fi";

// ============================================================
// Footer Component
// Minimal, clean footer with social links and back-to-top
// ============================================================

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-8 border-t border-white/[0.05] bg-bg-primary overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-accent-blue/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-8">
          {/* Brand Column */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-extrabold tracking-tighter gradient-text font-[family-name:var(--font-display)]">
              AV
            </span>
            <div className="h-4 w-[1px] bg-white/20" />
            <span className="text-xs font-bold text-text-secondary tracking-[0.2em] uppercase">
              Portfolio 2026
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/[0.05] grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          {/* Left: Copyright */}
          <div className="flex justify-start order-2 md:order-1">
            <p className="text-[10px] text-text-muted">
              © {new Date().getFullYear()} Abhinav Sushil Varshney.
            </p>
          </div>

          {/* Center: Social icons */}
          <div className="flex justify-center items-center gap-6 order-1 md:order-2">
            {[
              { icon: FiGithub, href: personalInfo.social.github, label: "GitHub" },
              { icon: FiLinkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
              { icon: FiMail, href: personalInfo.social.email, label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-blue transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
          
          {/* Right: Credits and Back to Top */}
          <div className="flex justify-end items-center gap-6 order-3">
            <button 
              onClick={scrollToTop}
              className="text-[10px] font-bold text-text-muted hover:text-accent-blue transition-colors flex items-center gap-2 group tracking-widest whitespace-nowrap"
            >
              <FiArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
              BACK TO TOP
            </button>
            <div className="h-3 w-[1px] bg-white/10 hidden lg:block" />
            <p className="text-[10px] font-medium text-text-secondary tracking-wide whitespace-nowrap hidden lg:block">
              Designed & Developed by <span className="text-text-primary font-bold uppercase">Abhinav Sushil Varshney</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
