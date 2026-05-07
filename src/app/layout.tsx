import type { Metadata } from "next";
import "./globals.css";

// ============================================================
// Root Layout - Premium Portfolio
// Google Fonts: Inter + Outfit + JetBrains Mono
// ============================================================

export const metadata: Metadata = {
  title: "Abhinav Varshney | AI Engineer & Full Stack Developer",
  description:
    "Personal portfolio of Abhinav Sushil Varshney — AI/ML Engineer, Full Stack Developer, and Cybersecurity Enthusiast. Building intelligent systems that bridge research and real-world impact.",
  keywords: [
    "Abhinav Varshney",
    "AI Engineer",
    "Full Stack Developer",
    "Machine Learning",
    "Portfolio",
    "Cybersecurity",
    "React",
    "Next.js",
    "Python",
    "TensorFlow",
  ],
  authors: [{ name: "Abhinav Sushil Varshney" }],
  openGraph: {
    title: "Abhinav Varshney | AI Engineer & Full Stack Developer",
    description:
      "Building intelligent systems at the intersection of AI, cybersecurity, and software engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinav Varshney | Portfolio",
    description:
      "AI/ML Engineer, Full Stack Developer, and Cybersecurity Enthusiast.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts: Inter, Outfit, JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="antialiased noise-overlay">{children}</body>
    </html>
  );
}
