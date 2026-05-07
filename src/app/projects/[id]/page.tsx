import { projects } from "@/data/portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiGithub, FiExternalLink, FiCheckCircle, FiTool, FiCpu } from "react-icons/fi";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";

// Generate static parameters for all project routes
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectCaseStudy(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  // Typecast to safely access custom properties we added
  const p = project as typeof project & {
    longDescription?: string;
    architecture?: string[];
    challenges?: string[];
    solutions?: string[];
  };

  return (
    <>
      <CursorGlow />
      
      {/* Mini Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border-subtle">
        <div className="section-container h-16 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm font-medium">
            <FiArrowLeft size={16} />
            Back to Portfolio
          </Link>
          <span className="text-xl font-extrabold tracking-tight font-[family-name:var(--font-display)]">
            <span className="gradient-text">AV</span>
            <span className="text-text-secondary text-sm font-normal ml-1.5 hidden sm:inline">
              .dev
            </span>
          </span>
        </div>
      </nav>

      <main className="pt-32 pb-24 min-h-screen relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-blue/[0.02] to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-semibold uppercase tracking-wider">
                {project.category} Case Study
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 text-text-primary font-[family-name:var(--font-display)]">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              {p.longDescription || p.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href={project.github}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-border-subtle hover:border-accent-blue/50 text-text-primary text-sm font-semibold transition-all hover:-translate-y-0.5"
              >
                <FiGithub size={16} />
                View Source
              </a>
              <a
                href={project.demo}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-accent-blue/20 hover:-translate-y-0.5"
              >
                <FiExternalLink size={16} />
                Live Demo
              </a>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="glass rounded-2xl p-8 border-gradient mb-12">
            <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
              <FiTool className="text-accent-blue" />
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-lg bg-white/[0.04] border border-border-subtle text-sm text-text-secondary font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture (if available) */}
          {p.architecture && p.architecture.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                <FiCpu className="text-accent-purple" />
                System Architecture
              </h2>
              <div className="space-y-4">
                {p.architecture.map((arch, i) => {
                  const [title, desc] = arch.split(": ");
                  return (
                    <div key={i} className="glass rounded-xl p-6 border border-border-subtle hover:border-accent-purple/30 transition-colors">
                      <h4 className="text-accent-purple font-semibold mb-2">{title}</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">{desc || arch}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Challenges & Solutions (if available) */}
          {p.challenges && p.solutions && p.challenges.length > 0 && (
            <div className="mb-12 grid md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-6">The Challenges</h2>
                <div className="space-y-4">
                  {p.challenges.map((challenge, i) => (
                    <div key={i} className="glass rounded-xl p-5 border-l-4 border-l-red-500/50">
                      <p className="text-text-secondary text-sm">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-text-primary mb-6">The Solutions</h2>
                <div className="space-y-4">
                  {p.solutions.map((solution, i) => (
                    <div key={i} className="glass rounded-xl p-5 border-l-4 border-l-green-500/50 relative overflow-hidden">
                      <div className="absolute top-4 right-4 text-green-500/20">
                        <FiCheckCircle size={40} />
                      </div>
                      <p className="text-text-secondary text-sm relative z-10">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Metrics / Results */}
          <div>
            <h2 className="text-2xl font-bold text-text-primary mb-6">Key Results & Metrics</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {project.metrics.map((metric, i) => (
                <div key={i} className="glass rounded-2xl p-6 text-center border-gradient">
                  <span className="text-3xl font-black gradient-text mb-2 block">0{i + 1}</span>
                  <p className="text-text-secondary text-sm font-medium">{metric}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
