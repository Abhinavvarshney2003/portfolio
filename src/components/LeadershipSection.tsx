"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { leadership } from "@/data/portfolio";
import { FiUsers, FiAward, FiStar } from "react-icons/fi";

// ============================================================
// Leadership Section
// Gaming club president, community work, activities
// ============================================================

export default function LeadershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-pink text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            Leadership & Activities
          </span>
          <h2 className="section-title gradient-text">
            Beyond the Code
          </h2>
          <p className="section-subtitle mx-auto">
            Leading communities and driving impact beyond software
          </p>
        </motion.div>

        {/* Leadership cards */}
        <div className="max-w-3xl mx-auto space-y-8">
          {leadership.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="glass rounded-2xl p-8 border-gradient hover:shadow-xl hover:shadow-accent-pink/5 transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-pink/20 to-accent-purple/20 flex items-center justify-center shrink-0">
                  <FiUsers className="text-accent-pink" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-text-primary">
                      {item.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-accent-pink/10 border border-accent-pink/20 text-accent-pink text-xs font-semibold">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-accent-blue font-medium text-sm mb-3">
                    {item.organization}
                  </p>
                  <p className="text-text-secondary text-sm mb-5 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {item.achievements.map((ach, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + j * 0.1 }}
                        className="flex items-start gap-2 text-sm"
                      >
                        <FiAward
                          className="text-accent-purple mt-0.5 shrink-0"
                          size={13}
                        />
                        <span className="text-text-secondary">{ach}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto"
        >
          {[
            { icon: "🎮", value: "15+", label: "Events Organized" },
            { icon: "👥", value: "100+", label: "Members Led" },
            { icon: "🤝", value: "5+", label: "Industry Partners" },
            { icon: "🏆", value: "3+", label: "Awards Won" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="glass rounded-xl p-4 text-center border-gradient"
            >
              <span className="text-2xl block mb-1">{stat.icon}</span>
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-text-muted mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
