import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Leadership } from './components/sections/Leadership';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { ChatBot } from './components/ui/ChatBot';
import { PlanetModel } from './components/ui/PlanetModel';
import { FloatingShapes } from './components/ui/FloatingShapes';
import { StarField } from './components/ui/StarField';

function App() {
  return (
    <div className="min-h-screen text-gray-100 selection:bg-emerald-500/30 relative overflow-hidden">
      {/* Base Background Color */}
      <div className="fixed inset-0 bg-charcoal-900 -z-50" />

      {/* Background Effects */}
      <StarField />
      <PlanetModel />
      <FloatingShapes />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Leadership />
        <Certifications />
        <Contact />
      </main>

      <footer className="py-12 border-t border-white/5 bg-charcoal-900">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} KARUPPASAMY M. All rights reserved. Built with React & Tailwind CSS.
            </div>
            <div className="flex gap-8 items-center">
              <a href="#" className="text-gray-500 hover:text-emerald-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-emerald-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
}

export default App;


