'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Accelerate your delivery with CI/CD pipelines, Infrastructure as Code, GitOps practices, and cloud platform orchestration.',
    features: ['CI/CD Pipeline Design', 'Infrastructure as Code', 'GitOps with ArgoCD', 'Kubernetes Management'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 14v10l8 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="4" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'platform',
    title: 'Platform Engineering',
    description: 'Build Internal Developer Platforms that reduce cognitive load and empower your teams with self-service infrastructure.',
    features: ['Backstage Portals', 'Kratix & Crossplane', 'Golden Paths', 'Developer Self-Service'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="28" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="8" y="28" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="28" y="28" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="24" r="4" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'devsecops',
    title: 'DevSecOps',
    description: 'Embed security throughout the development lifecycle with Policy as Code, compliance automation, and shift-left practices.',
    features: ['Policy as Code (OPA)', 'Compliance Automation', 'Container Security', 'SOC 2 & HIPAA Support'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M24 4L6 12v12c0 11.11 7.67 21.47 18 24 10.33-2.53 18-12.89 18-24V12L24 4z" stroke="currentColor" strokeWidth="2"/>
        <path d="M18 24l5 5 9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'ai',
    title: 'AI & ML Solutions',
    description: 'Deploy enterprise AI infrastructure with security, compliance, and scalability built-in. From RAG to MLOps.',
    features: ['Enterprise RAG', 'MLOps Pipelines', 'Private AI Deployment', 'Model Observability'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="34" r="6" stroke="currentColor" strokeWidth="2"/>
        <circle cx="36" cy="34" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M24 20v6M18 30l-3-2M30 30l3-2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: 'cloud',
    title: 'Cloud Consulting',
    description: 'Expert guidance on AWS, Azure, and GCP. From migration to optimization, we help you maximize cloud value.',
    features: ['Cloud Migration', 'Multi-Cloud Strategy', 'Cost Optimization', 'FinOps Implementation'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M36 22a8 8 0 00-16 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h16a8 8 0 000-16z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: 'qa',
    title: 'Quality Assurance',
    description: 'Comprehensive testing strategies with automation frameworks, quality gates, and continuous quality monitoring.',
    features: ['Test Automation', 'E2E Testing', 'Performance Testing', 'Quality Gates'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
        <path d="M17 24l5 5 9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function ServicesOverview() {
  return (
    <section className="section" id="services">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Consulting Services to <span className="gradient-text">Accelerate</span> Your Growth
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
            From infrastructure automation to AI integration, we deliver comprehensive cloud native 
            solutions that drive digital transformation.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/services#${service.id}`} className="block h-full">
                <div className="card h-full group">
                  {/* Icon */}
                  <div className="icon-wrapper mb-6 text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--color-text-secondary)] text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 text-[var(--color-primary)]">
                          <path d="M3 7l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <div className="link-arrow mt-auto">
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
