'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-10 w-64 h-64"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-20">
            <polygon 
              points="100,10 190,60 190,140 100,190 10,140 10,60" 
              fill="none" 
              stroke="url(#hex-gradient)" 
              strokeWidth="1"
            />
            <defs>
              <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6b35" />
                <stop offset="100%" stopColor="#f7931e" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        
        <motion.div
          className="absolute bottom-1/4 left-10 w-48 h-48"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-15">
            <rect x="30" y="30" width="140" height="140" fill="none" stroke="#ffc107" strokeWidth="1" transform="rotate(45 100 100)" />
          </svg>
        </motion.div>

        {/* Floating dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--color-primary)]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-primary)]/30 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
          <span className="text-sm text-[var(--color-text-muted)]">85% of our engagements are DevOps-driven</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Engineering</span>
          <br />
          <span className="text-white">Tomorrow&apos;s</span>
          <br />
          <span className="text-white">Infrastructure</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-10"
        >
          BiModal Group delivers cutting-edge solutions across DevOps, Platform Engineering, 
          AI/ML, and Security — built for scalability, compliance, and the future.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/contact" className="btn-primary">
            <span>Start Your Project</span>
          </Link>
          <Link href="/services" className="btn-outline">
            Explore Services
          </Link>
        </motion.div>

        {/* Tech stack badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-4"
        >
          {['Kubernetes', 'Terraform', 'AWS', 'Azure', 'GitOps', 'ArgoCD'].map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="px-4 py-2 rounded-lg bg-[var(--color-surface-light)]/50 border border-[var(--color-primary)]/10 text-sm text-[var(--color-text-muted)]"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="opacity-50">
          <rect x="1" y="1" width="22" height="38" rx="11" stroke="var(--color-primary)" strokeWidth="2"/>
          <motion.circle
            cx="12"
            cy="12"
            r="4"
            fill="var(--color-primary)"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </motion.div>
    </section>
  );
}
