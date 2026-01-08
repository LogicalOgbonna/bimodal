'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  'DevOps',
  'Platform Engineering',
  'DevSecOps',
  'AI & ML Solutions',
  'Cloud Consulting',
  'Quality Assurance',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="section-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-[120px]" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="badge mb-4">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let&apos;s Start a <span className="gradient-text">Conversation</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Ready to transform your infrastructure? Get a free consultation to discuss 
              your specific needs and challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3"
            >
              <div className="card">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[var(--color-surface-light)] border border-[var(--color-border)] text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-[var(--color-surface-light)] border border-[var(--color-border)] text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--color-surface-light)] border border-[var(--color-border)] text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--color-surface-light)] border border-[var(--color-border)] text-white focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--color-surface-light)] border border-[var(--color-border)] text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Email */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="icon-wrapper text-[var(--color-primary)]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm mb-2">
                      Send us an email and we&apos;ll get back to you within 24 hours.
                    </p>
                    <a href="mailto:info@bimodalgroup.com" className="text-[var(--color-primary)] font-medium hover:underline">
                      info@bimodalgroup.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="icon-wrapper text-[var(--color-primary)]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm">
                      United States
                    </p>
                    <p className="text-[var(--color-text-muted)] text-sm mt-1">
                      Remote-first company serving clients globally
                    </p>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="icon-wrapper text-[var(--color-primary)]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-[var(--color-text-secondary)] text-sm">
                      We typically respond within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Schedule call */}
              <div className="card bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 border-[var(--color-primary)]/30">
                <h3 className="font-semibold mb-2">Prefer a Call?</h3>
                <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                  Schedule a free 30-minute consultation to discuss your project requirements.
                </p>
                <button className="btn-outline w-full justify-center">
                  Schedule a Call
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
