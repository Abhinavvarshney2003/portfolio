"use client";

import LoadingScreen from "@/components/LoadingScreen";
import CursorGlow from "@/components/CursorGlow";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import LeadershipSection from "@/components/LeadershipSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import Chatbot from "@/components/Chatbot";

// ============================================================
// Main Portfolio Page
// Assembles all sections into a cohesive, premium experience
// ============================================================

export default function Home() {
  return (
    <>
      {/* Premium Loading Screen */}
      <LoadingScreen />

      {/* AI Chatbot Widget */}
      <Chatbot />

      {/* Cursor Glow Effect (desktop only) */}
      <CursorGlow />

      {/* Command Palette (Cmd+K) */}
      <CommandPalette />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <LeadershipSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
