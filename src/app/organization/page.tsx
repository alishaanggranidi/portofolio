import { motion } from "motion/react";
import { Users, Star, Award, Calendar } from "lucide-react";

export default function OrganizationPage() {
  const organizations = [
    {
      title: "Head of Division",
      organization: "Aksara Jurnalistik Telkom University",
      period: "2023 - Present",
      description: "Leading the editorial and content strategy division. Overseeing publication workflows and managing a team of student journalists.",
      icon: <Star size={20} />
    },
    {
      title: "Business & Entrepreneurship Division Staff & Secretary",
      organization: "Himpunan Mahasiswa S1 Informatika Telkom University",
      period: "2023",
      description: "Managed administrative tasks and supported entrepreneurial initiatives within the Informatics student association.",
      icon: <Users size={20} />
    },
    {
      title: "Committee – Homecoming Roadshow",
      organization: "UKM Samalowa Telkom University",
      period: "2022",
      description: "Coordinated logistics and event planning for the annual homecoming roadshow, ensuring smooth execution across multiple locations.",
      icon: <Calendar size={20} />
    }
  ];

  const eventRoles = [
    "Event Coordinator - Tech Symposium 2024",
    "Public Relations - Informatics Welcoming Party 2023",
    "Logistics Staff - National Programming Contest 2022"
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
            Leadership & <span className="text-pink-accent italic">Impact.</span>
          </h1>
          <p className="text-xl text-ink/60 max-w-2xl font-light">
            Building communities, leading teams, and driving organizational 
            excellence through active involvement.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {organizations.map((org, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 rounded-[2.5rem] bg-white border border-pink-soft/10 shadow-sm hover:shadow-xl hover:shadow-pink-accent/5 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-pink-soft/10 text-pink-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    {org.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-ink">{org.title}</h3>
                    <p className="text-pink-accent font-medium">{org.organization}</p>
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-cream text-ink/50 text-xs font-bold uppercase tracking-widest border border-pink-soft/10">
                  {org.period}
                </div>
              </div>
              <p className="mt-8 text-ink/60 font-light leading-relaxed max-w-3xl">
                {org.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Event Roles Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-20 border-t border-pink-soft/20"
        >
          <div className="flex items-center gap-4 mb-12">
            <Award className="text-pink-accent" size={32} />
            <h2 className="text-4xl font-serif font-bold">Additional Event Roles</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {eventRoles.map((role, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-pink-soft/10 shadow-sm hover:border-pink-accent/30 transition-colors">
                <p className="text-ink/70 font-medium text-sm">{role}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
