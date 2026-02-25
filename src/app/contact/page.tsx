import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import Button from '../../components/ui/Button';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 space-y-16">
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold">Get In Touch</h1>
        <p className="text-ink/60">
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Contact Information</h2>
            <p className="text-ink/70 leading-relaxed">
              I'm currently open to new opportunities in AI Engineering, Machine Learning, and Backend Development. Feel free to reach out through any of these channels.
            </p>
          </div>

          <div className="space-y-6">
            <a 
              href="mailto:anggranidi@gmail.com"
              className="flex items-center gap-6 p-6 glass-card rounded-2xl hover-lift group"
            >
              <div className="w-12 h-12 rounded-full bg-pink-soft/30 flex items-center justify-center text-pink-accent group-hover:bg-pink-accent group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-ink/40">Email</p>
                <p className="text-lg font-medium">anggranidi@gmail.com</p>
              </div>
            </a>

            <a 
              href="https://linkedin.com/in/alishaanggranidi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 glass-card rounded-2xl hover-lift group"
            >
              <div className="w-12 h-12 rounded-full bg-pink-soft/30 flex items-center justify-center text-pink-accent group-hover:bg-pink-accent group-hover:text-white transition-all">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-ink/40">LinkedIn</p>
                <p className="text-lg font-medium">linkedin.com/in/alishaanggranidi</p>
              </div>
            </a>

            <a 
              href="https://github.com/alishaanggranidis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-6 glass-card rounded-2xl hover-lift group"
            >
              <div className="w-12 h-12 rounded-full bg-pink-soft/30 flex items-center justify-center text-pink-accent group-hover:bg-pink-accent group-hover:text-white transition-all">
                <Github size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-ink/40">GitHub</p>
                <p className="text-lg font-medium">github.com/alishaanggranidis</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-10 rounded-3xl space-y-8 shadow-xl border-pink-soft/20"
        >
          <h2 className="text-2xl font-bold">Send a Message</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-ink/60 ml-2">Name</label>
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full bg-white border border-pink-soft/30 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-pink-accent/20 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-ink/60 ml-2">Email</label>
              <input 
                type="email" 
                placeholder="your@email.com"
                className="w-full bg-white border border-pink-soft/30 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-pink-accent/20 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-ink/60 ml-2">Message</label>
              <textarea 
                rows={5}
                placeholder="How can I help you?"
                className="w-full bg-white border border-pink-soft/30 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-pink-accent/20 transition-all resize-none"
              ></textarea>
            </div>
            <Button className="w-full py-4 gap-2">
              <Send size={18} />
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
