import React, { useState } from 'react';
import { Server, Shield, Activity, X, ArrowRight, Database, Cloud, Lock } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    icon: React.ReactNode;
    problem: string;
    constraints: string[];
    architecture: string;
    failureModes: string[];
    tradeoffs: string[];
    scale: string;
  };
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={onClose}>
    <div
      className="bg-gray-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-gray-700 shadow-2xl relative"
      onClick={e => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-gray-800 rounded-full transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
            {project.icon}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
        </div>

        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          {project.description}
        </p>

        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4 text-red-400">
                <Shield className="w-5 h-5" />
                <h3 className="font-semibold text-lg">The Problem</h3>
              </div>
              <p className="text-gray-300">{project.problem}</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4 text-yellow-400">
                <Lock className="w-5 h-5" />
                <h3 className="font-semibold text-lg">Constraints</h3>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {project.constraints.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-4 text-blue-400">
              <Cloud className="w-5 h-5" />
              <h3 className="font-semibold text-lg">High-Level Architecture</h3>
            </div>
            <p className="text-gray-300 whitespace-pre-line leading-relaxed font-mono text-sm">
              {project.architecture}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4 text-orange-400">
                <Activity className="w-5 h-5" />
                <h3 className="font-semibold text-lg">Failure Modes & Recovery</h3>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {project.failureModes.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-lg">
              <div className="flex items-center gap-2 mb-4 text-purple-400">
                <Database className="w-5 h-5" />
                <h3 className="font-semibold text-lg">Tradeoffs</h3>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {project.tradeoffs.map((t, i) => <li key={i}>{t}</li>)}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 mt-8">
            <h3 className="text-xl font-semibold mb-4 text-green-400">What Breaks at 10x Scale?</h3>
            <p className="text-gray-300">{project.scale}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Event-Driven ETL for Multi-Location Operations',
      icon: <Server className="w-8 h-8" />,
      description: 'A resilient data pipeline syncing complex financial and operational data across 17+ locations near real-time.',
      problem: 'Legacy batch jobs were causing 4-hour data delays, leading to stale inventory counts and conflicting sales reports across branches. Manual reconciliation took 10+ hours/week.',
      constraints: ['Near real-time sync (< 5 mins)', 'No data loss permitted', 'Handle intermittent connectivity at remote sites', 'Cost-effective serverless architecture'],
      architecture: `Source: Multiple on-prem SQL Databases -> CDC (Change Data Capture)
Ingestion: Serverless Compute -> Message Queue (Buffering) -> Pub/Sub (Fan-out)
(Implemented via AWS Lambda, SQS, SNS)
Processing: Containerized Microservices (Normalization & Enrichment)
(Implemented via AWS ECS Fargate)
Storage: Relational Data Warehouse (PostgreSQL)
Analytics: Metabase / Internal Dashboards`,
      failureModes: [
        'Source DB unavailability: Exponential backoff & jitter implemented in producer Lambdas.',
        'Processing failures: Dead Letter Queues (DLQ) with automatic retry policies for transient errors; Slack alerts for permanent failures.',
        'Duplicate events: Idempotency keys generated based on composite primary keys ensured exactly-once processing.'
      ],
      tradeoffs: [
        'Competed Latency vs. Throughput: Chose buffering with SQS to handle burst loads, accepting slight latency increase for higher reliability.',
        'Complexity vs. Maintainability: Adopted microservices over monolith for isolation, accepting higher DevOps overhead.'
      ],
      scale: 'At 10x volume, the primary bottleneck would likely be the single PostgreSQL Writer instance. Mitigation strategies include implementing Read Replicas for analytics queries and sharding the database by region or branch ID.'
    },
    {
      title: 'Reliability Layer for Third-Party Integrations',
      icon: <Shield className="w-8 h-8" />,
      description: 'A fault-tolerant gateway managing unstable external APIs, reducing failure rates by ~99%.',
      problem: 'Critical business workflows depended on a flaky 3rd-party CRM API with strict rate limits and frequent 5xx errors. Cascading failures were taking down internal tools.',
      constraints: ['Zero dropped user requests during downtime', 'Strict adherence to API rate limits (100 req/min)', 'Transparent retry mechanism'],
      architecture: `Client -> Internal Gateway API (Node.js/Express)
Middleware Layer:
  1. Distributed Rate Limiter (Sliding window via Redis)
  2. Circuit Breaker (Opossum)
  3. Request Queue (BullMQ/Redis for background retries)
Target -> External API`,
      failureModes: [
        'API Outage: Circuit Breaker opens, fast-failing requests or queuing them for later based on priority.',
        'Rate Limit Exceeded: Requests are automatically throttled and queued.',
        'Redis Failure: Fallback to in-memory rate limiting (degraded mode) to keep service availble.'
      ],
      tradeoffs: [
        'Consistency vs. Availability: Queued requests mean immediate confirmation to user is "Accepted" (202) rather than "Created" (201), requiring client-side polling or webhooks.',
        'Cost: Redis adds infrastructure cost but is essential for distributed state.'
      ],
      scale: 'Currently single Redis instance. At 10x scale, would need Redis Cluster for high availability and sharding queues to prevent head-of-line blocking.'
    },
    {
      title: 'Internal Dashboards & Slack-Based Tooling',
      icon: <Activity className="w-8 h-8" />,
      description: 'Real-time observability and operational tools eliminating manual reporting workflows.',
      problem: 'Execs lacked visibility into live sales data. Field teams needed quick access to customer status without logging into slow VPNs/Legacy ERPs.',
      constraints: ['Mobile-first access for field teams', 'Secure role-based access', 'Low latency responses (< 2s)'],
      architecture: `Interface: Slack Commands / React Dashboard
Backend: Python/Flask API -> Read-Only SQL Replicas
Integrations: Real-time Messaging API (Slack Bolt), Legacy Data Sheets, Email Service (AWS SES)
Security: OAuth2 SSO, Role-Based Access Control (RBAC) middleware`,
      failureModes: [
        'Slack API downtime: Fallback to Web Dashboard.',
        'Slow SQL Queries: Query results cached in Redis for 5 mins for frequent dashboard views.',
        'Unauthorized Access: Strict validation of Slack Request Signatures.'
      ],
      tradeoffs: [
        'Build vs. Buy: Custom Slack tool allowed deep integration with proprietary schema vs. generic BI tool limitations.',
        'Caching: Stale data (up to 5 mins) accepted for generic dashboards to ensure responsiveness.'
      ],
      scale: 'Heavy concurrent usage of complex dashboard queries could overload the read replica. Would move to pre-aggregated Materialized Views for common metrics.'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <SectionHeading>System Design Deep Dives</SectionHeading>
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-gray-400 text-center mb-12 -mt-6 max-w-2xl mx-auto">
          Case studies of production systems where I managed constraints, tradeoffs, and failure modes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card p-6 rounded-xl border border-gray-700/50 cursor-pointer group relative overflow-hidden"
              onClick={() => setSelectedProject(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="mb-6 mx-auto w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300 group-hover:text-bat-yellow">
                {project.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-center group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 text-center mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="flex items-center justify-center text-blue-400 font-medium group-hover:gap-2 transition-all">
                <span>View System Design</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <ProjectModal
          project={projects[selectedProject]}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};