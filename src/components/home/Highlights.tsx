"use client";

import { motion } from "motion/react";
import { Brain, Database, Server, Cloud } from "lucide-react";

const highlights = [
  {
    title: "AI Development",
    description:
      "Designing RAG systems, agentic workflows, AI API integrations, and enterprise automation solutions.",
    icon: Brain,
    color: "bg-pink-soft/10"
  },
  {
    title: "Machine Learning",
    description:
      "Medical AI, NLP, computer vision, structured validation, and experimental model evaluation.",
    icon: Database,
    color: "bg-pink-accent/10"
  },
  {
    title: "Backend Engineering",
    description:
      "Building scalable APIs and backend systems using FastAPI, Laravel, Golang, and PostgreSQL.",
    icon: Server,
    color: "bg-pink-soft/10"
  },
  {
    title: "DevOps & Cloud",
    description:
      "Containerization, CI/CD pipelines, and cloud deployment using Docker, Jenkins, and Google Cloud.",
    icon: Cloud,
    color: "bg-pink-soft/10"
  },
];

export default function Highlights() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Core <span className="text-pink-accent italic">Expertise.</span>
          </h2>
          <p className="text-xl text-ink/60 max-w-2xl font-light">
            A structured combination of AI research, backend development,
            and system implementation focused on practical and scalable solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group p-10 rounded-[2.5rem] border border-pink-soft/10 ${item.color} transition-all hover:shadow-2xl hover:shadow-pink-accent/5`}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-sm text-pink-accent mb-8 group-hover:scale-110 transition-transform">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-serif font-bold mb-4 text-ink">
                  {item.title}
                </h3>

                <p className="text-ink/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
