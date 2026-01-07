'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Hexagon decoration */}
          <div className="relative inline-block mb-8">
            <svg width="80" height="80" viewBox="0 0 80 80" className="mx-auto">
              <motion.polygon
                points="40,5 72,22 72,58 40,75 8,58 8,22"
                fill="none"
                stroke="url(#cta-hex-gradient)"
                strokeWidth="2"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: 'center' }}
              />
              <motion.polygon
                points="40,15 60,26 60,54 40,65 20,54 20,26"
                fill="none"
                stroke="url(#cta-hex-gradient)"
                strokeWidth="1"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: 'center' }}
              />
              <circle cx="40" cy="40" r="8" fill="url(#cta-hex-gradient)" />
              <defs>
                <linearGradient id="cta-hex-gradient" x1="0" y1="0" x2="80" y2="80">
                  <stop stopColor="#ff6b35" />
                  <stop offset="0.5" stopColor="#f7931e" />
                  <stop offset="1" stopColor="#ffc107" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span>
            <br />Your Infrastructure?
          </h2>
          
          <p className="text-lg text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto">
            Partner with BiModal Group to accelerate your digital transformation journey. 
            Let&apos;s build the future of your infrastructure together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              <span>Start a Conversation</span>
            </Link>
            <Link href="/team" className="btn-outline text-lg px-8 py-4">
              Meet Our Team
            </Link>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-[var(--color-text-muted)] text-sm"
          >
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0l2.5 7.5H20l-6 5 2.5 7.5L10 15l-6.5 5 2.5-7.5-6-5h7.5L10 0z" fill="currentColor" className="text-[var(--color-primary)]"/>
              </svg>
              Kubernetes Experts
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0l2.5 7.5H20l-6 5 2.5 7.5L10 15l-6.5 5 2.5-7.5-6-5h7.5L10 0z" fill="currentColor" className="text-[var(--color-secondary)]"/>
              </svg>
              AWS & Azure Partners
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 0l2.5 7.5H20l-6 5 2.5 7.5L10 15l-6.5 5 2.5-7.5-6-5h7.5L10 0z" fill="currentColor" className="text-[var(--color-accent)]"/>
              </svg>
              Enterprise Ready
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
