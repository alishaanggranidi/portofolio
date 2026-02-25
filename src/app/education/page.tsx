import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function EducationPage() {
  const education = [
    {
      school: "Telkom University",
      degree: "Bachelor of Informatics",
      major: "Intelligent Systems & Data Science",
      period: "2022 – 2026",
      location: "Bandung, Indonesia",
      achievements: [
        "Focus on Intelligent Systems and Data Science",
        "Active in research and academic assistance",
        "Maintaining high academic standards in core CS subjects"
      ]
    },
    {
      school: "SMA Negeri 1 Mataram",
      degree: "High School Diploma",
      major: "Natural Sciences and Mathematics",
      period: "August 2019 - March 2022",
      location: "Mataram, Indonesia",
      achievements: [
        "Top 5% of graduating class",
        "Active in Science and Technology Club",
        "Focused on advanced mathematics and physics"
      ]
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
            Academic <span className="text-pink-accent italic">Foundation.</span>
          </h1>
          <p className="text-xl text-ink/60 max-w-2xl font-light">
            The roots of my technical curiosity and mathematical rigor.
          </p>
        </motion.div>

        <div className="space-y-12">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative pl-12 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-pink-soft/30"
            >
              {/* Icon */}
              <div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-2xl bg-white border border-pink-soft/20 shadow-sm flex items-center justify-center text-pink-accent group-hover:scale-110 transition-transform">
                <GraduationCap size={24} />
              </div>

              <div className="bg-white p-10 rounded-[2.5rem] border border-pink-soft/10 shadow-sm hover:shadow-xl hover:shadow-pink-accent/5 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-ink mb-1">{edu.school}</h3>
                    <div className="flex items-center gap-4 text-ink/50 text-sm">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                  <div className="px-6 py-2 rounded-full bg-pink-accent text-white text-sm font-bold shadow-lg shadow-pink-accent/20">
                    {edu.degree}
                  </div>
                </div>

                <p className="text-xl text-ink/70 font-medium mb-8">
                  Major in <span className="text-pink-accent">{edu.major}</span>
                </p>

                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-ink/40 font-bold mb-4">Key Highlights</p>
                  {edu.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-3 text-ink/60 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-accent mt-2 shrink-0" />
                      {ach}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
