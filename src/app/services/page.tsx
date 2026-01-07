'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Accelerate delivery with automated pipelines, Infrastructure as Code, and GitOps practices.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <circle cx="32" cy="32" r="28" stroke="url(#devops-detail-grad)" strokeWidth="2" fill="none"/>
        <motion.path
          d="M32 18v14l10 6"
          stroke="url(#devops-detail-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <circle cx="32" cy="32" r="6" fill="url(#devops-detail-grad)"/>
        <defs>
          <linearGradient id="devops-detail-grad" x1="0" y1="0" x2="64" y2="64">
            <stop stopColor="#ff6b35"/>
            <stop offset="1" stopColor="#f7931e"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    capabilities: [
      {
        title: 'Continuous Delivery & Automation',
        items: [
          'CI/CD Pipeline design with GitLab, GitHub Actions, and Dagger',
          'Pipeline migration between platforms',
          'Automated testing and quality gates',
        ],
      },
      {
        title: 'Infrastructure as Code & GitOps',
        items: [
          'Standardized IaC with Terraform and Ansible',
          'GitOps with ArgoCD for pull-based deployment',
          'Disaster Recovery with AWS Backup and Velero',
        ],
      },
      {
        title: 'Orchestration & Cloud Platforms',
        items: [
          'Kubernetes full lifecycle management (EKS)',
          'Advanced scaling with Karpenter',
          'Enterprise OpenShift expertise',
        ],
      },
      {
        title: 'Observability & FinOps',
        items: [
          'Full-stack monitoring with Datadog, Prometheus, Grafana',
          'OpenTelemetry implementation',
          'Cost optimization and FinOps dashboards',
        ],
      },
    ],
  },
  {
    id: 'devsecops',
    title: 'DevSecOps',
    description: 'Embed security throughout the development lifecycle with automated compliance and policy enforcement.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <path d="M32 6L8 16v16c0 14.67 10.22 28.4 24 32 13.78-3.6 24-17.33 24-32V16L32 6z" stroke="url(#sec-detail-grad)" strokeWidth="2" fill="none"/>
        <motion.path
          d="M24 32l6 6 10-12"
          stroke="url(#sec-detail-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
        />
        <defs>
          <linearGradient id="sec-detail-grad" x1="0" y1="0" x2="64" y2="64">
            <stop stopColor="#f7931e"/>
            <stop offset="1" stopColor="#ffc107"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    capabilities: [
      {
        title: 'Security Integration',
        items: [
          'Shift-left security practices',
          'SAST and DAST integration',
          'Container security scanning',
        ],
      },
      {
        title: 'Policy as Code',
        items: [
          'OPA/Gatekeeper policy enforcement',
          'Automated compliance checks',
          'Security policy templates',
        ],
      },
      {
        title: 'Compliance Automation',
        items: [
          'SOC 2, HIPAA, PCI-DSS support',
          'Audit trail automation',
          'Regulated environment expertise',
        ],
      },
    ],
  },
  {
    id: 'platform',
    title: 'Platform Engineering',
    description: 'Build Internal Developer Platforms that reduce cognitive load and accelerate delivery.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <rect x="10" y="10" width="18" height="18" rx="3" stroke="url(#platform-detail-grad)" strokeWidth="2"/>
        <rect x="36" y="10" width="18" height="18" rx="3" stroke="url(#platform-detail-grad)" strokeWidth="2"/>
        <rect x="10" y="36" width="18" height="18" rx="3" stroke="url(#platform-detail-grad)" strokeWidth="2"/>
        <rect x="36" y="36" width="18" height="18" rx="3" stroke="url(#platform-detail-grad)" strokeWidth="2"/>
        <motion.circle
          cx="32"
          cy="32"
          r="6"
          fill="url(#platform-detail-grad)"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <defs>
          <linearGradient id="platform-detail-grad" x1="0" y1="0" x2="64" y2="64">
            <stop stopColor="#ff6b35"/>
            <stop offset="1" stopColor="#ff8c5a"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    capabilities: [
      {
        title: 'Internal Developer Platform (IDP)',
        items: [
          'Backstage unified developer portal',
          'Crossplane for Kubernetes-native infrastructure',
          'Kratix for multi-tenant orchestration',
        ],
      },
      {
        title: 'Developer Experience',
        items: [
          'Self-service scaffolding templates',
          'Ephemeral environment automation',
          'Golden Paths with best practices',
        ],
      },
      {
        title: 'Platform Operations',
        items: [
          'Cognitive load reduction',
          'Product-like developer interactions',
          'Reusable building blocks library',
        ],
      },
    ],
  },
  {
    id: 'ai',
    title: 'AI & ML',
    description: 'Deploy enterprise AI infrastructure with security, compliance, and scalability built-in.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <motion.circle
          cx="32"
          cy="18"
          r="8"
          stroke="url(#ai-detail-grad)"
          strokeWidth="2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <circle cx="14" cy="44" r="8" stroke="url(#ai-detail-grad)" strokeWidth="2"/>
        <circle cx="50" cy="44" r="8" stroke="url(#ai-detail-grad)" strokeWidth="2"/>
        <path d="M32 26v8M22 38l-4-3M42 38l4-3" stroke="url(#ai-detail-grad)" strokeWidth="2"/>
        <defs>
          <linearGradient id="ai-detail-grad" x1="0" y1="0" x2="64" y2="64">
            <stop stopColor="#ffc107"/>
            <stop offset="1" stopColor="#ff6b35"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    capabilities: [
      {
        title: 'Secure AI Deployment',
        items: [
          'Private-by-default AI infrastructure',
          'VPC-isolated and air-gapped deployments',
          'Model-level authorization and audit logs',
        ],
      },
      {
        title: 'Knowledge Infrastructure',
        items: [
          'Enterprise RAG implementation',
          'Data ingestion and embedding pipelines',
          'Data lineage and explainability',
        ],
      },
      {
        title: 'MLOps',
        items: [
          'End-to-end model lifecycle management',
          'CI/CD for AI systems',
          'AI observability and monitoring',
        ],
      },
    ],
  },
  {
    id: 'software',
    title: 'Software Development',
    description: 'Modern application development with microservices, cloud-native patterns, and best practices.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <motion.path
          d="M18 22l-12 10 12 10"
          stroke="url(#sw-detail-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ x: -5 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M46 22l12 10-12 10"
          stroke="url(#sw-detail-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ x: 5 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        <path d="M38 12L26 52" stroke="url(#sw-detail-grad)" strokeWidth="2" strokeLinecap="round"/>
        <defs>
          <linearGradient id="sw-detail-grad" x1="0" y1="0" x2="64" y2="64">
            <stop stopColor="#ff6b35"/>
            <stop offset="1" stopColor="#f7931e"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    capabilities: [
      {
        title: 'Application Development',
        items: [
          'Full-stack development',
          'Microservices architecture',
          'API design and development',
        ],
      },
      {
        title: 'Cloud-Native Patterns',
        items: [
          'Containerized applications',
          '12-factor app methodology',
          'Event-driven architecture',
        ],
      },
    ],
  },
  {
    id: 'qa',
    title: 'Quality Assurance',
    description: 'Comprehensive testing strategies with automation frameworks and quality gates.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <circle cx="32" cy="32" r="24" stroke="url(#qa-detail-grad)" strokeWidth="2" strokeDasharray="6 4"/>
        <motion.path
          d="M22 32l8 8 14-14"
          stroke="url(#qa-detail-grad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
        />
        <defs>
          <linearGradient id="qa-detail-grad" x1="0" y1="0" x2="64" y2="64">
            <stop stopColor="#f7931e"/>
            <stop offset="1" stopColor="#ffc107"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    capabilities: [
      {
        title: 'Test Automation',
        items: [
          'Automated testing frameworks',
          'E2E, integration, and unit testing',
          'Performance and load testing',
        ],
      },
      {
        title: 'Quality Strategy',
        items: [
          'Quality gates implementation',
          'Test coverage optimization',
          'Continuous quality monitoring',
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest">Our Expertise</span>
            <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
              <span className="gradient-text">Services</span> We Provide
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Comprehensive IT consulting services designed to accelerate your digital transformation 
              and build resilient, scalable infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`py-16 ${serviceIndex !== services.length - 1 ? 'border-b border-[var(--color-primary)]/10' : ''}`}
            >
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Service header */}
                <div className="lg:col-span-1">
                  <div className="sticky top-28">
                    <div className="mb-6">{service.icon}</div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-[var(--color-text-muted)] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Capabilities */}
                <div className="lg:col-span-2">
                  <div className="grid md:grid-cols-2 gap-6">
                    {service.capabilities.map((capability, index) => (
                      <motion.div
                        key={capability.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="gradient-border p-6"
                      >
                        <h3 className="font-semibold mb-4 text-[var(--color-primary)]">
                          {capability.title}
                        </h3>
                        <ul className="space-y-3">
                          {capability.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0">
                                <path d="M4 8l3 3 5-5" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--color-surface)] relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Need a Custom <span className="gradient-text">Solution</span>?
            </h2>
            <p className="text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto">
              Every organization is unique. Let&apos;s discuss how we can tailor our services 
              to meet your specific requirements and challenges.
            </p>
            <Link href="/contact" className="btn-primary">
              <span>Start a Conversation</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
