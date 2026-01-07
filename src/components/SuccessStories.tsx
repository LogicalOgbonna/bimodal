'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const stories = [
  {
    title: 'OpenStack to AWS Migration',
    category: 'DevOps',
    description: 'Orchestrated an end-to-end migration from OpenStack to AWS for 20 internal teams, replacing legacy environments with scalable, cloud-native AWS architectures using custom Terraform and Terragrunt modules.',
    metrics: ['20 Teams', 'Cloud-Native', 'IaC Foundation'],
  },
  {
    title: 'EKS Platform for AI/ML',
    category: 'Platform Engineering',
    description: 'Designed and delivered a production-grade Amazon EKS platform optimized for AI/ML workloads, implementing GitOps bridge pattern with full CI/CD automation and HashiCorp Vault integration.',
    metrics: ['GitOps', 'AI/ML Ready', 'Vault Integration'],
  },
  {
    title: 'Enterprise RAG Platform',
    category: 'AI & ML',
    description: 'Implemented a secure, scalable Retrieval-Augmented Generation platform for enterprise knowledge retrieval with full traceability from answers to source documents.',
    metrics: ['Private-by-Design', 'Full Traceability', 'Enterprise Scale'],
  },
  {
    title: 'IDP with Kratix & Backstage',
    category: 'Platform Engineering',
    description: 'Architected and deployed a comprehensive Internal Developer Platform utilizing Kratix and Backstage for over 100 developers, creating Golden Paths for secure infrastructure provisioning.',
    metrics: ['100+ Developers', 'Self-Service', 'Compliance Ready'],
  },
  {
    title: 'VM & Linux Automation',
    category: 'DevOps',
    description: 'Orchestrated lifecycle management of 250+ on-premises Linux VMs using RedHat Ansible Automation Platform and Satellite, establishing a cloud-like operational model.',
    metrics: ['250+ VMs', 'Ansible AAP', 'Security Compliance'],
  },
  {
    title: 'Kamiwaza RFP Automation',
    category: 'AI & ML',
    description: 'Deployed self-hosted AI solution to automate review of US federal government RFPs, processing over 1,000 reports from SAM.gov with automatic proposal generation.',
    metrics: ['1000+ RFPs', 'Auto Proposals', 'Self-Hosted'],
  },
];

export default function SuccessStories() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = ['All', ...new Set(stories.map(s => s.category))];
  const filteredStories = activeCategory && activeCategory !== 'All' 
    ? stories.filter(s => s.category === activeCategory)
    : stories;

  return (
    <section className="py-32 relative bg-[var(--color-surface)]">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Proven <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Real-world transformations that delivered measurable impact for our clients.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category === 'All' ? null : category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                (category === 'All' && !activeCategory) || category === activeCategory
                  ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-[var(--color-darker)]'
                  : 'bg-[var(--color-surface-light)] text-[var(--color-text-muted)] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Stories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              layout
              className="group bg-[var(--color-darker)] rounded-xl p-6 border border-[var(--color-primary)]/10 card-hover"
            >
              {/* Category badge */}
              <span className="inline-block px-3 py-1 rounded-full text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
                {story.category}
              </span>
              
              <h3 className="text-lg font-semibold mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                {story.title}
              </h3>
              
              <p className="text-sm text-[var(--color-text-muted)] mb-6 leading-relaxed">
                {story.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2">
                {story.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="px-2 py-1 rounded text-xs bg-[var(--color-surface-light)] text-[var(--color-text-muted)]"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

