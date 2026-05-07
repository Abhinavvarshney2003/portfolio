import Link from "next/link";
import CursorGlow from "@/components/CursorGlow";
import Footer from "@/components/Footer";
import { FiArrowLeft } from "react-icons/fi";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CursorGlow />
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-border-subtle">
        <div className="section-container h-16 flex items-center justify-between">
          <Link href="/blog" className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm font-medium">
            <FiArrowLeft size={16} />
            Back to Articles
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
        <article className="max-w-3xl mx-auto px-6 relative z-10 prose prose-invert">
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
