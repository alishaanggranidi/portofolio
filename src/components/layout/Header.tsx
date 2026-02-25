"use client";

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Education", href: "/education" },
    { name: "Experience", href: "/experience" },
    { name: "Ask AI", href: "/ask-ai" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-cream/80 backdrop-blur-lg border-b border-pink-soft/20 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-16 lg:px-24">
        {/* Logo */}
        <Link to="/" className="text-3xl font-script text-ink hover:text-pink-accent transition-colors group">
          alisha
          <span className="text-pink-accent group-hover:animate-pulse">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-all duration-200 relative group ${
                  isActive ? "text-pink-accent" : "text-ink/70 hover:text-pink-accent"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink-accent rounded-full"
                  />
                )}
              </Link>
            );
          })}

          <a
            href="/cv/Alisha_Anggranidi_Salsabila_CV.pdf"
            target="_blank"
            className="bg-pink-accent text-white px-5 py-2.5 rounded-2xl text-sm font-medium hover:shadow-lg hover:shadow-pink-accent/20 transition-all active:scale-95"
          >
            Download CV
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 text-ink/70 hover:text-pink-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-cream md:hidden flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-pink-soft/10">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-3xl font-script text-ink">
                alisha<span className="text-pink-accent">.</span>
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-ink/70 hover:text-pink-accent transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-10 space-y-8">
              {navLinks.map((link, idx) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-4xl font-serif font-bold transition-colors ${
                        isActive ? "text-pink-accent" : "text-ink/70"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="p-10 border-t border-pink-soft/10">
              <a
                href="/cv/Alisha_Anggranidi_Salsabila_CV.pdf"
                target="_blank"
                className="block bg-pink-accent text-white px-6 py-4 rounded-2xl text-center font-bold shadow-xl shadow-pink-accent/20"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
