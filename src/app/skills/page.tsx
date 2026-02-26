import { motion } from "motion/react";
import { Code2, Server, Globe, Cpu, Cloud, Award } from "lucide-react";
import { desc } from "motion/react-client";

export default function SkillsPage() {
  const skillGroups = [
    {
      title: "Programming Languages",
      icon: <Code2 className="text-pink-accent" />,
      items: ["PHP", "Python", "Golang", "C++", "JavaScript", "TypeScript"],
      color: "bg-pink-soft/10"
    },
    {
      title: "Backend & Frameworks",
      icon: <Server className="text-pink-accent" />,
      items: ["Laravel", "FastAPI", "Express", "Node.js", "PostgreSQL", "Redis"],
      color: "bg-pink-soft/10"
    },
    {
      title: "AI & Machine Learning",
      icon: <Cpu className="text-pink-accent" />,
      items: [
        "RAG Architecture",
        "LLM Integration",
        "PyTorch",
        "TensorFlow",
        "LangChain"
      ],
      color: "bg-pink-accent/10"
    },
    {
      title: "Infrastructure & Deployment",
      icon: <Cloud className="text-pink-accent" />,
      items: ["GCP", "Docker", "Jenkins", "GitHub Actions", "Kubernetes"],
      color: "bg-pink-soft/10"
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            <span className="text-pink-accent italic">Skills</span>
          </h1>
          <p className="text-xl text-ink/60 max-w-2xl font-light">
           Tools and technologies used across AI, machine learning, and data projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[2.5rem] border border-pink-soft/20 ${group.color} transition-all hover:shadow-xl hover:shadow-pink-accent/5 group`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                  {group.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-ink">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-5 py-2.5 text-sm font-medium rounded-xl bg-white text-ink/70 border border-pink-soft/10 shadow-sm hover:border-pink-accent/30 hover:text-pink-accent transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-20 border-t border-pink-soft/20"
        >
          <div className="flex items-center gap-4 mb-12">
            <Award className="text-pink-accent" size={32} />
            <h2 className="text-4xl font-serif font-bold">Achievements</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Conference & Academic Achievements",
                desc: "Presenter ICGTD Conference",
                image: "/public/images/achievements/icgtd.png"
              },
              {
                title: "Dicoding Camp Powered by DBS Foundation",
                desc: "Machine Learning Path (2025), Top 5 Most Interactive Student at English ILT Weekly Session.",
                image: "/public/images/achievements/dicoding.png"
              }
            ].map((achievement, idx) => (
              <div key={idx} className="p-8 bg-white rounded-3xl border border-pink-soft/10 shadow-sm hover:shadow-md transition-shadow">
                <img src={achievement.image} alt={achievement.title} className="w-full h-60 object-cover rounded-xl mb-4" />
                <p className="text-pink-accent font-mono text-xs uppercase tracking-widest mb-4"></p>
                <h4 className="text-xl font-serif font-bold mb-3">{achievement.title}</h4>
                <p className="text-ink/60 font-light">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
