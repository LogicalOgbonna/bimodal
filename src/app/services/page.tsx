'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    id: 'devops',
    title: 'DevOps',
    description: 'Accelerate delivery with automated pipelines, Infrastructure as Code, and GitOps practices.',
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
    id: 'platform',
    title: 'Platform Engineering',
    description: 'Build Internal Developer Platforms that reduce cognitive load and accelerate delivery.',
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
    id: 'devsecops',
    title: 'DevSecOps',
    description: 'Embed security throughout the development lifecycle with automated compliance and policy enforcement.',
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
    id: 'ai',
    title: 'AI & ML Solutions',
    description: 'Deploy enterprise AI infrastructure with security, compliance, and scalability built-in.',
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
    id: 'cloud',
    title: 'Cloud Consulting',
    description: 'Expert guidance on AWS, Azure, and GCP for migration, optimization, and multi-cloud strategy.',
    capabilities: [
      {
        title: 'Cloud Migration',
        items: [
          'Lift-and-shift and re-architecture',
          'Data migration strategies',
          'Hybrid cloud solutions',
        ],
      },
      {
        title: 'Cloud Optimization',
        items: [
          'Cost optimization and FinOps',
          'Performance tuning',
          'Security hardening',
        ],
      },
    ],
  },
  {
    id: 'qa',
    title: 'Quality Assurance',
    description: 'Comprehensive testing strategies with automation frameworks and quality gates.',
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
      <section className="section-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)]/5 rounded-full blur-[120px]" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="badge mb-4">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Consulting Services for <span className="gradient-text">Cloud Native</span> Success
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Comprehensive IT consulting services designed to accelerate your digital transformation 
              and build resilient, scalable infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="section">
        <div className="container">
          {services.map((service, serviceIndex) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`py-16 ${serviceIndex !== services.length - 1 ? 'border-b border-[var(--color-border)]' : ''}`}
            >
              <div className="grid lg:grid-cols-3 gap-12">
                {/* Service header */}
                <div className="lg:col-span-1">
                  <div className="sticky top-28">
                    <span className="badge mb-4">{service.title}</span>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed">
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
                        className="card card-sm"
                      >
                        <h3 className="font-semibold mb-4 text-[var(--color-primary)]">
                          {capability.title}
                        </h3>
                        <ul className="space-y-3">
                          {capability.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-1 flex-shrink-0 text-[var(--color-primary)]">
                                <path d="M3 7l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
      <section className="section bg-[var(--color-surface)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom <span className="gradient-text">Solution</span>?
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Every organization is unique. Let&apos;s discuss how we can tailor our services 
              to meet your specific requirements and challenges.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Free Consultation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
