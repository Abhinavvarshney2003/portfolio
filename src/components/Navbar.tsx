"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, personalInfo } from "@/data/portfolio";
import {
  FiMenu,
  FiX,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

// ============================================================
// Navbar Component
// Glassmorphism nav with smooth scroll and mobile drawer
// ============================================================

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position for nav background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  // Smooth scroll handler that avoids updating the URL hash
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      
      // Update active section state immediately for better UX
      setActiveSection(sectionId);
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-strong shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xl font-extrabold tracking-tight font-[family-name:var(--font-display)]">
              <span className="gradient-text">AV</span>
              <span className="text-text-secondary text-sm font-normal ml-1.5 hidden sm:inline">
                .dev
              </span>
            </span>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 rounded-lg hover:text-text-primary ${
                  activeSection === item.href.replace("#", "")
                    ? "text-accent-blue"
                    : "text-text-secondary"
                }`}
              >
                {item.label}
                {activeSection === item.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-accent-blue/10 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop Social + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors p-2"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors p-2"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="ml-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-accent-blue to-accent-purple text-white hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300"
            >
              <FiMail className="inline mr-1.5 -mt-0.5" size={14} />
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-text-primary p-2"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex flex-col items-center justify-center h-full gap-6"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-2xl font-semibold text-text-secondary hover:text-text-primary transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={(e) => scrollToSection(e, "#contact")}
                className="mt-4 px-8 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white"
              >
                Hire Me
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
