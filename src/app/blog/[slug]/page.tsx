'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Sample blog post data (in a real app, this would come from a CMS or API)
const blogPost = {
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
## Overview

At BiModal Group, we recently completed a challenging engagement: designing and delivering a production-grade Amazon EKS platform specifically optimized for AI/ML workloads. This post shares our architecture decisions, implementation patterns, and lessons learned.

## The Challenge

Our client needed a Kubernetes platform that could:

- Support GPU-intensive machine learning workloads
- Integrate seamlessly with their existing Terraform-managed infrastructure
- Provide secure secret management with HashiCorp Vault
- Enable GitOps-based deployments with ArgoCD
- Offer a streamlined developer experience through custom CLI tooling

## Architecture Overview

### GitOps Bridge Pattern

We implemented the GitOps Bridge pattern to connect Terraform-managed infrastructure with ArgoCD-managed applications. This approach passes critical infrastructure context through Kubernetes ConfigMaps:

\`\`\`yaml
# GitOps Bridge ConfigMap example
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

### EKS Configuration

Our EKS module leveraged the terraform-aws-modules/eks module with specific configurations for AI/ML workloads:

\`\`\`hcl
module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 20.0"

  cluster_name    = var.cluster_name
  cluster_version = "1.29"
  vpc_id          = module.vpc.vpc_id
  subnet_ids      = module.vpc.private_subnets

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

### Karpenter for GPU Workloads

For dynamic GPU provisioning, we configured Karpenter with specific NodePools:

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

### HashiCorp Vault Integration

Secure secrets management was achieved through the Vault Secrets Operator:

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

## Custom CLI Tooling

To improve developer experience, we built a custom CLI that streamlined common operations:

\`\`\`bash
# Custom CLI for authentication
bimodal-cli auth login
bimodal-cli eks use-context production
bimodal-cli vault login
\`\`\`

## Observability Stack

We implemented a comprehensive observability stack including:

- **Prometheus** for metrics collection
- **Fluent Bit** for log aggregation
- **OpenSearch** for log storage and analysis
- **OpenTelemetry** for distributed tracing
- **Jaeger** for trace visualization

## Results

The platform successfully supports:

- 50+ ML engineers running training jobs
- Automatic GPU scaling from 0 to 100 GPUs
- 99.9% uptime for production inference endpoints
- Secure secret rotation without application restarts

## Key Takeaways

1. **GitOps Bridge** enables clean separation between infrastructure and application concerns
2. **Karpenter** is essential for cost-effective GPU workload management
3. **Custom tooling** significantly improves developer adoption
4. **Security-first design** with Vault integration builds trust

Want to learn how we can help your organization build a similar platform? [Contact us](/contact) to start the conversation.
  `,
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug;

  // In a real app, fetch the post based on slug
  console.log('Loading post:', slug);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-(--color-primary)/5 rounded-full blur-[120px]" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <Link href="/blog" className="link-arrow mb-6 inline-flex">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rotate-180">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Blog
            </Link>

            <span className="badge mb-4">{blogPost.category}</span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {blogPost.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-(--color-text-muted)">
              <span>{blogPost.date}</span>
              <span>•</span>
              <span>{blogPost.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Author */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-12 pb-8 border-b border-(--color-border)"
            >
              <div className="w-14 h-14 rounded-full bg-linear-to-br from-(--color-primary) to-(--color-secondary) flex items-center justify-center text-xl font-bold text-white">
                {blogPost.author.initials}
              </div>
              <div>
                <div className="font-semibold">{blogPost.author.name}</div>
                <div className="text-sm text-(--color-text-muted)">{blogPost.author.role}</div>
              </div>
            </motion.div>

            {/* Article content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <style jsx global>{`
                .prose h2 {
                  color: white;
                  font-size: 1.75rem;
                  font-weight: 700;
                  margin-top: 3rem;
                  margin-bottom: 1.5rem;
                }
                .prose h3 {
                  color: white;
                  font-size: 1.25rem;
                  font-weight: 600;
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                }
                .prose p {
                  color: var(--color-text-secondary);
                  line-height: 1.8;
                  margin-bottom: 1.5rem;
                }
                .prose ul, .prose ol {
                  color: var(--color-text-secondary);
                  margin-bottom: 1.5rem;
                }
                .prose li {
                  margin-bottom: 0.5rem;
                }
                .prose strong {
                  color: white;
                }
                .prose a {
                  color: var(--color-primary);
                  text-decoration: none;
                }
                .prose a:hover {
                  text-decoration: underline;
                }
                .prose code {
                  background: var(--color-surface-light);
                  padding: 0.25rem 0.5rem;
                  border-radius: 4px;
                  font-size: 0.875rem;
                }
                .prose pre {
                  background: var(--color-surface);
                  border: 1px solid var(--color-border);
                  border-radius: 12px;
                  padding: 1.5rem;
                  overflow-x: auto;
                  margin: 1.5rem 0;
                }
                .prose pre code {
                  background: transparent;
                  padding: 0;
                  font-size: 0.875rem;
                  line-height: 1.7;
                }
              `}</style>
              <div dangerouslySetInnerHTML={{ __html: formatContent(blogPost.content) }} />
            </motion.article>

            {/* Share & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-12 pt-8 border-t border-(--color-border)"
            >
              <div className="card bg-linear-to-br from-(--color-primary)/10 to-(--color-secondary)/10 border-(--color-primary)/30 text-center">
                <h3 className="text-xl font-semibold mb-3">Interested in Similar Solutions?</h3>
                <p className="text-(--color-text-secondary) mb-6">
                  Let&apos;s discuss how BiModal Group can help your organization build production-ready infrastructure.
                </p>
                <Link href="/contact" className="btn-primary">
                  Get Free Consultation
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Simple markdown-like formatter
function formatContent(content: string): string {
  return content
    .replace(/## (.*)/g, '<h2>$1</h2>')
    .replace(/### (.*)/g, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/- (.*)/g, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, (match) => {
      if (match.startsWith('<')) return match;
      return `<p>${match}</p>`;
    })
    .replace(/<p><\/p>/g, '');
}
