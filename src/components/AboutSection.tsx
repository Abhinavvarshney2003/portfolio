"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { aboutMe, personalInfo } from "@/data/portfolio";
import { FiTarget, FiZap, FiHeart, FiTrendingUp } from "react-icons/fi";

// ============================================================
// About Section
// Professional story, traits, goals, and journey timeline
// ============================================================

const traitIcons = [FiZap, FiTarget, FiTrendingUp, FiHeart, FiZap, FiTarget];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-blue text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            About Me
          </span>
          <h2 className="section-title gradient-text">
            Building the Future with Code & AI
          </h2>
          <p className="section-subtitle mx-auto">
            A passionate technologist driven by curiosity and impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Story column - takes 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-8 border-gradient">
              <div className="space-y-4 text-text-secondary leading-relaxed">
                {aboutMe.story.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Personality Traits */}
              <div className="mt-8 flex flex-wrap gap-3">
                {aboutMe.traits.map((trait, i) => {
                  const Icon = traitIcons[i % traitIcons.length];
                  return (
                    <motion.span
                      key={trait}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue/5 border border-accent-blue/10 text-sm text-accent-blue"
                    >
                      <Icon size={14} />
                      {trait}
                    </motion.span>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Info column - takes 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "15", label: "Projects Built" },
                { value: "2", label: "Internships" },
                { value: "10+", label: "Certifications" },
                { value: "100+", label: "Members Led" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass rounded-xl p-5 text-center border-gradient hover:bg-white/[0.03] transition-colors"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-text-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Career Goals */}
            <div className="glass rounded-2xl p-6 border-gradient">
              <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                <FiTarget className="text-accent-purple" />
                Career Goals
              </h3>
              <ul className="space-y-3">
                {aboutMe.goals.map((goal, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 shrink-0" />
                    {goal}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Location & Status */}
            <div className="glass rounded-2xl p-6 border-gradient">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">Location</span>
                  <span className="text-text-primary text-sm font-medium">
                    {personalInfo.location}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">Status</span>
                  <span className="inline-flex items-center gap-1.5 text-green-400 text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Open to Work
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-text-muted text-sm">Focus</span>
                  <span className="text-accent-blue text-sm font-medium">
                    AI/ML & Full Stack
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
