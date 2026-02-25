import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import RootLayout from './app/layout';
import Home from './app/page';
import About from './app/about/page';
import Projects from './app/projects/page';
import ProjectDetail from './app/projects/[slug]/page';
import AskAI from './app/ask-ai/page';
import Skills from './app/skills/page';
import Experience from './app/experience/page';
import Education from './app/education/page';
import Organization from './app/organization/page';
import Contact from './app/contact/page';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/ask-ai" element={<AskAI />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/organization" element={<Organization />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}
