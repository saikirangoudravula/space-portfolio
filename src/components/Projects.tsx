import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const Projects = () => {
  const projects = [
    {
      title: 'Student Management System',
      description: 'A comprehensive system for managing student records, enrollments, and grades. Built with Python backend and modern web technologies.',
      technologies: ['Python', 'MySQL', 'HTML/CSS', 'JavaScript'],
      features: [
        'Student enrollment management',
        'Grade tracking system',
        'Automated report generation',
        'User authentication'
      ],
      github: 'https://github.com/saikirangoudravula/student-management',
      demo: '#'
    },
    {
      title: 'Leaf Disease Detection using CNN',
      description: 'Innovative machine learning solution leveraging Convolutional Neural Networks for automated plant disease detection. Implemented using the comprehensive PlantVillage dataset, achieving high accuracy in identifying various plant pathologies through advanced computer vision techniques.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'Keras'],
      features: [
        'Advanced CNN architecture with optimized layers for image recognition',
        'Robust image preprocessing pipeline with data augmentation',
        'Multi-class disease classification with confidence scoring',
        'Comprehensive performance metrics and validation framework'
      ],
      github: 'https://github.com/saikirangoudravula/leaf-disease-detection',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <SectionHeading>Projects</SectionHeading>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-300">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-700 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};