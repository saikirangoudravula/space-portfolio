import React from 'react';
import { SectionHeading } from './SectionHeading';

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading>About Me</SectionHeading>
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            I am a Backend Software Engineer specialized in building fault-tolerant distributed systems and automating cloud infrastructure. My work focuses on solving data consistency challenges at scale, engineering reliability layers for unstable third-party integrations, and eliminating operational toil through internal tooling.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            I prioritize correctness over velocity when dealing with financial data pipelines and availability when designing user-facing services. Whether architecting event-driven ETL flows on AWS or containerizing legacy monoliths, I design for failure-ensuring systems degrade gracefully and recover automatically.
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
              <h3 className="text-xl font-semibold mb-4 text-blue-400">Certifications & Coursework</h3>
              <ul className="space-y-2">
                {[
                  'Oracle Cloud Infrastructure Gen AI',
                  'Cryptography & Network Security',
                  'Machine Learning Fundamentals',
                  'Web Development',
                  'Java Development'
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
