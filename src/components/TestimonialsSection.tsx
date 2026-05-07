"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { testimonials } from "@/data/portfolio";
import { FiChevronLeft, FiChevronRight, FiMessageCircle } from "react-icons/fi";

// ============================================================
// Testimonials Section
// Carousel-style testimonial cards with avatars
// ============================================================

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section id="testimonials" className="py-24 md:py-32 relative" ref={ref}>
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
            Testimonials
          </span>
          <h2 className="section-title gradient-text">
            What People Say
          </h2>
          <p className="section-subtitle mx-auto">
            Feedback from mentors, colleagues, and collaborators
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="max-w-3xl mx-auto relative">
          {/* Main card */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-2xl p-8 md:p-10 border-gradient text-center"
          >
            {/* Quote icon */}
            <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-6">
              <FiMessageCircle className="text-accent-blue" size={22} />
            </div>

            {/* Quote text */}
            <p className="text-lg md:text-xl text-text-primary leading-relaxed mb-8 italic">
              &ldquo;{testimonials[activeIndex].content}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white font-bold text-sm">
                {testimonials[activeIndex].avatar}
              </div>
              <div className="text-left">
                <p className="font-semibold text-text-primary">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-sm text-text-muted">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-white/[0.05] transition-all"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-6 bg-accent-blue"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-white/[0.05] transition-all"
              aria-label="Next testimonial"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
