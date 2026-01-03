import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import shamrockLogo from '/Shamrock_Logo (png).png';
import { SectionHeading } from './SectionHeading';

export const Experience = () => {
  const experiences = [
    {
      company: 'Shamrock Roofing & Construction',
      logo: shamrockLogo,
      position: 'Software Developer',
      period: 'Jan 2025 - Present',
      location: 'Overland Park, KS',
      responsibilities: [
        'Architected and owned resilient, event-driven ETL pipelines on AWS (ECS, Lambda) syncing complex financial and operational data across 17+ locations, ensuring near real-time data freshness and strong data consistency guarantees.',
        'Engineered fault-tolerant reliability layers using circuit breakers, rate limiting, and exponential backoff to harden unstable third-party integrations, reducing external dependency failures by ~99%.',
        'Modernized cloud infrastructure by containerizing Python and Node.js services with Docker and AWS ECS, and automating CI/CD via GitHub Actions, cutting deployment time by ~40%.',
        'Built high-performance internal dashboards and Slack-based tools providing real-time visibility into sales, fleet, and financial metrics, eliminating manual reporting workflows.'
      ]
    },
    {
      company: 'Quick Assert Consulting, Inc',
      logo: 'https://ui-avatars.com/api/?name=Quick+Assert&background=0D8ABC&color=fff',
      position: 'Software Developer',
      period: 'Sep 2024 - Dec 2024',
      location: 'Kansas City, MO',
      responsibilities: [
        'Delivered core backend and automation features for internal analytics and reporting tools using Python and Flask, contributing production-ready functionality within a 3-month engagement.',
        'Built reliable data ingestion and transformation logic with SQL-based deduplication and timezone handling, ensuring accurate daily and weekly reporting for distributed sales teams.',
        'Integrated lightweight CI/CD automation with GitHub Actions, enabling faster iteration and consistent deployments in a fast-paced consulting environment.'
      ]
    },
    {
      company: 'Innova Solutions',
      logo: 'https://innovasolutions.com/wp-content/uploads/2025/01/Logo-New.svg',
      position: 'Software Engineer',
      period: 'June 2024 - July 2024',
      location: 'Overland Park, KS',
      responsibilities: [
        'Built and maintained secure, scalable REST APIs using Java and Spring Boot to support high-volume telecom data flows, focusing on throughput and fault tolerance.',
        'Automated build and deployment pipelines with Azure DevOps, reducing release cycles by ~30% and improving deployment consistency.',
        'Implemented unit and integration testing with JUnit and Postman, contributing to highly stable releases with minimal production defects.'
      ]
    },
    {
      company: 'Accenture',
      logo: 'https://logos-world.net/wp-content/uploads/2020/07/Accenture-Logo-700x394.png',
      position: 'Associate Application Developer',
      period: 'Oct 2021 - June 2022',
      location: 'Hyderabad, India',
      responsibilities: [
        'Contributed to the migration of large-scale healthcare applications from monolithic architectures to Java and Spring Boot-based microservices.',
        'Built and enhanced backend components for systems such as Member Portals and Claims APIs, supporting critical healthcare workflows.',
        'Wrote and optimized complex SQL queries for high-volume transactional systems, improving data retrieval performance.',
        'Collaborated in Agile Scrum teams using Jira and Git, participating in code reviews and supporting QA and release processes.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <SectionHeading>Professional Experience</SectionHeading>
      <div className="max-w-4xl mx-auto space-y-8">
        <p className="text-gray-400 text-center mb-8 -mt-6">
          Selected production systems I've owned or contributed to:
        </p>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group p-8 transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-32 flex-shrink-0">
                {exp.company === 'Innova Solutions' ? (
                  <div className="bg-white p-2 rounded-md">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ) : exp.company === 'Shamrock Roofing & Construction' ? (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-auto object-contain"
                  />
                ) : (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-auto object-contain filter brightness-200 contrast-200"
                  />
                )}
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
