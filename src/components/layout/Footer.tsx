import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#EFE6DD] border-t border-[#E8B4C8]/40">
      <div className="px-6 md:px-16 lg:px-24 py-12 grid md:grid-cols-3 gap-8 text-sm">

        {/* Left */}
        <div>
          <h3 className="font-semibold text-base">
            Alisha Anggranidi Salsabila
          </h3>
          <p className="mt-2 text-gray-600">
            AI Engineer | Machine Learning 
          </p>
          <p className="mt-3 text-gray-500">
            Building structured and scalable AI systems.
          </p>
        </div>

        {/* Middle */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/ask-ai">Ask AI</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/alishaas"
              target="_blank"
              className="hover:text-[#D67BA8]"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/alishaas"
              target="_blank"
              className="hover:text-[#D67BA8]"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:alisha@example.com"
              className="hover:text-[#D67BA8]"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-6 border-t border-[#E8B4C8]/30">
        © {new Date().getFullYear()} Alisha Anggranidi Salsabila. Built with React & Tailwind CSS.
      </div>
    </footer>
  );
}
