"use client";

import { motion } from "motion/react";
import { Linkedin, Github } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-32 border-t border-pink-soft/20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink">
            About <span className="text-pink-accent italic">Me.</span>
          </h2>

          <p className="mt-6 text-lg text-ink/60 leading-relaxed">
            I focus on building applied AI systems with structured design and
            practical implementation. My work combines machine learning,
            retrieval-based architectures, and backend engineering to create
            solutions that are not only intelligent, but reliable.
          </p>

          <p className="mt-6 text-lg text-ink/60 leading-relaxed">
            My interest lies in medical AI, RAG systems, and experimental model
            evaluation with emphasis on scientific validation and deployment
            readiness.
          </p>

          {/* SOCIAL ICONS — PINDAH KE SINI */}
          <div className="flex gap-5 mt-8">
            <a
              href="https://linkedin.com/in/alishaanggranidi"
              target="_blank"
              className="text-ink/50 hover:text-pink-accent transition"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="https://github.com/alishaanggranidi"
              target="_blank"
              className="text-ink/50 hover:text-pink-accent transition"
            >
              <Github size={22} />
            </a>
          </div>
        </motion.div>

        {/* PHOTO SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-end"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-xl border border-pink-soft/30">
            <img
              src="/images/profile.jpg"
              alt="Alisha Anggranidi Salsabila"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}