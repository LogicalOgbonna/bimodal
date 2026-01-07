'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '85%', label: 'DevOps Engagements' },
  { value: '100+', label: 'Engineers Supported' },
  { value: '250+', label: 'VMs Managed' },
  { value: '1000+', label: 'RFPs Processed' },
];

const differentiators = [
  {
    title: 'Goal-Aligned Team',
    description: 'Engineers embedded in your vision from day one.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 8v8l6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Impact-Driven',
    description: 'Solutions built for long-term value, not just quick wins.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <path d="M16 4l3.5 11H28l-8 7 3 10-9-6-9 6 3-10-8-7h8.5L16 4z" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Village Structure',
    description: 'More resources than necessary because complex projects need collaboration.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="8" cy="22" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="24" cy="22" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 14v4M12 20l-2-2M20 20l2-2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: 'Technical Leadership',
    description: 'Our team consists of technical professionals across all functions.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
        <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 14l2 2-2 2M16 18h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[var(--color-secondary)]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Trusted IT Consulting <span className="gradient-text">Since Day One</span>
            </h2>
            <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">
              BiModal Group, LLC is a trusted IT consulting firm delivering solutions across DevOps, 
              DevSecOps, Software Development, AI, Quality Assurance, Platform Engineering, and Security.
            </p>
            <p className="text-[var(--color-text-muted)] mb-8 leading-relaxed">
              We champion Infrastructure as Code (IaC) principles, ensuring that infrastructure changes 
              are codified, peer-reviewed, and thoroughly tested. Our continuous delivery pipelines 
              automate deployment while monitoring frameworks validate changes and enforce operational excellence.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-[var(--color-text-muted)] mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content - Differentiators */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="gradient-border p-6 card-hover"
              >
                <div className="text-[var(--color-primary)] mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

