'use client';

import { motion } from 'framer-motion';

// Placeholder company logos (would be replaced with actual client logos)
const companies = [
  'BlueAlly',
  'Roche Genentech',
  'FiServe',
  'PM2net',
  'Kratix',
  'Okta',
];

export default function TrustedBy() {
  return (
    <section className="py-16 border-y border-(--color-border)">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-(--color-text-muted) text-sm font-medium uppercase tracking-wider">
            Trusted by startups and enterprises alike
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-(--color-text-muted) font-semibold text-lg opacity-50 hover:opacity-100 transition-opacity cursor-default"
            >
              {company}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

