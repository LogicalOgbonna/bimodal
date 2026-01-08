'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const team = [
  { name: 'Darren Nguyen', role: 'CEO', initials: 'DN' },
  { name: 'Martin Hamza', role: 'Team Lead', initials: 'MH' },
  { name: 'Alex Romanov', role: 'Team Lead', initials: 'AR' },
  { name: 'Eugen Olteanu', role: 'Team Lead', initials: 'EO' },
  { name: 'Henry Singh', role: 'Team Lead', initials: 'HS' },
  { name: 'Dima Platitsyn', role: 'Program Manager', initials: 'DP' },
  { name: 'Mark Shaban', role: 'Project Coordinator', initials: 'MS' },
  { name: 'Rita Zannu', role: 'Project Coordinator', initials: 'RZ' },
];

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
    description: 'Engineers embedded in your vision from day one, working as an extension of your team.',
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
    description: 'Solutions built for long-term value, not just quick wins. We focus on sustainable outcomes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-6.5 4.5 2-7L2 9h7l3-7z"/>
      </svg>
    ),
  },
];

export default function TeamPage() {
  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="section-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-[120px]" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="badge mb-4">Our Team</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet the <span className="gradient-text">Experts</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Technical professionals across all functions, from engineering to project management, 
              united by a commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card text-center group"
              >
                {/* Avatar */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                  {member.initials}
                </div>

                {/* Info */}
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{member.role}</p>

                {/* Social link */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href="#" className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--color-surface-light)] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="badge mb-4">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold">What Sets Us <span className="gradient-text">Apart</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="icon-wrapper mx-auto mb-6 text-[var(--color-primary)]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-[var(--color-text-secondary)]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to <span className="gradient-text">Work Together</span>?
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              We&apos;re always looking to partner with organizations that share our passion 
              for building exceptional technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start a Project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a href="mailto:careers@bimodalgroup.com" className="btn-secondary">
                Join Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
