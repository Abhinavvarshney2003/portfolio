import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-4xl font-black gradient-text mb-6 mt-8">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold text-text-primary mb-4 mt-8">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-semibold text-text-primary mb-3 mt-6">{children}</h3>,
    p: ({ children }) => <p className="text-text-secondary leading-relaxed mb-6">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-6 mb-6 text-text-secondary space-y-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 mb-6 text-text-secondary space-y-2">{children}</ol>,
    li: ({ children }) => <li>{children}</li>,
    a: ({ href, children }) => <a href={href} className="text-accent-blue hover:text-accent-purple transition-colors underline underline-offset-4">{children}</a>,
    strong: ({ children }) => <strong className="font-semibold text-text-primary">{children}</strong>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-accent-purple pl-4 italic text-text-muted my-6">{children}</blockquote>,
    code: ({ children }) => <code className="bg-white/[0.05] px-1.5 py-0.5 rounded text-accent-pink text-sm font-mono">{children}</code>,
    pre: ({ children }) => <pre className="bg-[#111118] p-4 rounded-xl border border-border-subtle overflow-x-auto mb-6 text-sm">{children}</pre>,
    ...components,
  }
}
