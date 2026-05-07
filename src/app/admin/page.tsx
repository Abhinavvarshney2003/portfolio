"use client";

import { useState } from "react";
import Link from "next/link";
import { FiHome, FiLock, FiLogOut, FiFolder, FiMessageSquare, FiSettings, FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";
import { projects } from "@/data/portfolio";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("projects");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock auth for demonstration
    if (password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid password. Hint: admin123");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary">
        <div className="w-full max-w-md glass-strong rounded-2xl p-8 border border-border-subtle shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
              <FiLock className="text-accent-blue" size={24} />
            </div>
            <h1 className="text-2xl font-bold text-text-primary">Admin Access</h1>
            <p className="text-text-secondary text-sm mt-2">Protected route simulation</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password (admin123)"
                className="w-full bg-white/[0.03] border border-border-subtle rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent-blue"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-accent-blue text-white font-semibold text-sm hover:bg-accent-blue/90 transition-colors"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-accent-blue hover:underline">
              &larr; Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-bg-primary">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border-subtle bg-bg-secondary p-6 flex flex-col hidden md:flex">
        <div className="mb-10">
          <span className="text-xl font-extrabold tracking-tight font-[family-name:var(--font-display)]">
            <span className="gradient-text">AV</span>
            <span className="text-text-secondary text-sm font-normal ml-1.5">
              .admin
            </span>
          </span>
        </div>

        <nav className="space-y-2 flex-1">
          <button
            onClick={() => setActiveTab("projects")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "projects" ? "bg-accent-blue text-white" : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
            }`}
          >
            <FiFolder size={16} /> Projects
          </button>
          <button
            onClick={() => setActiveTab("testimonials")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "testimonials" ? "bg-accent-blue text-white" : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
            }`}
          >
            <FiMessageSquare size={16} /> Testimonials
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "settings" ? "bg-accent-blue text-white" : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
            }`}
          >
            <FiSettings size={16} /> Settings
          </button>
        </nav>

        <div className="pt-6 border-t border-border-subtle mt-auto space-y-2">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:bg-white/5 hover:text-text-primary transition-colors"
          >
            <FiHome size={16} /> View Site
          </Link>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-red-400/10 transition-colors"
          >
            <FiLogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-text-primary capitalize">Manage {activeTab}</h2>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-blue text-white text-sm font-semibold hover:bg-accent-blue/90 transition-colors">
              <FiPlus size={16} /> Add New
            </button>
          </div>

          <div className="glass rounded-xl border border-border-subtle overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/[0.02] border-b border-border-subtle">
                <tr>
                  <th className="px-6 py-4 font-semibold text-text-secondary">Title</th>
                  <th className="px-6 py-4 font-semibold text-text-secondary">Category</th>
                  <th className="px-6 py-4 font-semibold text-text-secondary text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {projects.map((project, index) => (
                  <tr key={`${project.id}-${index}`} className="hover:bg-white/[0.01] transition-colors">
                    <td className="px-6 py-4 text-text-primary font-medium">
                      {project.title}
                      {project.featured && <span className="ml-2 px-2 py-0.5 rounded text-[10px] bg-accent-blue/10 text-accent-blue border border-accent-blue/20">Featured</span>}
                    </td>
                    <td className="px-6 py-4 text-text-secondary">{project.category}</td>
                    <td className="px-6 py-4 flex items-center justify-end gap-3">
                      <button className="p-1.5 text-text-muted hover:text-accent-blue transition-colors">
                        <FiEdit2 size={16} />
                      </button>
                      <button className="p-1.5 text-text-muted hover:text-red-400 transition-colors">
                        <FiTrash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <p className="text-sm text-blue-400 flex items-center gap-2">
              <FiSettings /> This is a UI mockup of the Admin Dashboard. In a production environment, this would be connected to a database like Supabase or MongoDB via Next.js Server Actions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
