'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const team = [
  {
    name: 'Darren Nguyen',
    role: 'CEO',
    initials: 'DN',
    color: 'from-[#ff6b35] to-[#f7931e]',
  },
  {
    name: 'Martin Hamza',
    role: 'Team Lead',
    initials: 'MH',
    color: 'from-[#f7931e] to-[#ffc107]',
  },
  {
    name: 'Alex Romanov',
    role: 'Team Lead',
    initials: 'AR',
    color: 'from-[#ffc107] to-[#ff8c5a]',
  },
  {
    name: 'Eugen Olteanu',
    role: 'Team Lead',
    initials: 'EO',
    color: 'from-[#ff8c5a] to-[#ff6b35]',
  },
  {
    name: 'Henry Singh',
    role: 'Team Lead',
    initials: 'HS',
    color: 'from-[#ff6b35] to-[#f7931e]',
  },
  {
    name: 'Dima Platitsyn',
    role: 'Program Manager',
    initials: 'DP',
    color: 'from-[#f7931e] to-[#ff6b35]',
  },
  {
    name: 'Mark Shaban',
    role: 'Project Coordinator',
    initials: 'MS',
    color: 'from-[#ffc107] to-[#f7931e]',
  },
  {
    name: 'Rita Zannu',
    role: 'Project Coordinator',
    initials: 'RZ',
    color: 'from-[#ff8c5a] to-[#ffc107]',
  },
];

export default function TeamPage() {
  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[var(--color-secondary)]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest">Our People</span>
            <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
              Meet the <span className="gradient-text">Team</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Technical professionals across all functions, from engineering to project management, 
              united by a commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="gradient-border p-6 text-center card-hover h-full">
                  {/* Avatar */}
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} opacity-20 group-hover:opacity-40 blur-xl transition-opacity`} />
                    <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl font-bold text-white`}>
                      {member.initials}
                    </div>
                    {/* Status indicator */}
                    <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#4ade80] border-2 border-[var(--color-surface)]" />
                  </div>

                  {/* Info */}
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{member.role}</p>

                  {/* Social links placeholder */}
                  <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="w-8 h-8 rounded-lg bg-[var(--color-surface-light)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-24 bg-[var(--color-surface)] relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest">What Sets Us Apart</span>
            <h2 className="text-4xl font-bold mt-4">Our <span className="gradient-text">Values</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Village Structure',
                description: 'We believe in adding more resources than necessary because we believe most projects require more than one engineer.',
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
                    <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="10" cy="34" r="6" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="38" cy="34" r="6" stroke="currentColor" strokeWidth="2"/>
                    <path d="M24 20v6M18 30l-4-3M30 30l4-3" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ),
              },
              {
                title: 'Goal-Aligned',
                description: 'Engineers embedded in your vision from day one, working as an extension of your team.',
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
                    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="24" cy="24" r="2" fill="currentColor"/>
                  </svg>
                ),
              },
              {
                title: 'Impact-Driven',
                description: 'Solutions built for long-term value, not just quick wins. We focus on sustainable outcomes.',
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
                    <path d="M24 4l6 12 13 2-9 9 2 13-12-6-12 6 2-13-9-9 13-2 6-12z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                ),
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-[var(--color-darker)] flex items-center justify-center text-[var(--color-primary)]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-[var(--color-text-muted)]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Want to <span className="gradient-text">Work Together</span>?
            </h2>
            <p className="text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto">
              We&apos;re always looking to partner with organizations that share our passion 
              for building exceptional technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                <span>Start a Project</span>
              </Link>
              <a href="mailto:careers@bimodalgroup.com" className="btn-outline">
                Join Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
