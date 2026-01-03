import React from 'react';
import { Code2, Database, Network, Cloud, Layout, Activity } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Languages',
      skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'C#']
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Backend & Systems',
      skills: ['REST APIs', 'Microservices', 'Event-Driven Architectures', 'ETL Pipelines', 'Distributed Systems']
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud & DevOps',
      skills: ['AWS (ECS, Lambda)', 'Docker', 'GitHub Actions', 'CI/CD', 'Infrastructure Automation']
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data & Databases',
      skills: ['PostgreSQL', 'MS SQL Server', 'MongoDB', 'Data Consistency', 'Deduplication']
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'Frontend & UI',
      skills: ['React', 'Next.js', 'SvelteKit', 'Recharts', 'HTML/CSS']
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Reliability & Observability',
      skills: ['Prometheus', 'Grafana', 'Circuit Breakers', 'Retry/Backoff', 'Structured Logging']
    }
  ];

  return (
    <section id="skills" className="py-20">
      <SectionHeading>Skills & Expertise</SectionHeading>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-xl transform transition-all hover:scale-105">
            <div className="flex items-center mb-4 text-blue-400">
              {category.icon}
              <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span key={idx}
                  className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};