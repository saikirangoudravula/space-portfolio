import React from 'react';
import { SectionHeading } from './SectionHeading';

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading>About Me</SectionHeading>
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            👋 Hi, I'm Sai — a software engineer who thrives at the intersection of problem-solving and creativity. I currently work at Shamrock Roofing & Construction in Kansas City, where I build tools and platforms that make real-world operations run smoother — from sales dashboards and project management apps to automation workflows that save hours of manual effort.
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            I specialize in full-stack development (JavaScript/TypeScript, Python, SQL, AWS, React Native, SvelteKit, Supabase, and more), and I enjoy turning complex business processes into intuitive, scalable solutions. My projects often mix data pipelines, cloud infrastructure, and automation — because I believe software should feel effortless for the people who use it.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Lately, I've been diving deeper into AI and workflow automation, experimenting with how large language models, Slack integrations, and marketing pipelines can help teams work smarter, not harder.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Outside of work, I'm always learning — whether it's sharpening my DSA and system design skills, building side projects, improving my fitness (yes, I lift 🏋️), or exploring how tech can solve everyday challenges.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            If you're into building smart systems, geeking out over new tech, or even just sharing a good programming meme, we'll probably get along.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="group">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Education</h3>
              <ul className="space-y-4">
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <h4 className="font-medium text-gray-200">
                    <a 
                      href="https://www.ucmo.edu/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      University of Central Missouri
                    </a>
                  </h4>
                  <p className="text-gray-400">Master of Science - Computer Science</p>
                  <p className="text-gray-500">August 2022 - May 2024</p>
                </li>
                <li className="transform transition-all duration-300 hover:translate-x-2">
                  <h4 className="font-medium text-gray-200">
                    <a 
                      href="https://www.jntuh.ac.in/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors"
                    >
                      Jawaharlal Nehru Technological University
                    </a>
                  </h4>
                  <p className="text-gray-400">Bachelor of Science - Electronics and Communication Engineering</p>
                  <p className="text-gray-500">June 2017 - July 2021</p>
                </li>
              </ul>
            </div>
            
            <div className="group">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Certifications</h3>
              <ul className="space-y-2">
                {[
                  'Oracle Cloud Infrastructure 2024 Gen AI',
                  'Java Development',
                  'Cryptography and Network Security',
                  'Machine Learning Fundamentals',
                  'Web Development'
                ].map((cert, index) => (
                  <li 
                    key={index}
                    className="text-gray-300 pl-4 relative before:content-[''] before:absolute 
                             before:left-0 before:top-[0.6em] before:w-2 before:h-2 
                             before:bg-blue-500 before:rounded-full transform transition-all 
                             duration-300 hover:translate-x-2"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
