import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import GitHubRepos from './sections/GitHubRepos';
import Contact from './sections/Contact';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial user preference or system preference
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubRepos />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
