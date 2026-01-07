'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[var(--color-secondary)]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
            <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Ready to transform your infrastructure? We&apos;d love to hear about your project and discuss how we can help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact form and info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="gradient-border p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--color-text-muted)]">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[var(--color-darker)] border border-[var(--color-primary)]/20 text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--color-text-muted)]">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[var(--color-darker)] border border-[var(--color-primary)]/20 text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2 text-[var(--color-text-muted)]">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--color-darker)] border border-[var(--color-primary)]/20 text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2 text-[var(--color-text-muted)]">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--color-darker)] border border-[var(--color-primary)]/20 text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="devops">DevOps</option>
                      <option value="devsecops">DevSecOps</option>
                      <option value="platform">Platform Engineering</option>
                      <option value="ai-ml">AI & ML</option>
                      <option value="software">Software Development</option>
                      <option value="qa">Quality Assurance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--color-text-muted)]">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--color-darker)] border border-[var(--color-primary)]/20 text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  Whether you&apos;re looking to modernize your infrastructure, implement DevOps practices, 
                  or explore AI solutions, our team is ready to help you achieve your goals.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-4">
                <div className="gradient-border p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:info@bimodalgroup.com" className="text-[var(--color-primary)] hover:underline">
                      info@bimodalgroup.com
                    </a>
                  </div>
                </div>

                <div className="gradient-border p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-secondary)]/10 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f7931e" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-[var(--color-text-muted)]">United States</p>
                    <p className="text-sm text-[var(--color-text-muted)]">Remote-first organization</p>
                  </div>
                </div>

                <div className="gradient-border p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-[var(--color-text-muted)]">Within 24 hours</p>
                    <p className="text-sm text-[var(--color-text-muted)]">Monday - Friday</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <h3 className="font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-lg bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick links */}
              <div className="gradient-border p-6">
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/services" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      View Our Services
                    </a>
                  </li>
                  <li>
                    <a href="/team" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Meet the Team
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Read Our Blog
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

