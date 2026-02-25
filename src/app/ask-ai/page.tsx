"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AskAIPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm Alisha's AI assistant. I can tell you about her technical background, projects, or research focus. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const aiMessage: Message = {
        role: "assistant",
        content: data.reply || "I'm sorry, I couldn't process that.",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  const clearChat = () => {
    setMessages([{
      role: "assistant",
      content: "Chat cleared. How else can I help you today?"
    }]);
  };

  return (
    <section className="py-24 min-h-[90vh] flex flex-col">
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-soft/10 text-pink-accent text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            AI Assistant
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Ask My <span className="text-pink-accent italic">Digital Twin.</span>
          </h1>
          <p className="text-lg text-ink/60 max-w-xl mx-auto font-light">
            Powered by Groq Llama 3. Trained to represent my technical 
            philosophy and experience.
          </p>
        </motion.div>

        {/* Chat Window Container */}
        <div className="flex-1 flex flex-col bg-white rounded-[2.5rem] border border-pink-soft/20 shadow-2xl shadow-pink-accent/5 overflow-hidden">
          {/* Header */}
          <div className="px-8 py-6 border-b border-pink-soft/10 flex items-center justify-between bg-cream/30 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-accent flex items-center justify-center text-white shadow-lg shadow-pink-accent/20">
                <Bot size={20} />
              </div>
              <div>
                <p className="font-serif font-bold text-ink">cacai</p>
                <p className="text-[10px] text-pink-accent font-bold uppercase tracking-widest">Online</p>
              </div>
            </div>
            <button 
              onClick={clearChat}
              className="p-2 text-ink/30 hover:text-pink-accent transition-colors"
              title="Clear Chat"
            >
              <Trash2 size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth"
          >
            <AnimatePresence initial={false}>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    msg.role === "user" ? "bg-ink text-white" : "bg-pink-soft/20 text-pink-accent"
                  }`}>
                    {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={`p-5 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-ink text-white rounded-tr-none"
                      : "bg-cream/50 text-ink rounded-tl-none border border-pink-soft/10"
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {loading && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-pink-soft/20 text-pink-accent flex items-center justify-center">
                  <Bot size={14} />
                </div>
                <div className="bg-cream/50 p-5 rounded-2xl rounded-tl-none border border-pink-soft/10 flex gap-1">
                  <span className="w-1.5 h-1.5 bg-pink-accent/40 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-pink-accent/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-pink-accent/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </motion.div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-cream/10 border-t border-pink-soft/10">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Ask about my projects, experience, or AI systems..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full pl-6 pr-16 py-4 rounded-2xl border border-pink-soft/20 bg-white focus:outline-none focus:ring-2 focus:ring-pink-accent/20 focus:border-pink-accent/40 transition-all shadow-sm"
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />

              <button
                onClick={sendMessage}
                disabled={!input.trim() || loading}
                className="absolute right-2 p-3 bg-pink-accent text-white rounded-xl hover:shadow-lg hover:shadow-pink-accent/30 transition-all active:scale-95 disabled:opacity-50 disabled:scale-100"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-center mt-4 text-ink/30 uppercase tracking-widest font-bold">
              Press Enter to send
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
