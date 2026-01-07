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
    image: null,
  },
  {
    slug: 'gitops-bridge-pattern-explained',
    title: 'The GitOps Bridge Pattern: Connecting Terraform and ArgoCD',
    excerpt: 'How to seamlessly integrate infrastructure provisioning with application deployment using the GitOps bridge pattern.',
    date: 'December 28, 2025',
    readTime: '8 min read',
    category: 'DevOps',
    featured: false,
    image: null,
  },
  {
    slug: 'enterprise-rag-architecture',
    title: 'Enterprise RAG Architecture: Beyond Chat With Documents',
    excerpt: 'Building production-grade Retrieval-Augmented Generation systems with security, compliance, and observability built-in.',
    date: 'December 15, 2025',
    readTime: '15 min read',
    category: 'AI & ML',
    featured: false,
    image: null,
  },
  {
    slug: 'internal-developer-platforms-kratix-backstage',
    title: 'Building Internal Developer Platforms with Kratix and Backstage',
    excerpt: 'A practical guide to implementing Golden Paths and self-service infrastructure for development teams.',
    date: 'December 1, 2025',
    readTime: '10 min read',
    category: 'Platform Engineering',
    featured: false,
    image: null,
  },
  {
    slug: 'policy-as-code-opa-gatekeeper',
    title: 'Policy as Code: Enforcing Security with OPA and Gatekeeper',
    excerpt: 'Implementing automated security policy enforcement across your Kubernetes clusters.',
    date: 'November 20, 2025',
    readTime: '9 min read',
    category: 'DevSecOps',
    featured: false,
    image: null,
  },
  {
    slug: 'finops-kubernetes-cost-optimization',
    title: 'FinOps in Practice: Kubernetes Cost Optimization Strategies',
    excerpt: 'Practical techniques for reducing cloud spend while maintaining performance and reliability.',
    date: 'November 10, 2025',
    readTime: '7 min read',
    category: 'DevOps',
    featured: false,
    image: null,
  },
];

const categories = ['All', 'DevOps', 'Platform Engineering', 'AI & ML', 'DevSecOps'];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="pt-20">
      {/* Hero section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[var(--color-secondary)]/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest">Insights</span>
            <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Technical insights, best practices, and thought leadership from our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category filters */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  category === 'All'
                    ? 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white'
                    : 'bg-[var(--color-surface)] text-[var(--color-text-muted)] hover:text-white border border-[var(--color-primary)]/10'
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
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${featuredPost.slug}`} className="block group">
                <div className="gradient-border overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image placeholder */}
                    <div className="h-64 md:h-auto bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg viewBox="0 0 200 200" className="w-32 h-32 opacity-30">
                          <motion.polygon
                            points="100,10 180,50 180,130 100,170 20,130 20,50"
                            fill="none"
                            stroke="url(#featured-hex)"
                            strokeWidth="2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            style={{ transformOrigin: 'center' }}
                          />
                          <motion.polygon
                            points="100,30 155,55 155,125 100,150 45,125 45,55"
                            fill="none"
                            stroke="url(#featured-hex)"
                            strokeWidth="1"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            style={{ transformOrigin: 'center' }}
                          />
                          <circle cx="100" cy="100" r="20" fill="url(#featured-hex)"/>
                          <defs>
                            <linearGradient id="featured-hex" x1="0" y1="0" x2="200" y2="200">
                              <stop stopColor="#ff6b35"/>
                              <stop offset="0.5" stopColor="#f7931e"/>
                              <stop offset="1" stopColor="#ffc107"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs bg-[var(--color-accent)]/20 text-[var(--color-accent)]">
                          Featured
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                          {featuredPost.category}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
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
                  <article className="gradient-border p-6 h-full flex flex-col card-hover">
                    {/* Category */}
                    <span className="inline-block self-start px-3 py-1 rounded-full text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
                      {post.category}
                    </span>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                      {post.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-sm text-[var(--color-text-muted)] mb-6 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-[var(--color-text-muted)] pt-4 border-t border-[var(--color-primary)]/10">
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
      <section className="py-24 bg-[var(--color-surface)] relative">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Stay <span className="gradient-text">Updated</span>
            </h2>
            <p className="text-[var(--color-text-muted)] mb-8">
              Subscribe to our newsletter for the latest insights on DevOps, Platform Engineering, and AI.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg bg-[var(--color-darker)] border border-[var(--color-primary)]/20 text-white placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-primary)] transition-colors flex-grow max-w-md"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                <span>Subscribe</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
