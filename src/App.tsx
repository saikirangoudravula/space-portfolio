import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { LoadingIntro } from './components/LoadingIntro';
import { useLoading } from './contexts/LoadingContext';

export const App: React.FC = () => {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading ? (
        <LoadingIntro />
      ) : (
        <div className="min-h-screen bg-transparent text-white animate-fade-in relative">
          <div className="space-background">
            <div className="cosmic-dust"></div>
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="star"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`
                }}
              ></div>
            ))}
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
            <div className="shooting-star"></div>
          </div>
          <Navbar />
          <main className="container mx-auto px-4 py-8 relative">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </main>

          <footer className="bg-black/30 backdrop-blur-sm py-6 mt-20 relative">
            <div className="container mx-auto px-4 text-center text-gray-400">
              <p>© 2024 Sai Kiran Goud Ravula. Exploring the digital cosmos.</p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};
