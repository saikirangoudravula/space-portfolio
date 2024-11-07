import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      company: 'Innova Solutions',
      logo: 'https://media.licdn.com/dms/image/C560BAQHOYm2eErTBtg/company-logo_200_200/0/1630997552278/innova_solutions_logo?e=2147483647&v=beta&t=PxUFoQxMQJUHHQI-HvTEb7CZlZWbC2t5wnQiFqL2Bj4',
      position: 'Software Engineer',
      period: 'Jan 2024 - July 2024',
      location: 'Overland Park, KS',
      responsibilities: [
        'Redesigned Web Applications for improved scalability',
        'Developed responsive UIs using ReactJS and Node.js',
        'Implemented backend services with Java Spring Boot',
        'Created CI/CD pipelines using Azure DevOps',
        'Designed and implemented RESTful APIs'
      ]
    },
    {
      company: 'Accenture',
      logo: 'https://logos-world.net/wp-content/uploads/2020/07/Accenture-Logo-700x394.png',
      position: 'Associate Application Developer',
      period: 'Oct 2021 - June 2022',
      location: 'Hyderabad, India',
      responsibilities: [
        'Developed healthcare applications for Cigna',
        'Contributed to microservices architecture transition',
        'Created full-stack solutions with Java backend',
        'Managed projects using Agile methodology',
        'Optimized database performance'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Professional Experience</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="group p-8 transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-32 flex-shrink-0">
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} logo`}
                  className="w-full h-auto object-contain filter brightness-200 contrast-200"
                />
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 
                                 transition-colors duration-300">
                      {exp.company}
                    </h3>
                    <p className="text-lg text-gray-300">{exp.position}</p>
                  </div>
                  <div className="text-left md:text-right mt-2 md:mt-0">
                    <p className="text-gray-400">{exp.period}</p>
                    <p className="text-gray-500 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      {exp.location}
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li 
                      key={idx}
                      className="text-gray-300 pl-4 relative before:content-[''] before:absolute 
                               before:left-0 before:top-[0.6em] before:w-2 before:h-2 
                               before:bg-blue-500 before:rounded-full"
                    >
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};