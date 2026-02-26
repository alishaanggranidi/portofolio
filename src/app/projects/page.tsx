"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Filter } from "lucide-react";

const filters = ["All", "AI Systems", "Machine Learning", "Data Engineering", "Web Development", "Automation"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            <span className="text-pink-accent italic">Projects</span>
          </h1>
          <p className="text-xl text-ink/60 max-w-2xl font-light">
            Practical implementations across AI and data systems.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <div className="flex items-center gap-2 text-ink/40 mr-4">
            <Filter size={16} />
            <span className="text-xs uppercase tracking-widest font-bold">Filter By</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-2xl text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-ink text-white shadow-xl shadow-ink/20"
                  : "bg-white text-ink/60 hover:bg-pink-soft/10 hover:text-pink-accent border border-pink-soft/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group flex flex-col"
              >
                <Link to={`/projects/${project.slug}`} className="block relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                  <img 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/0 transition-colors duration-500" />

                  <div className="absolute top-6 right-6 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[10px] uppercase tracking-widest font-bold text-ink shadow-sm">
                    {project.category}
                  </div>
                </Link>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-3xl font-serif font-bold text-ink group-hover:text-pink-accent transition-colors">
                      {project.title}
                    </h3>
                    <Link to={`/projects/${project.slug}`} className="w-12 h-12 rounded-full border border-pink-soft/20 flex items-center justify-center text-ink group-hover:bg-pink-accent group-hover:text-white group-hover:border-pink-accent transition-all">
                      <ArrowRight size={20} />
                    </Link>
                  </div>

                  <p className="text-ink/60 font-light leading-relaxed mb-8 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full bg-pink-soft/10 text-pink-accent border border-pink-soft/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
