"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects, personalInfo } from "@/data/portfolio";
import { FiGithub, FiExternalLink, FiStar, FiLinkedin } from "react-icons/fi";

// ============================================================
// Projects Section
// Stunning project cards with filtering, tech tags, and metrics
// ============================================================

const categories = [
  "All",
  "AI/ML",
  "Full Stack",
  "Cybersecurity",
  "Automation Tools",
  "Mobile",
  "Data Analytics",
];

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative glass rounded-2xl overflow-hidden border-gradient hover:shadow-xl hover:shadow-accent-blue/10 transition-all duration-500"
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent-blue/20 border border-accent-blue/30 text-accent-blue text-xs font-semibold">
          <FiStar size={10} />
          Featured
        </div>
      )}

      {/* Image / Visual area */}
      <div className="relative h-48 bg-gradient-to-br from-accent-blue/10 via-accent-purple/10 to-accent-pink/10 overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          animate={isHovered ? { scale: 1.1, opacity: 0.8 } : { scale: 1, opacity: 0.5 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-accent-purple/15 to-transparent"
        />

        {/* Project icon / title overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={isHovered ? { scale: 1.05, y: -5 } : { scale: 1, y: 0 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-bg-primary/60 backdrop-blur-sm border border-border-subtle flex items-center justify-center">
              <span className="text-2xl">
                {project.category === "AI/ML"
                  ? "🧠"
                  : project.category === "Full Stack"
                  ? "⚡"
                  : project.category === "Cybersecurity"
                  ? "🛡️"
                  : project.category === "Mobile"
                  ? "📱"
                  : "📊"}
              </span>
            </div>
            <span className="text-xs text-text-muted uppercase tracking-wider font-medium">
              {project.category}
            </span>
          </motion.div>
        </div>

        {/* Hover overlay with links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          className="absolute inset-0 bg-bg-primary/70 backdrop-blur-sm flex items-center justify-center gap-3 z-10"
        >
          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="View source code"
            >
              <FiGithub size={18} />
            </a>
          )}
          <a
            href={project.demo !== "#" ? project.demo : ('longDescription' in project ? `/projects/${project.id}` : "#")}
            target={project.demo !== "#" ? "_blank" : undefined}
            rel={project.demo !== "#" ? "noopener noreferrer" : undefined}
            className={`w-10 h-10 rounded-full bg-accent-blue/80 flex items-center justify-center text-white hover:bg-accent-blue transition-colors ${project.demo === "#" && !('longDescription' in project) ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="View live demo or case study"
            onClick={(e) => {
              if (project.demo === "#" && !('longDescription' in project)) {
                e.preventDefault();
              }
            }}
          >
            <FiExternalLink size={18} />
          </a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent-blue transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-sm text-text-secondary mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="space-y-1.5 mb-4">
          {project.metrics.slice(0, 2).map((metric, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-text-muted">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              {metric}
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-border-subtle text-xs text-text-muted"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="px-2.5 py-1 rounded-md bg-accent-blue/10 text-xs text-accent-blue">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* Case Study Link */}
        {('longDescription' in project) && (
          <a
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-blue hover:text-accent-purple transition-colors group/link mt-2"
          >
            Read Case Study
            <span className="group-hover/link:translate-x-1 transition-transform">→</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32 relative" ref={ref}>
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
            My Work
          </span>
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A showcase of projects spanning AI, full-stack, and cybersecurity
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-accent-blue text-white shadow-lg shadow-accent-blue/20"
                  : "text-text-secondary hover:text-text-primary hover:bg-white/[0.05]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={`${project.id}-${i}`}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </motion.div>

        {/* View more prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-blue/10 text-accent-blue hover:bg-accent-blue hover:text-white transition-all border border-accent-blue/20 text-sm font-semibold"
          >
            <FiLinkedin size={16} />
            Let&apos;s Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
