'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--color-primary)]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--color-secondary)]/5 rounded-full blur-[100px]" />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="badge">
              <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
              85% of our engagements are DevOps-driven
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
          >
            Transform Your Business with{' '}
            <span className="gradient-text">DevOps & Cloud Native</span> Solutions
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[var(--color-text-secondary)] mb-10 max-w-2xl leading-relaxed"
          >
            BiModal Group delivers cutting-edge consulting across DevOps, Platform Engineering, 
            AI/ML, and Security — built for scalability, compliance, and enterprise needs.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact" className="btn-primary">
              Get Free Consultation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Our Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '100+', label: 'Engineers Supported' },
              { value: '250+', label: 'VMs Managed' },
              { value: '1000+', label: 'RFPs Processed' },
              { value: '20+', label: 'Teams Migrated' },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-[var(--color-text-muted)]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
