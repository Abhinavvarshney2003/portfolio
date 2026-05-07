// @ts-nocheck
"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiSend, FiMinimize2, FiAlertCircle } from "react-icons/fi";

// ============================================================
// AI Chatbot Component
// Floating widget allowing recruiters to chat with an AI clone
// ============================================================

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content: "Hi! I'm Abhinav's AI assistant. Feel free to ask me anything about his skills, projects, or experience!",
      },
    ],
  }) as any;

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      {/* Chat Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple flex items-center justify-center text-white shadow-lg shadow-accent-blue/30 hover:shadow-xl hover:shadow-accent-blue/40 transition-all hover:-translate-y-1 md:hidden"
            aria-label="Open AI Chat"
          >
            <FiMessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Always show on desktop as a floating pill if closed, or the chat button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-3 p-1.5 rounded-full bg-glass backdrop-blur-xl border border-border-subtle hover:border-accent-blue/50 text-text-primary shadow-xl hover:shadow-accent-blue/20 transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple flex items-center justify-center text-white shadow-lg">
              <span className="text-xs font-bold">AI</span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-4 right-4 md:bottom-24 md:right-6 md:left-auto md:w-[380px] h-[500px] z-[100] flex flex-col rounded-2xl glass-strong border border-border-subtle shadow-2xl shadow-black/50 overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-border-subtle bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white relative">
                  <span className="text-sm font-bold">AI</span>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-[#16161f]"></span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-primary">Abhinav AI</h3>
                  <p className="text-xs text-green-400">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-white/10 transition-colors"
                >
                  <FiMinimize2 size={16} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-text-muted hover:text-red-400 hover:bg-white/10 transition-colors md:hidden"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 scroll-smooth">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                      m.role === "user"
                        ? "bg-accent-blue text-white rounded-br-sm"
                        : "bg-white/[0.05] text-text-primary rounded-bl-sm border border-white/[0.05]"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.05] text-text-primary rounded-2xl rounded-bl-sm border border-white/[0.05] px-4 py-3 flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              
              {error && (
                <div className="flex justify-center my-4">
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-3 py-2 rounded-lg flex items-start gap-2">
                    <FiAlertCircle size={14} className="mt-0.5 shrink-0" />
                    <p>
                      {error.message.includes("API key not configured") 
                        ? "The AI is currently resting. Please add the OPENAI_API_KEY to the .env.local file to wake it up!" 
                        : "Failed to connect to the AI model."}
                    </p>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border-subtle bg-[#16161f] shrink-0">
              <form
                onSubmit={handleSubmit}
                className="relative flex items-center"
              >
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask me anything..."
                  className="w-full bg-white/[0.03] border border-border-subtle rounded-xl pl-4 pr-12 py-3 text-sm text-text-primary focus:outline-none focus:border-accent-blue/50 placeholder:text-text-muted transition-colors"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!(input || "").trim() || isLoading}
                  className="absolute right-2 w-8 h-8 rounded-lg bg-accent-blue/10 text-accent-blue flex items-center justify-center hover:bg-accent-blue hover:text-white transition-colors disabled:opacity-50 disabled:hover:bg-accent-blue/10 disabled:hover:text-accent-blue"
                >
                  <FiSend size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
