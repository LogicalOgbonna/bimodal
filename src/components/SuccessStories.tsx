'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const caseStudies = [
  {
    category: 'DevOps',
    title: 'OpenStack to AWS Migration',
    description: 'Orchestrated an end-to-end migration from OpenStack to AWS for 20 internal teams, replacing legacy environments with scalable, cloud-native AWS architectures.',
    stats: [
      { label: 'Teams Migrated', value: '20' },
      { label: 'Architecture', value: 'Cloud-Native' },
    ],
    color: 'from-[#ff6b35] to-[#f7931e]',
  },
  {
    category: 'Platform Engineering',
    title: 'EKS Platform for AI/ML Workloads',
    description: 'Designed and delivered a production-grade Amazon EKS platform optimized for AI/ML, implementing GitOps bridge pattern with full CI/CD automation and HashiCorp Vault.',
    stats: [
      { label: 'Pattern', value: 'GitOps Bridge' },
      { label: 'Security', value: 'Vault Integration' },
    ],
    color: 'from-[#f7931e] to-[#ffc107]',
  },
  {
    category: 'AI & ML',
    title: 'Enterprise RAG Platform',
    description: 'Implemented a secure, scalable Retrieval-Augmented Generation platform for enterprise knowledge retrieval with full traceability from answers to source documents.',
    stats: [
      { label: 'Design', value: 'Private-by-Default' },
      { label: 'Traceability', value: 'Full' },
    ],
    color: 'from-[#ff6b35] to-[#ff8c5a]',
  },
  {
    category: 'Platform Engineering',
    title: 'IDP with Kratix & Backstage',
    description: 'Architected and deployed a comprehensive Internal Developer Platform utilizing Kratix and Backstage for over 100 developers, creating Golden Paths for secure infrastructure provisioning.',
    stats: [
      { label: 'Developers', value: '100+' },
      { label: 'Self-Service', value: 'Enabled' },
    ],
    color: 'from-[#f7931e] to-[#ff6b35]',
  },
];

export default function SuccessStories() {
  return (
    <section className="section" id="case-studies">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Real-world transformations that delivered measurable impact for our clients.
          </p>
        </motion.div>

        {/* Case studies grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group"
            >
              {/* Category badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-4 bg-gradient-to-r ${study.color} text-white`}>
                {study.category}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                {study.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--color-text-secondary)] text-sm mb-6 leading-relaxed">
                {study.description}
              </p>

              {/* Stats */}
              <div className="flex gap-6 pt-6 border-t border-[var(--color-border)]">
                {study.stats.map((stat, statIndex) => (
                  <div key={statIndex}>
                    <div className="text-lg font-semibold text-white">{stat.value}</div>
                    <div className="text-xs text-[var(--color-text-muted)]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/blog" className="btn-secondary">
            View More Case Studies
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
