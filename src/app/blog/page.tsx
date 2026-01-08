'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'building-production-ready-eks-platform-for-ai-ml',
    title: 'Building a Production-Ready EKS Platform for AI/ML Workloads',
    excerpt: 'A deep dive into architecting Amazon EKS clusters optimized for machine learning workloads, featuring GitOps patterns, Vault integration, and custom CLI tooling.',
    date: 'January 5, 2026',
    readTime: '12 min read',
    category: 'Platform Engineering',
    featured: true,
  },
  {
    slug: 'gitops-bridge-pattern-explained',
    title: 'The GitOps Bridge Pattern: Connecting Terraform and ArgoCD',
    excerpt: 'How to seamlessly integrate infrastructure provisioning with application deployment using the GitOps bridge pattern.',
    date: 'December 28, 2025',
    readTime: '8 min read',
    category: 'DevOps',
    featured: false,
  },
  {
    slug: 'enterprise-rag-architecture',
    title: 'Enterprise RAG Architecture: Beyond Chat With Documents',
    excerpt: 'Building production-grade Retrieval-Augmented Generation systems with security, compliance, and observability built-in.',
    date: 'December 15, 2025',
    readTime: '15 min read',
    category: 'AI & ML',
    featured: false,
  },
  {
    slug: 'internal-developer-platforms-kratix-backstage',
    title: 'Building Internal Developer Platforms with Kratix and Backstage',
    excerpt: 'A practical guide to implementing Golden Paths and self-service infrastructure for development teams.',
    date: 'December 1, 2025',
    readTime: '10 min read',
    category: 'Platform Engineering',
    featured: false,
  },
  {
    slug: 'policy-as-code-opa-gatekeeper',
    title: 'Policy as Code: Enforcing Security with OPA and Gatekeeper',
    excerpt: 'Implementing automated security policy enforcement across your Kubernetes clusters.',
    date: 'November 20, 2025',
    readTime: '9 min read',
    category: 'DevSecOps',
    featured: false,
  },
  {
    slug: 'finops-kubernetes-cost-optimization',
    title: 'FinOps in Practice: Kubernetes Cost Optimization Strategies',
    excerpt: 'Practical techniques for reducing cloud spend while maintaining performance and reliability.',
    date: 'November 10, 2025',
    readTime: '7 min read',
    category: 'DevOps',
    featured: false,
  },
];

const categories = ['All', 'DevOps', 'Platform Engineering', 'AI & ML', 'DevSecOps'];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="section-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-[120px]" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="badge mb-4">Blog</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Insights & <span className="gradient-text">Best Practices</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Technical insights, best practices, and thought leadership from our team of cloud native experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filters */}
      <section className="pb-8">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white'
                    : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:border-[var(--color-primary)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      {featuredPost && (
        <section className="py-8">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${featuredPost.slug}`} className="block group">
                <div className="card overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Image placeholder */}
                    <div className="h-64 md:h-auto bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 rounded-xl flex items-center justify-center">
                      <div className="text-6xl opacity-20">📊</div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="badge">{featuredPost.category}</span>
                        <span className="text-xs text-[var(--color-text-muted)]">Featured</span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-[var(--color-text-muted)]">
                        <span>{featuredPost.date}</span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog posts grid */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="block group h-full">
                  <article className="card h-full flex flex-col">
                    {/* Category */}
                    <span className="badge self-start mb-4">{post.category}</span>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                      {post.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-sm text-[var(--color-text-secondary)] mb-6 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)] pt-4 border-t border-[var(--color-border)]">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">
              Stay <span className="gradient-text">Updated</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-8">
              Subscribe to our newsletter for the latest insights on DevOps, Platform Engineering, and AI.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-[var(--color-darker)] border border-[var(--color-border)] text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors flex-grow"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
