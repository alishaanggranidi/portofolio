"use client";

import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../../../data/projects";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-40 text-center space-y-8">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <button 
          onClick={() => navigate('/projects')}
          className="bg-[#D67BA8] text-white px-6 py-2 rounded-xl"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-24"
    >
      <div className="max-w-4xl mx-auto">

        {/* Back */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm mb-10 hover:text-[#D67BA8]"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative w-full h-[280px] md:h-[400px] rounded-2xl overflow-hidden mb-10 shadow-sm"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl font-semibold mb-4">
          {project.title}
        </h1>

        {/* Category */}
        <span className="inline-block mb-6 text-xs px-4 py-1 rounded-full bg-[#E8B4C8]/20 text-[#D67BA8]">
          {project.category}
        </span>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          {project.description}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-14">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#D67BA8] text-white px-6 py-3 rounded-2xl hover:opacity-90 transition"
            >
              <Github size={18} />
              View GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="inline-flex items-center gap-2 border border-[#D67BA8] text-[#D67BA8] px-6 py-3 rounded-2xl hover:bg-[#D67BA8] hover:text-white transition"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </div>

        {/* Content Sections */}
        <div className="space-y-14">
          <Section title="Overview" content={project.overview} />
          <Section title="Problem" content={project.problem} />
          <Section title="Approach" content={project.approach} />
          <Section title="Results" content={project.results} />
        </div>

        {/* Tech */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="text-sm px-4 py-2 rounded-full bg-[#E8B4C8]/20 text-[#D67BA8]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}

function Section({ title, content }: { title: string; content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </motion.div>
  );
}
