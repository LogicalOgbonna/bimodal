'use client';

import { motion } from 'framer-motion';

const values = [
  {
    title: 'Village Structure',
    description: 'We believe in adding more resources than necessary because we believe most projects require more than one engineer.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="18" r="3"/>
        <path d="M12 12v3M9 16l-2-1M15 16l2-1"/>
      </svg>
    ),
  },
  {
    title: 'Goal-Aligned',
    description: 'Engineers embedded in your vision from day one, working as an extension of your team with full context.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="5"/>
        <circle cx="12" cy="12" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'Impact-Driven',
    description: 'Solutions built for long-term value, not just quick wins. We focus on sustainable outcomes that scale.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-6.5 4.5 2-7L2 9h7l3-7z"/>
      </svg>
    ),
  },
  {
    title: 'Technical Excellence',
    description: 'Our team consists of technical professionals with deep expertise across cloud native technologies.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="1"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section className="section bg-[var(--color-surface)]" id="about">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="badge mb-4">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted IT Consulting Since <span className="gradient-text">Day One</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
              BiModal Group, LLC is a trusted IT consulting firm delivering solutions across DevOps, 
              DevSecOps, Software Development, AI, Quality Assurance, Platform Engineering, and Security.
            </p>
            <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              We champion Infrastructure as Code (IaC) principles, ensuring that infrastructure changes 
              are codified, peer-reviewed, and thoroughly tested. Our continuous delivery pipelines 
              automate deployment while monitoring frameworks validate changes and enforce operational excellence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '85%', label: 'DevOps Engagements' },
                { value: '100+', label: 'Engineers Supported' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-[var(--color-darker)] border border-[var(--color-border)]">
                  <div className="stat-value mb-1">{stat.value}</div>
                  <div className="text-sm text-[var(--color-text-muted)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Values grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <div
                key={index}
                className="card card-sm group"
              >
                <div className="icon-wrapper mb-4 text-[var(--color-primary)] group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="font-semibold mb-2 text-white">{value.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
