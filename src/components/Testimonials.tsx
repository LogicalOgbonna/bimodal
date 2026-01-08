'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "BiModal was quickly able to set up a team and realize our platform engineering vision. Their expertise in Kubernetes and GitOps was second to none, and they delivered beyond our expectations.",
    author: "VP of Engineering",
    company: "Enterprise Client",
    initials: "VP",
  },
  {
    quote: "The team's deep understanding of DevOps practices and their ability to implement Infrastructure as Code transformed how we deploy and manage our applications.",
    author: "CTO",
    company: "Tech Startup",
    initials: "CT",
  },
  {
    quote: "Working with BiModal on our AI infrastructure was a game-changer. They built a secure, scalable RAG platform that processes thousands of documents daily.",
    author: "Director of AI",
    company: "Fortune 500 Company",
    initials: "DA",
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-[var(--color-surface)]">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge mb-4">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            We&apos;re proud to have helped organizations achieve their digital transformation goals.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="testimonial-card"
            >
              {/* Quote icon */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[var(--color-primary)] mb-6 opacity-50">
                <path d="M12 20H6c-1.1 0-2-.9-2-2v-6c0-3.3 2.7-6 6-6h2v4H10c-1.1 0-2 .9-2 2v2h4v6zm14 0h-6c-1.1 0-2-.9-2-2v-6c0-3.3 2.7-6 6-6h2v4h-2c-1.1 0-2 .9-2 2v2h4v6z" fill="currentColor"/>
              </svg>

              {/* Quote */}
              <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center text-white font-semibold">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-medium text-white">{testimonial.author}</div>
                  <div className="text-sm text-[var(--color-text-muted)]">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

