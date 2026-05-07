"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education, certifications } from "@/data/portfolio";
import { FiAward, FiBook, FiCheckCircle } from "react-icons/fi";

// ============================================================
// Education Section
// Modern cards with certifications grid
// ============================================================

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-cyan text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            Education & Certifications
          </span>
          <h2 className="section-title gradient-text">
            Academic Foundation
          </h2>
          <p className="section-subtitle mx-auto">
            A strong academic background complemented by industry certifications
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="glass rounded-2xl p-6 border-gradient hover:shadow-lg hover:shadow-accent-blue/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4 group-hover:bg-accent-blue/20 transition-colors">
                <FiBook className="text-accent-blue" size={22} />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    edu.status === "Pursuing"
                      ? "bg-green-400/10 text-green-400"
                      : "bg-accent-blue/10 text-accent-blue"
                  }`}
                >
                  {edu.status}
                </span>
                <span className="text-text-muted text-xs">{edu.period}</span>
              </div>

              <h3 className="text-base font-bold text-text-primary mb-1 leading-snug">
                {edu.degree}
              </h3>
              <p className="text-sm text-accent-blue mb-4">{edu.institution}</p>

              {/* Coursework */}
              {edu.coursework.length > 0 && (
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-2">
                    Key Coursework
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2 py-0.5 rounded-md bg-white/[0.04] text-xs text-text-secondary border border-border-subtle"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2 justify-center">
            <FiAward className="text-accent-purple" />
            Professional Certifications
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.05 }}
                className="glass rounded-xl p-4 text-center hover:bg-white/[0.03] hover:border-accent-purple/20 transition-all duration-300 border border-transparent group cursor-default"
              >
                <span className="text-2xl block mb-2">{cert.icon}</span>
                <p className="text-xs font-medium text-text-primary leading-tight mb-1">
                  {cert.name}
                </p>
                <p className="text-xs text-text-muted flex items-center justify-center gap-1">
                  <FiCheckCircle size={10} className="text-green-400" />
                  {cert.issuer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
