'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    id: 'devops',
    title: 'DevOps',
    description: 'CI/CD pipelines, Infrastructure as Code, GitOps implementation, and cloud platform orchestration.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="20" stroke="url(#devops-grad)" strokeWidth="2" fill="none"/>
        <path d="M24 14v10l8 5" stroke="url(#devops-grad)" strokeWidth="2" strokeLinecap="round"/>
        <motion.circle
          cx="24"
          cy="24"
          r="4"
          fill="url(#devops-grad)"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <defs>
          <linearGradient id="devops-grad" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#ff6b35"/>
            <stop offset="1" stopColor="#f7931e"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 'devsecops',
    title: 'DevSecOps',
    description: 'Security integration throughout the development lifecycle with Policy as Code and compliance automation.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M24 4L6 12v12c0 11.11 7.67 21.47 18 24 10.33-2.53 18-12.89 18-24V12L24 4z" stroke="url(#sec-grad)" strokeWidth="2" fill="none"/>
        <path d="M20 24l4 4 8-8" stroke="url(#sec-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="sec-grad" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#f7931e"/>
            <stop offset="1" stopColor="#ffc107"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 'platform',
    title: 'Platform Engineering',
    description: 'Internal Developer Platforms, Backstage portals, self-service infrastructure, and golden paths.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="8" y="8" width="12" height="12" rx="2" stroke="url(#platform-grad)" strokeWidth="2"/>
        <rect x="28" y="8" width="12" height="12" rx="2" stroke="url(#platform-grad)" strokeWidth="2"/>
        <rect x="8" y="28" width="12" height="12" rx="2" stroke="url(#platform-grad)" strokeWidth="2"/>
        <rect x="28" y="28" width="12" height="12" rx="2" stroke="url(#platform-grad)" strokeWidth="2"/>
        <circle cx="24" cy="24" r="4" fill="url(#platform-grad)"/>
        <defs>
          <linearGradient id="platform-grad" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#ff6b35"/>
            <stop offset="1" stopColor="#ff8c5a"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 'ai',
    title: 'AI & ML',
    description: 'Enterprise AI deployment, RAG platforms, MLOps pipelines, and secure model serving infrastructure.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="14" r="6" stroke="url(#ai-grad)" strokeWidth="2"/>
        <circle cx="12" cy="32" r="6" stroke="url(#ai-grad)" strokeWidth="2"/>
        <circle cx="36" cy="32" r="6" stroke="url(#ai-grad)" strokeWidth="2"/>
        <path d="M24 20v6M18 28l-3-2M30 28l3-2" stroke="url(#ai-grad)" strokeWidth="2"/>
        <defs>
          <linearGradient id="ai-grad" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#ffc107"/>
            <stop offset="1" stopColor="#ff6b35"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 'software',
    title: 'Software Development',
    description: 'Full-stack development, microservices architecture, and modern application design.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M14 16l-8 8 8 8M34 16l8 8-8 8M28 10l-8 28" stroke="url(#dev-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="dev-grad" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#ff6b35"/>
            <stop offset="1" stopColor="#f7931e"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 'qa',
    title: 'Quality Assurance',
    description: 'Automated testing frameworks, quality gates, and comprehensive test strategy implementation.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="18" stroke="url(#qa-grad)" strokeWidth="2" strokeDasharray="4 4"/>
        <path d="M17 24l5 5 9-9" stroke="url(#qa-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="qa-grad" x1="0" y1="0" x2="48" y2="48">
            <stop stopColor="#f7931e"/>
            <stop offset="1" stopColor="#ffc107"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            <span className="gradient-text">Services</span> We Provide
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            From infrastructure automation to AI integration, we deliver comprehensive IT solutions 
            that drive digital transformation.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group gradient-border p-8 card-hover"
            >
              <div className="mb-6 transition-transform group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                {service.title}
              </h3>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link 
                href={`/services#${service.id}`}
                className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] font-medium"
              >
                Learn more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/services" className="btn-primary">
            <span>View All Services</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
