import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  image?: string;
  key?: string | number;
}

export default function ProjectCard({ project, image }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-pink-soft/20 flex flex-col hover-lift"
    >
      <h3 className="text-xl font-bold mb-4">
        {project.title}
      </h3>

      <p className="text-sm text-ink/60 mb-6 leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-pink-soft/20 text-pink-accent"
          >
            {tech}
          </span>
        ))}
      </div>

      <Link
        to={`/projects/${project.slug}`}
        className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-pink-accent transition"
      >
        View Details <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
}
