import Link from "next/link";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";

// Mock blog data for the index page
const posts = [
  {
    slug: "building-ai-pcos",
    title: "How I Built an AI Model for Early PCOS Detection",
    excerpt: "Exploring the challenges of medical imaging and how U-Net and YOLO architectures can assist in early diagnosis of Polycystic Ovary Syndrome.",
    date: "May 15, 2026",
    readTime: "5 min read",
    category: "AI / ML",
  },
  {
    slug: "rag-architecture-fitness",
    title: "Structuring RAG Pipelines for Health Data",
    excerpt: "A deep dive into how I used Azure CosmosDB and Prompt Flow to build a hallucination-free AI fitness coach.",
    date: "April 2, 2026",
    readTime: "7 min read",
    category: "Architecture",
  }
];

export default function BlogIndex() {
  return (
    <>
      <CursorGlow />
      
      {/* Mini Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border-subtle">
        <div className="section-container h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm font-medium">
            <FiArrowLeft size={16} />
            Back to Home
          </Link>
          <span className="text-xl font-extrabold tracking-tight font-[family-name:var(--font-display)]">
            <span className="gradient-text">AV</span>
            <span className="text-text-secondary text-sm font-normal ml-1.5 hidden sm:inline">
              .blog
            </span>
          </span>
        </div>
      </nav>

      <main className="pt-32 pb-24 min-h-screen relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-purple/[0.02] to-transparent pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-text-primary font-[family-name:var(--font-display)]">
              Writing & <span className="gradient-text">Thoughts</span>
            </h1>
            <p className="text-lg text-text-secondary">
              Articles about artificial intelligence, full-stack development, and lessons learned while building.
            </p>
          </div>

          <div className="space-y-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="glass rounded-2xl p-8 border-gradient hover:shadow-xl hover:shadow-accent-purple/5 transition-all duration-300 group cursor-pointer h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-accent-purple/10 text-accent-purple text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <FiCalendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <FiClock size={12} />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-accent-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-6 flex items-center text-sm font-semibold text-accent-blue group-hover:text-accent-purple transition-colors">
                    Read Article <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
