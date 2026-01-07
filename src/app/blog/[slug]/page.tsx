'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Sample blog post content
const blogPostContent = {
  'building-production-ready-eks-platform-for-ai-ml': {
    title: 'Building a Production-Ready EKS Platform for AI/ML Workloads',
    date: 'January 5, 2026',
    readTime: '12 min read',
    category: 'Platform Engineering',
    author: {
      name: 'Martin Hamza',
      role: 'Team Lead',
      initials: 'MH',
    },
    content: `
## Introduction

As organizations increasingly adopt AI and machine learning, the need for robust, scalable infrastructure has never been greater. In this post, we'll walk through our approach to building a production-grade Amazon EKS platform specifically optimized for AI/ML workloads.

This architecture was developed for a large enterprise requiring high availability, security, and the ability to run diverse ML workloads—from model training to real-time inference.

## Architecture Overview

Our EKS platform follows a GitOps-first approach using what we call the "GitOps Bridge Pattern." This pattern seamlessly connects Terraform-managed infrastructure with ArgoCD-managed applications, creating a fully declarative and auditable system.

### Key Components

1. **Amazon EKS** - Managed Kubernetes control plane
2. **Terraform + Terragrunt** - Infrastructure provisioning
3. **ArgoCD** - GitOps continuous deployment
4. **HashiCorp Vault** - Secrets management
5. **Karpenter** - Intelligent node autoscaling

## Infrastructure as Code with Terraform

We provision all infrastructure using Terraform modules wrapped with Terragrunt for DRY configuration management.

\`\`\`hcl
module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 20.0"

  cluster_name    = var.cluster_name
  cluster_version = "1.29"

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  cluster_endpoint_public_access  = true
  cluster_endpoint_private_access = true

  eks_managed_node_groups = {
    system = {
      min_size     = 2
      max_size     = 4
      desired_size = 2
      instance_types = ["m6i.large"]
      
      labels = {
        workload-type = "system"
      }
    }
  }
}
\`\`\`

## The GitOps Bridge Pattern

The GitOps Bridge is the key to seamless integration between Terraform and ArgoCD. Here's how it works:

1. **Terraform** provisions the cluster and creates a "bridge" ConfigMap containing cluster metadata
2. **ArgoCD** reads this ConfigMap to configure environment-specific settings
3. **Applications** reference these values for dynamic configuration

\`\`\`yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: gitops-bridge
  namespace: argocd
data:
  cluster_name: production-ai-cluster
  aws_region: us-east-1
  environment: production
  vault_addr: https://vault.internal.example.com
\`\`\`

## GPU Node Provisioning with Karpenter

For ML workloads requiring GPUs, we use Karpenter with custom NodePools that provision the right instance types on demand.

\`\`\`yaml
apiVersion: karpenter.sh/v1beta1
kind: NodePool
metadata:
  name: gpu-workloads
spec:
  template:
    spec:
      requirements:
        - key: karpenter.k8s.aws/instance-family
          operator: In
          values: ["p4d", "p5"]
        - key: karpenter.sh/capacity-type
          operator: In
          values: ["on-demand", "spot"]
      nodeClassRef:
        name: gpu-node-class
  limits:
    gpu: 100
  disruption:
    consolidationPolicy: WhenEmpty
    consolidateAfter: 30m
\`\`\`

## Secrets Management with Vault

Security is paramount for AI/ML platforms handling sensitive data and models. We integrate HashiCorp Vault for:

- Dynamic secrets generation
- Secret rotation
- Fine-grained access control
- Audit logging

\`\`\`yaml
apiVersion: secrets.hashicorp.com/v1beta1
kind: VaultAuth
metadata:
  name: default
  namespace: ml-platform
spec:
  method: kubernetes
  mount: kubernetes
  kubernetes:
    role: ml-workload
    serviceAccount: ml-pipeline
\`\`\`

## Authentication Integration

We built a unified authentication model across:

- AWS IAM
- EKS cluster access
- ArgoCD
- Vault

This provides a consistent identity model and simplifies access management. We also developed a custom CLI tool that streamlines authentication and access to platform components.

\`\`\`bash
# Our custom CLI simplifies multi-system auth
bimodal-cli auth login
bimodal-cli eks use-context production
bimodal-cli vault login
\`\`\`

## Observability Stack

A production AI/ML platform requires comprehensive observability:

### Metrics
- Prometheus for metric collection
- GPU metrics with DCGM exporter
- Custom ML metrics (inference latency, batch throughput)

### Logging
- Fluent Bit for log collection
- OpenSearch for log aggregation
- Structured logging for ML pipelines

### Tracing
- OpenTelemetry for distributed tracing
- Jaeger for trace visualization
- ML-specific trace attributes

## Key Takeaways

1. **GitOps Bridge Pattern** enables seamless Terraform-ArgoCD integration
2. **Karpenter** provides intelligent, cost-effective GPU provisioning
3. **Unified authentication** simplifies security management
4. **Comprehensive observability** is essential for ML workloads

## Conclusion

Building a production-ready AI/ML platform requires careful consideration of security, scalability, and operational efficiency. The architecture we've outlined provides a solid foundation that can scale with your organization's needs while maintaining security and compliance requirements.

At BiModal, we've deployed this pattern across multiple enterprises, enabling teams to adopt secure, automated, and cloud-native operating models tailored for high-performance AI/ML workloads.

---

*Interested in learning more about our platform engineering services? [Contact us](/contact) to discuss your requirements.*
    `,
  },
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPostContent[slug as keyof typeof blogPostContent];

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-[var(--color-text-muted)] mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="btn-primary">
            <span>Back to Blog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Back link */}
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-8"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 14l-4-4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Blog
            </Link>

            {/* Category and meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full text-sm bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                {post.category}
              </span>
              <span className="text-[var(--color-text-muted)] text-sm">{post.date}</span>
              <span className="text-[var(--color-text-muted)] text-sm">{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#f7931e] flex items-center justify-center text-lg font-bold text-white">
                {post.author.initials}
              </div>
              <div>
                <div className="font-medium">{post.author.name}</div>
                <div className="text-sm text-[var(--color-text-muted)]">{post.author.role}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:gradient-text
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-[var(--color-primary)]
              prose-p:text-[var(--color-text-muted)] prose-p:leading-relaxed
              prose-a:text-[var(--color-primary)] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white
              prose-code:text-[var(--color-primary)] prose-code:bg-[var(--color-surface)] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
              prose-pre:bg-[var(--color-surface)] prose-pre:border prose-pre:border-[var(--color-primary)]/10 prose-pre:rounded-xl
              prose-ul:text-[var(--color-text-muted)]
              prose-ol:text-[var(--color-text-muted)]
              prose-li:marker:text-[var(--color-primary)]
              prose-blockquote:border-[var(--color-primary)] prose-blockquote:text-[var(--color-text-muted)]
              prose-hr:border-[var(--color-primary)]/20"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </div>
      </section>

      {/* Share and related */}
      <section className="py-16 border-t border-[var(--color-primary)]/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-[var(--color-text-muted)]">Share this article:</span>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <Link href="/blog" className="btn-outline">
              View All Posts
            </Link>
          </div>
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
            <h2 className="text-3xl font-bold mb-6">
              Ready to Build Your <span className="gradient-text">Platform</span>?
            </h2>
            <p className="text-[var(--color-text-muted)] mb-10 max-w-2xl mx-auto">
              Our team has deep experience building production-grade infrastructure for AI/ML workloads. Let&apos;s discuss your requirements.
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

// Simple markdown-to-HTML converter for the blog content
function formatContent(content: string): string {
  return content
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/gim, '<pre><code>$2</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    // Lists
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>')
    // Paragraphs
    .replace(/\n\n/gim, '</p><p>')
    // Horizontal rules
    .replace(/^---$/gim, '<hr />')
    // Wrap in paragraph
    .replace(/^(.+)$/gim, (match) => {
      if (match.startsWith('<')) return match;
      return `<p>${match}</p>`;
    });
}

