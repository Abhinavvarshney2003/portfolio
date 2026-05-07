"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, personalInfo } from "@/data/portfolio";
import {
  FiSearch,
  FiCommand,
  FiDownload,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowRight,
} from "react-icons/fi";

// ============================================================
// Command Palette (Cmd+K)
// Quick navigation and actions — inspired by Linear/Vercel
// ============================================================

type CommandItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  category: string;
};

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Build command list
  const commands: CommandItem[] = [
    // Navigation
    ...navItems.map((item) => ({
      id: `nav-${item.href}`,
      label: `Go to ${item.label}`,
      icon: <FiArrowRight size={14} />,
      action: () => {
        document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
      category: "Navigation",
    })),
    // Actions
    {
      id: "download-resume",
      label: "Download Resume",
      icon: <FiDownload size={14} />,
      action: () => {
        window.open(personalInfo.resumeUrl, "_blank");
        setIsOpen(false);
      },
      category: "Actions",
    },
    {
      id: "send-email",
      label: "Send Email",
      icon: <FiMail size={14} />,
      action: () => {
        window.open(personalInfo.social.email);
        setIsOpen(false);
      },
      category: "Actions",
    },
    {
      id: "open-github",
      label: "Open GitHub",
      icon: <FiGithub size={14} />,
      action: () => {
        window.open(personalInfo.social.github, "_blank");
        setIsOpen(false);
      },
      category: "Actions",
    },
    {
      id: "open-linkedin",
      label: "Open LinkedIn",
      icon: <FiLinkedin size={14} />,
      action: () => {
        window.open(personalInfo.social.linkedin, "_blank");
        setIsOpen(false);
      },
      category: "Actions",
    },
  ];

  // Filter commands by query
  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  // Group by category
  const grouped = filtered.reduce((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {} as Record<string, CommandItem[]>);

  // Keyboard shortcuts
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setQuery("");
        setSelectedIndex(0);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    },
    []
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Handle arrow keys within palette
  const handlePaletteKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      filtered[selectedIndex].action();
    }
  };

  return (
    <>


      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[9999] w-full max-w-lg"
            >
              <div className="glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-border-subtle">
                {/* Search input */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-border-subtle">
                  <FiSearch className="text-text-muted" size={18} />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setSelectedIndex(0);
                    }}
                    onKeyDown={handlePaletteKeyDown}
                    placeholder="Search commands..."
                    className="flex-1 bg-transparent text-text-primary text-sm placeholder:text-text-muted focus:outline-none"
                  />
                  <kbd className="hidden sm:inline-block px-2 py-0.5 rounded bg-white/[0.06] text-xs text-text-muted font-mono">
                    ESC
                  </kbd>
                </div>

                {/* Results */}
                <div className="max-h-80 overflow-y-auto py-2">
                  {Object.entries(grouped).length === 0 ? (
                    <div className="px-5 py-8 text-center text-text-muted text-sm">
                      No commands found
                    </div>
                  ) : (
                    Object.entries(grouped).map(([category, items]) => (
                      <div key={category}>
                        <div className="px-5 py-2 text-xs text-text-muted uppercase tracking-wider font-semibold">
                          {category}
                        </div>
                        {items.map((cmd) => {
                          const flatIndex = filtered.indexOf(cmd);
                          return (
                            <button
                              key={cmd.id}
                              onClick={cmd.action}
                              onMouseEnter={() => setSelectedIndex(flatIndex)}
                              className={`w-full flex items-center gap-3 px-5 py-2.5 text-sm transition-colors ${
                                flatIndex === selectedIndex
                                  ? "bg-accent-blue/10 text-accent-blue"
                                  : "text-text-secondary hover:bg-white/[0.03]"
                              }`}
                            >
                              {cmd.icon}
                              {cmd.label}
                            </button>
                          );
                        })}
                      </div>
                    ))
                  )}
                </div>

                {/* Footer */}
                <div className="px-5 py-3 border-t border-border-subtle flex items-center gap-4 text-xs text-text-muted">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] font-mono">↑↓</kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] font-mono">↵</kbd>
                    Select
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] font-mono">esc</kbd>
                    Close
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
