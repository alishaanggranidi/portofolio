"use client";

import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center min-h-[90vh] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-pink-soft/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-pink-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl">
        {/* Small intro */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-sm font-medium text-pink-accent mb-6 tracking-wider uppercase"
        >
          <Sparkles size={16} />
          <span>AI Engineer • Machine Learning</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-serif font-bold leading-[0.9] tracking-tight text-ink"
        >
           <br />
          <span className="text-pink-accent">Focused on Applied Systems</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-xl md:text-xxl text-ink/60 max-w-2xl leading-relaxed font-light"
        >
          Building RAG architectures, machine learning models, 
          and automation workflows for practical implementation.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <Link
            to="/projects"
            className="group relative bg-ink text-white px-8 py-4 rounded-2xl text-lg font-medium overflow-hidden transition-all hover:shadow-2xl hover:shadow-ink/20 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-pink-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          <div className="flex gap-4">
            <a
              href="/cv/Alisha_Anggranidi_Salsabila_CV.pdf"
              target="_blank"
              className="text-ink/70 hover:text-pink-accent font-medium transition-colors underline underline-offset-8"
            >
              Resume
            </a>
            <span className="text-pink-soft/40">/</span>
            <a
              href="/cv/Alisha_Anggranidi_Salsabila_Portfolio.pdf"
              target="_blank"
              className="text-ink/70 hover:text-pink-accent font-medium transition-colors underline underline-offset-8"
            >
              Portfolio
            </a>
          </div>
        </motion.div>

        {/* Tech Stack Rail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 pt-10 border-t border-pink-soft/20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-ink/40 mb-6 font-bold">Tech Stack</p>
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-mono text-ink/50">
            {["Python", "RAG Architecture", "Tensorflow", "PyTorch", "Pinecone", "FastAPI", "PostgreSQL"].map((tech) => (
              <span key={tech} className="hover:text-pink-accent transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
