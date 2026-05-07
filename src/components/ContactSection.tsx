"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo } from "@/data/portfolio";
import {
  FiSend,
  FiMail,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiCopy,
  FiCheck,
} from "react-icons/fi";

// ============================================================
// Contact Section
// Functional contact form with social links and email copy
// ============================================================

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emailCopied, setEmailCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "bf772aff-1926-426e-984e-4a367d29088f",
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormState({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/[0.02] to-transparent pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-blue text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            Get in Touch
          </span>
          <h2 className="section-title gradient-text">
            Let&apos;s Build Together
          </h2>
          <p className="section-subtitle mx-auto">
            Have an opportunity or want to collaborate? I&apos;d love to hear from
            you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact info - 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info cards */}
            <div className="glass rounded-2xl p-6 border-gradient">
              <h3 className="text-lg font-bold text-text-primary mb-4">
                Contact Info
              </h3>
              <div className="space-y-4">
                {/* Email with copy */}
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                    <FiMail className="text-accent-blue" size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-text-muted uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-sm text-text-primary truncate">
                      {personalInfo.email}
                    </p>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg hover:bg-white/[0.05] transition-colors text-text-muted hover:text-accent-blue"
                    aria-label="Copy email"
                  >
                    {emailCopied ? (
                      <FiCheck size={14} className="text-green-400" />
                    ) : (
                      <FiCopy size={14} />
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center shrink-0">
                    <FiPhone className="text-accent-purple" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="text-sm text-text-primary">
                      {personalInfo.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center shrink-0">
                    <FiMapPin className="text-accent-cyan" size={16} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-sm text-text-primary">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6 border-gradient">
              <h3 className="text-lg font-bold text-text-primary mb-4">
                Connect
              </h3>
              <div className="flex gap-3">
                {[
                  {
                    icon: FiGithub,
                    href: personalInfo.social.github,
                    label: "GitHub",
                    color: "hover:text-white",
                  },
                  {
                    icon: FiLinkedin,
                    href: personalInfo.social.linkedin,
                    label: "LinkedIn",
                    color: "hover:text-blue-400",
                  },
                  {
                    icon: FiMail,
                    href: personalInfo.social.email,
                    label: "Email",
                    color: "hover:text-accent-blue",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-xl bg-white/[0.04] border border-border-subtle flex items-center justify-center text-text-secondary ${social.color} transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* CTA for recruiters */}
            <div className="glass rounded-2xl p-6 border-gradient bg-gradient-to-br from-accent-blue/5 to-accent-purple/5">
              <p className="text-sm text-text-secondary mb-3">
                🎯 <strong className="text-text-primary">Recruiters:</strong> I&apos;m
                actively looking for full-time roles in AI/ML and Full Stack
                Development.
              </p>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Abhinav_Varshney_Resume.pdf"
                type="application/pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue text-white text-sm font-semibold hover:bg-accent-blue/90 transition-colors"
              >
                📄 Download Resume
              </a>
            </div>
          </motion.div>

          {/* Contact form - 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 border-gradient"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm text-text-secondary mb-2 block"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all placeholder:text-text-muted"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm text-text-secondary mb-2 block"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all placeholder:text-text-muted"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="text-sm text-text-secondary mb-2 block"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all placeholder:text-text-muted"
                  placeholder="Job Opportunity / Collaboration"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-sm text-text-secondary mb-2 block"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-border-subtle text-text-primary text-sm focus:outline-none focus:border-accent-blue/50 focus:ring-1 focus:ring-accent-blue/20 transition-all resize-none placeholder:text-text-muted"
                  placeholder="Tell me about the opportunity or project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-sm hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    <FiCheck size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
