'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

// BiModal Logo Component
const BiModalLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" className={className}>
    <defs>
      <linearGradient id="bimodal-logo-gradient" x1="0" y1="0" x2="48" y2="48">
        <stop stopColor="#ff6b35"/>
        <stop offset="0.5" stopColor="#f7931e"/>
        <stop offset="1" stopColor="#ffc107"/>
      </linearGradient>
    </defs>
    {/* Outer frame */}
    <rect x="4" y="4" width="40" height="40" rx="8" stroke="url(#bimodal-logo-gradient)" strokeWidth="2.5" fill="none"/>
    {/* Inner B shape made of blocks */}
    <rect x="12" y="12" width="8" height="8" rx="1" fill="url(#bimodal-logo-gradient)"/>
    <rect x="12" y="22" width="8" height="4" rx="1" fill="url(#bimodal-logo-gradient)"/>
    <rect x="12" y="28" width="8" height="8" rx="1" fill="url(#bimodal-logo-gradient)"/>
    <rect x="22" y="12" width="6" height="6" rx="1" fill="url(#bimodal-logo-gradient)"/>
    <rect x="22" y="30" width="6" height="6" rx="1" fill="url(#bimodal-logo-gradient)"/>
    <rect x="30" y="14" width="6" height="8" rx="1" fill="url(#bimodal-logo-gradient)"/>
    <rect x="30" y="26" width="6" height="8" rx="1" fill="url(#bimodal-logo-gradient)"/>
    <rect x="22" y="20" width="14" height="4" rx="1" fill="url(#bimodal-logo-gradient)" opacity="0.7"/>
  </svg>
);

export { BiModalLogo };

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-darker)]/80 backdrop-blur-xl border-b border-[var(--color-primary)]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <BiModalLogo className="w-10 h-10 relative z-10" />
              <div className="absolute inset-0 blur-lg bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-30 group-hover:opacity-60 transition-opacity" />
            </div>
            <span className="text-xl font-bold gradient-text">BiModal</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors animated-underline"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary">
              <span>Get Started</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-[var(--color-primary)]"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-[var(--color-primary)]"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-[var(--color-primary)]"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--color-surface)] border-t border-[var(--color-primary)]/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Link href="/contact" className="btn-primary text-center mt-4">
                <span>Get Started</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
