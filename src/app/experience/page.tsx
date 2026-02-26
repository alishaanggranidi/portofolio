import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

export default function ExperiencePage() {
  const experiences = [
    {
      title: "AI Development (Automation AI Analytics) Internship",
      company: "PT. Infomedia Nusantara",
      period: "Jul 2025 – Dec 2025",
      description: "Contributed to business oriented AI initiatives, focusing on workflow automation and AI integration. Supported analytics processes through API usage, prompt engineering, and structured automation design.",
      tech: ["AI APIs", "Prompt Engineering", "Workflow Automation"]
    },
    {
      title: "Machine Learning Path Cohort",
      company: "Coding Camp powered by DBS Foundation",
      period: "Feb 2025 – Jul 2025",
      description: `- Completed structured training in machine learning, covering supervised learning, model evaluation, and applied data analysis using Python.
      - Recognized as a Top 5 Most Interactive Participant in the English ILT Weekly Consultation.`,
      tech: ["Machine Learning", "Data Science", "Python"]
    },
    {
      title: "Assistant Lecturer",
      company: "Telkom University",
      period: "2023 - 2025",
      description: "Assisting in teaching Discrete Mathematics and Mathematical Logic. Responsible for conducting tutorials sessions, supporting grading activities, and helping students strengthen analytical and problem solvung skills",
      tech: ["Discrete Math", "Mathematical Logic", "Teaching"]
    },
    {
      title: "Discrete Mathematics Tutor",
      company: "HIMA IF Telkom University",
      period: "2024 - 2025",
      description: "Provided additional academic support sessions for students requiring reinforcement in discrete mathematics concepts, including logic, combinatorics, and graph theory.",
      tech: ["Mathematics", "Tutoring"]
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            <span className="text-pink-accent italic">Experience</span>
          </h1>
          <p className="text-xl text-ink/60 max-w-2xl font-light">
            A track record of building complex AI systems and scalable 
            engineering solutions.
          </p>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-pink-accent/20 before:via-pink-accent before:to-pink-accent/20">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-pink-accent text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={16} />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-8 rounded-3xl bg-white border border-pink-soft/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-pink-accent font-mono text-xs font-bold flex items-center gap-2">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-1 text-ink">{exp.title}</h3>
                <p className="text-pink-accent/80 font-medium mb-4">{exp.company}</p>
                <p className="text-ink/60 font-light leading-relaxed mb-6 whitespace-pre-line">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span key={t} className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-pink-soft/10 text-pink-accent">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Organization Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-32 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Leadership & <span className="text-pink-accent italic">Impact.</span>
          </h2>
          <p className="text-lg text-ink/60 max-w-2xl font-light">
            Building communities and leading teams through active organizational involvement.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {[
            {
              title: "Head of Division",
              org: "Aksara Jurnalistik Telkom University",
              period: "2023 - Present",
              desc: "Leading editorial strategy and content production for student-led journalism."
            },
            {
              title: "Business & Entrepreneurship Staff",
              org: "Himpunan Mahasiswa S1 Informatika",
              period: "2023",
              desc: "Managing association administrative tasks and supporting student business initiatives."
            },
            {
              title: "Committee – Homecoming Roadshow",
              org: "UKM Samalowa Telkom University",
              period: "2022",
              desc: "Coordinating logistics and event planning for regional student outreach."
            }
          ].map((org, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white border border-pink-soft/10 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-xl font-serif font-bold text-ink">{org.title}</h3>
                <p className="text-pink-accent font-medium text-sm">{org.org}</p>
                <p className="mt-2 text-ink/60 text-sm font-light">{org.desc}</p>
              </div>
              <div className="shrink-0 px-4 py-1 rounded-full bg-cream text-ink/40 text-[10px] font-bold uppercase tracking-widest border border-pink-soft/10">
                {org.period}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
