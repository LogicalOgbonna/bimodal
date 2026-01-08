'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/app/assets/logo/logo.png';

const services = [
  {
    title: 'DevOps',
    description: 'CI/CD, GitOps, and Infrastructure as Code',
    href: '/services#devops',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v18M3 12h18M7.5 7.5l9 9M16.5 7.5l-9 9" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Platform Engineering',
    description: 'Internal Developer Platforms & Backstage',
    href: '/services#platform',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    title: 'DevSecOps',
    description: 'Security integration & compliance automation',
    href: '/services#devsecops',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L4 6v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V6l-8-4z"/>
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'AI & ML Solutions',
    description: 'Enterprise AI, RAG, and MLOps',
    href: '/services#ai',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="8" r="4"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="18" r="3"/>
        <path d="M12 12v3M9 16l-1.5-1M15 16l1.5-1"/>
      </svg>
    ),
  },
  {
    title: 'Cloud Consulting',
    description: 'AWS, Azure, and GCP expertise',
    href: '/services#cloud',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 10a4 4 0 00-8 0c-2.2 0-4 1.8-4 4s1.8 4 4 4h8a4 4 0 000-8z"/>
      </svg>
    ),
  },
  {
    title: 'Quality Assurance',
    description: 'Automated testing & quality gates',
    href: '/services#qa',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9"/>
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const resources = [
  { title: 'Blog', description: 'Insights and best practices', href: '/blog' },
  { title: 'Case Studies', description: 'Customer success stories', href: '/#case-studies' },
];


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[var(--color-darker)]/95 backdrop-blur-xl border-b border-[var(--color-border)]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="BiModal" width={140} height={40} className="h-10 w-auto" priority />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            <Link href="/" className="px-4 py-2 text-[var(--color-text-secondary)] hover:text-white transition-colors text-[15px]">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                className="flex items-center gap-1.5 px-4 py-2 text-[var(--color-text-secondary)] hover:text-white transition-colors text-[15px]"
              >
                Services
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`}>
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-[420px] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-4 grid grid-cols-2 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-[var(--color-surface-hover)] transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-[var(--color-surface-light)] flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                            {service.icon}
                          </div>
                          <div>
                            <div className="font-medium text-white text-sm">{service.title}</div>
                            <div className="text-xs text-[var(--color-text-muted)] mt-0.5">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-[var(--color-border)] p-4 bg-[var(--color-surface-light)]">
                      <Link href="/services" onClick={() => setActiveDropdown(null)} className="link-arrow text-sm">
                        View all services
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                className="flex items-center gap-1.5 px-4 py-2 text-[var(--color-text-secondary)] hover:text-white transition-colors text-[15px]"
              >
                Resources
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`}>
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-2">
                      {resources.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block p-3 rounded-lg hover:bg-[var(--color-surface-hover)] transition-colors"
                        >
                          <div className="font-medium text-white text-sm">{item.title}</div>
                          <div className="text-xs text-[var(--color-text-muted)] mt-0.5">{item.description}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/team" className="px-4 py-2 text-[var(--color-text-secondary)] hover:text-white transition-colors text-[15px]">
              About
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact" className="btn-primary">
              Contact Us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white block"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-white block"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-white block"
              />
            </div>
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
            className="lg:hidden bg-[var(--color-surface)] border-t border-[var(--color-border)]"
          >
            <div className="px-6 py-6 space-y-6">
              <Link href="/" onClick={() => setIsOpen(false)} className="block text-white font-medium">Home</Link>
              
              <div>
                <div className="text-[var(--color-text-muted)] text-sm font-medium mb-3">Services</div>
                <div className="space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-[var(--color-text-secondary)] hover:text-white py-1"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/blog" onClick={() => setIsOpen(false)} className="block text-white font-medium">Blog</Link>
              <Link href="/team" onClick={() => setIsOpen(false)} className="block text-white font-medium">About</Link>
              
              <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-full justify-center">
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
