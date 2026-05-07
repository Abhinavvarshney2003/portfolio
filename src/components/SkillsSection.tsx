"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skills } from "@/data/portfolio";

// ============================================================
// Skills Section
// Interactive skill cards with animated progress bars
// ============================================================

type SkillCategory = keyof typeof skills;

const categoryLabels: Record<SkillCategory, { title: string; icon: string }> = {
  languages: { title: "Languages", icon: "💻" },
  frameworks: { title: "Frameworks", icon: "🏗️" },
  aiml: { title: "AI / ML", icon: "🧠" },
  tools: { title: "Tools", icon: "🔧" },
  cloud: { title: "Cloud / DevOps", icon: "☁️" },
  databases: { title: "Databases", icon: "🗄️" },
};

function SkillBar({
  name,
  level,
  icon,
  delay,
  isInView,
}: {
  name: string;
  level: number;
  icon: string;
  delay: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.4 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-text-primary flex items-center gap-2">
          <span className="text-base">{icon}</span>
          {name}
        </span>
        <span className="text-xs font-mono text-accent-blue opacity-0 group-hover:opacity-100 transition-opacity">
          {level}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-purple relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("languages");

  const categories = Object.keys(skills) as SkillCategory[];

  return (
    <section id="skills" className="py-24 md:py-32 relative" ref={ref}>
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
            Skills & Expertise
          </span>
          <h2 className="section-title gradient-text">Tech Arsenal</h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-lg shadow-accent-blue/20"
                  : "glass text-text-secondary hover:text-text-primary hover:bg-white/[0.05]"
              }`}
            >
              <span className="mr-1.5">{categoryLabels[cat].icon}</span>
              {categoryLabels[cat].title}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Active category - detailed view */}
          <div className="md:col-span-2 lg:col-span-2">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-2xl p-8 border-gradient"
            >
              <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
                <span className="text-2xl">
                  {categoryLabels[activeCategory].icon}
                </span>
                {categoryLabels[activeCategory].title}
              </h3>
              <div className="space-y-5">
                {skills[activeCategory].map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    delay={i * 0.1}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick overview of all categories */}
          <div className="space-y-4">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                onClick={() => setActiveCategory(cat)}
                className={`w-full glass rounded-xl p-4 text-left transition-all duration-300 border ${
                  activeCategory === cat
                    ? "border-accent-blue/30 bg-accent-blue/5"
                    : "border-transparent hover:border-border-subtle hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-text-primary flex items-center gap-2">
                    <span>{categoryLabels[cat].icon}</span>
                    {categoryLabels[cat].title}
                  </span>
                  <span className="text-xs text-text-muted">
                    {skills[cat].length} skills
                  </span>
                </div>
                <div className="flex gap-1">
                  {skills[cat].map((s) => (
                    <div
                      key={s.name}
                      className="h-1 flex-1 rounded-full bg-white/[0.04] overflow-hidden"
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-purple"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  ))}
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
