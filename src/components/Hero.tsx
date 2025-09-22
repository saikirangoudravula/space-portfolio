import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      imageRef.current.style.transform = 
        `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1jCyd70HLxPjLkBLMzRwLWSheR14Yh_B9/view?usp=drive_link', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div 
          ref={imageRef}
          className="relative inline-block mb-8 transition-transform duration-300"
        >
          <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl mx-auto">
            <img
              src="https://i.postimg.cc/GTLsH1Hd/profile.jpg"
              alt="Sai Kiran"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bat-yellow to-yellow-600">
          Sai Kiran Goud Ravula
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
          Software Engineer
        </h2>
        
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8">
          Crafting digital experiences with code. Transforming ideas into reality.
        </p>
        
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com/saikirangoudravula"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-bat-gray rounded-lg hover:scale-110 transition-transform duration-300 hover:bg-bat-gray/80"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-bat-yellow" />
          </a>
          <a
            href="https://www.linkedin.com/in/sai-kiran-goud-ravula/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-bat-gray rounded-lg hover:scale-110 transition-transform duration-300 hover:bg-bat-gray/80"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 text-bat-yellow" />
          </a>
          <a
            href="mailto:saikirangoud2901@gmail.com"
            className="p-4 bg-bat-gray rounded-lg hover:scale-110 transition-transform duration-300 hover:bg-bat-gray/80"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 text-bat-yellow" />
          </a>
        </div>
        
        <button
          onClick={openResume}
          className="bg-gradient-to-r from-bat-yellow to-yellow-600 text-bat-black px-8 py-3 
                   rounded-lg flex items-center gap-2 mx-auto hover:scale-105 
                   transition-transform duration-300 font-medium"
        >
          <Download className="w-5 h-5" />
          View Resume
        </button>
      </div>
    </section>
  );
};
