"use client";

import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

const featuredProjects = [
  {
    title: "Breast Cancer Detection",
    description:
      "Deep learning–based CAD system using EfficientNetV2 with patient-level Group K-Fold validation to ensure scientific rigor.",
    tech: ["PyTorch", "Computer Vision", "Medical AI"],
    slug: "breast-cancer-detection",
    image: "https://picsum.photos/seed/cancer/800/500"
  },
  {
    title: "Agentic RAG Chatbot",
    description:
      "Multi-agent RAG system powered by Groq API, integrating vector retrieval and context-aware LLM reasoning.",
    tech: ["Groq API", "LangChain", "RAG Architecture"],
    slug: "agentic-rag-chatbot",
    image: "https://picsum.photos/seed/chatbot/800/500"
  },
  {
    title: "ETL Automation Pipeline",
    description:
      "End-to-end ETL system with web scraping, transformation, and loading into PostgreSQL and Google Sheets.",
    tech: ["Python", "PostgreSQL", "ETL"],
    slug: "etl-automation-pipeline",
    image: "https://picsum.photos/seed/etl/800/500"
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-soft/10 text-pink-accent text-[10px] font-bold uppercase tracking-widest mb-4">
              <Sparkles size={12} />
              Portfolio
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold">
              Featured <span className="text-pink-accent italic">Projects.</span>
            </h2>
          </motion.div>

          <Link
            to="/projects"
            className="group flex items-center gap-3 text-ink font-medium text-lg"
          >
            View All Projects 
            <div className="w-12 h-12 rounded-full border border-pink-soft/20 flex items-center justify-center group-hover:bg-pink-accent group-hover:text-white group-hover:border-pink-accent transition-all">
              <ArrowRight size={20} />
            </div>
          </Link>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/projects/${project.slug}`} className="block relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors duration-500" />
              </Link>

              <h3 className="text-2xl font-serif font-bold mb-3 text-ink group-hover:text-pink-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-ink/60 font-light leading-relaxed mb-6 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-pink-soft/10 text-pink-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
