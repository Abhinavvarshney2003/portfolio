"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/data/portfolio";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

// ============================================================
// Experience Section
// Timeline UI with achievement-based descriptions
// ============================================================

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-purple text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            Experience
          </span>
          <h2 className="section-title gradient-text">
            Professional Journey
          </h2>
          <p className="section-subtitle mx-auto">
            Internships and roles that shaped my expertise
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
              className={`relative mb-12 last:mb-0 ${
                i % 2 === 0
                  ? "md:pr-[calc(50%+2rem)] md:text-right"
                  : "md:pl-[calc(50%+2rem)]"
              } pl-20 md:pl-0`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-6 w-4 h-4 rounded-full bg-accent-blue border-4 border-bg-primary z-10 left-[1.65rem] ${
                  i % 2 === 0
                    ? "md:left-auto md:right-[calc(50%-0.5rem)] md:translate-x-1/2"
                    : "md:left-[calc(50%-0.5rem)] md:-translate-x-1/2"
                }`}
              >
                <div className="w-full h-full rounded-full bg-accent-blue animate-ping opacity-30" />
              </div>

              {/* Card */}
              <div className="glass rounded-2xl p-6 border-gradient hover:shadow-lg hover:shadow-accent-blue/5 transition-all duration-300">
                {/* Header */}
                <div className={`flex flex-wrap items-start gap-3 mb-4 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                    <FiBriefcase className="text-accent-blue" size={18} />
                  </div>
                  <div className={i % 2 === 0 ? 'md:order-first' : ''}>
                    <h3 className="text-lg font-bold text-text-primary">
                      {exp.title}
                    </h3>
                    <p className="text-accent-blue font-medium text-sm">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Period */}
                <div className={`flex items-center gap-2 text-text-muted text-sm mb-4 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <FiCalendar size={13} />
                  {exp.period}
                </div>

                {/* Description */}
                <ul className={`space-y-2 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                  {exp.description.map((desc, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full bg-accent-purple mt-1.5 shrink-0 ${i % 2 === 0 ? 'md:order-last' : ''}`} />
                      {desc}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className={`flex flex-wrap gap-2 mt-4 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-accent-purple/10 text-xs text-accent-purple font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
