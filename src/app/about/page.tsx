import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-10 leading-tight">
              Driven by <br />
              <span className="text-pink-accent italic">Methodology.</span>
            </h1>

            <div className="space-y-8 text-ink/70 leading-relaxed text-lg font-light">
              <p>
                I am an AI Engineer passionate about building intelligent systems
                that are efficient, scalable, and research-driven. My work sits at the intersection 
                of rigorous academic research and practical engineering implementation.
              </p>

              <p>
                My focus areas include Machine Learning, AI Systems Architecture,
                Retrieval-Augmented Generation (RAG), and backend engineering. I believe that 
                AI should not just be powerful, but also predictable and well-validated.
              </p>

              <p>
                I value methodological correctness, model generalization, and
                energy-efficient design (Green AI). Every system I build is designed with 
                long-term sustainability and scalability in mind.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <Link 
                to="/experience" 
                className="flex items-center gap-2 text-ink font-medium group"
              >
                View Experience 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-pink-accent" />
              </Link>
              <Link 
                to="/contact" 
                className="flex items-center gap-2 text-ink font-medium group"
              >
                Get in Touch 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-pink-accent" />
              </Link>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://picsum.photos/seed/alisha/800/1000" 
                alt="Alisha A.S."
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Label */}
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-pink-soft/20">
              <p className="text-xs uppercase tracking-widest text-ink/40 font-bold mb-2">Current Focus</p>
              <p className="text-xl font-serif font-bold text-pink-accent">Agentic RAG Systems</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
