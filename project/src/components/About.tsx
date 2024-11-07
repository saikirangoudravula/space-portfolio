import React from 'react';
import { SectionHeading } from './SectionHeading';

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading>About Me</SectionHeading>
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Hey there! I'm Sai, a software engineer who thinks coding is like solving puzzles, except the puzzles keep updating themselves while you're solving them. Fun, right?
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            When I'm not turning coffee into code, I'm probably debugging something that worked perfectly fine yesterday (we've all been there). My superpower? Making complex technical problems sound like everyday conversations.
            I specialize in full-stack development, but my true passion lies in creating elegant solutions that make users go "Wow!" instead of "Why?" Currently exploring the realms of AI and automation, because who doesn't want robot friends?
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Outside the world of code, you might find me gaming, experimenting with new tech, or explaining to my family why I'm laughing at programming memes.
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