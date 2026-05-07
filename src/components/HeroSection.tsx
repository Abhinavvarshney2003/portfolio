"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "@/data/portfolio";
import {
  FiDownload,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowDown,
} from "react-icons/fi";
import { useCallback, useEffect, useState } from "react";

// ============================================================
// Hero Section
// Animated intro with typing effect, particles, and CTAs
// ============================================================

// Simple particle background using canvas
function ParticleBackground() {
  const canvasRef = useCallback((canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 143, 255, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(79, 143, 255, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Background */}
      {mounted && <ParticleBackground />}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px] animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px] animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-text-secondary">
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 font-[family-name:var(--font-display)]"
        >
          <span className="text-text-primary">Hi, I&apos;m </span>
          <span className="gradient-text glow-text">
            {personalInfo.firstName}
          </span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-text-secondary mb-6 h-10"
        >
          {mounted && (
            <TypeAnimation
              sequence={personalInfo.roles.flatMap((role) => [role, 2000])}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="gradient-text-blue"
            />
          )}
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Abhinav_Varshney_Resume.pdf"
            type="application/pdf"
            className="group relative px-7 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-sm hover:shadow-xl hover:shadow-accent-blue/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            <FiDownload className="inline mr-2 -mt-0.5 group-hover:animate-bounce" size={16} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-xl glass text-text-primary font-semibold text-sm hover:bg-white/10 transition-all duration-300 border border-border-subtle hover:border-border-glow hover:-translate-y-0.5"
          >
            <FiMail className="inline mr-2 -mt-0.5" size={16} />
            Get in Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            {
              icon: FiGithub,
              href: personalInfo.social.github,
              label: "GitHub",
            },
            {
              icon: FiLinkedin,
              href: personalInfo.social.linkedin,
              label: "LinkedIn",
            },
            {
              icon: FiMail,
              href: personalInfo.social.email,
              label: "Email",
            },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-xl glass flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue/30 transition-colors"
              aria-label={social.label}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </motion.div>


      </div>
    </section>
  );
}
