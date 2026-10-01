import { useState } from 'react';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import ExperienceSection from './components/sections/ExperienceSection';
import FeedbackSection from './components/sections/FeedbackSection';
import HeroSection from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import Header from './components/layout/Header';
import ProjectModal from './components/projects/ProjectModal';
import { projectCatalog, projectList, initialFeedback, skillGroups, socialLinks } from './data/portfolioData';
import { useBodyScrollLock } from './hooks/useBodyScrollLock';
import { useLanguage } from './hooks/useLanguage';

function App() {
  const { lang, text, toggleLanguage } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [feedbacks] = useState(initialFeedback);
  const activeProject = selectedProject ? projectCatalog[selectedProject] : null;
  const activeCaseStudy = activeProject?.caseStudy[lang] ?? null;

  useBodyScrollLock(Boolean(selectedProject));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header text={text} lang={lang} onToggleLanguage={toggleLanguage} />
      <main id="top" className="pt-24">
        <HeroSection text={text} socialLinks={socialLinks} />
        <AboutSection text={text} />
        <SkillsSection text={text} groups={skillGroups(text)} />
        <ProjectsSection text={text} lang={lang} projects={projectList} onSelectProject={setSelectedProject} />
        <ExperienceSection text={text} />
        <ContactSection text={text} socialLinks={socialLinks} />
        <FeedbackSection text={text} lang={lang} feedbacks={feedbacks} />
      </main>
      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        <p>{text.location} • © 2026 Ali Hammadi</p>
      </footer>
      <ProjectModal project={activeProject ? { ...activeProject, summary: activeProject.summary[lang] } : null} caseStudy={activeCaseStudy} selectedProject={selectedProject} text={text} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
