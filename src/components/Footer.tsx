import Link from 'next/link';

const footerLinks = {
  services: [
    { href: '/services#devops', label: 'DevOps' },
    { href: '/services#devsecops', label: 'DevSecOps' },
    { href: '/services#platform', label: 'Platform Engineering' },
    { href: '/services#ai', label: 'AI & ML' },
  ],
  company: [
    { href: '/team', label: 'Team' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
  social: [
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'linkedin' },
    { href: 'https://github.com', label: 'GitHub', icon: 'github' },
    { href: 'https://twitter.com', label: 'Twitter', icon: 'twitter' },
  ],
};

const SocialIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'linkedin':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    case 'github':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      );
    case 'twitter':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    default:
      return null;
  }
};

// BiModal Logo Component for Footer
const BiModalLogoFooter = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
    <defs>
      <linearGradient id="bimodal-footer-gradient" x1="0" y1="0" x2="48" y2="48">
        <stop stopColor="#ff6b35"/>
        <stop offset="0.5" stopColor="#f7931e"/>
        <stop offset="1" stopColor="#ffc107"/>
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="40" height="40" rx="8" stroke="url(#bimodal-footer-gradient)" strokeWidth="2.5" fill="none"/>
    <rect x="12" y="12" width="8" height="8" rx="1" fill="url(#bimodal-footer-gradient)"/>
    <rect x="12" y="22" width="8" height="4" rx="1" fill="url(#bimodal-footer-gradient)"/>
    <rect x="12" y="28" width="8" height="8" rx="1" fill="url(#bimodal-footer-gradient)"/>
    <rect x="22" y="12" width="6" height="6" rx="1" fill="url(#bimodal-footer-gradient)"/>
    <rect x="22" y="30" width="6" height="6" rx="1" fill="url(#bimodal-footer-gradient)"/>
    <rect x="30" y="14" width="6" height="8" rx="1" fill="url(#bimodal-footer-gradient)"/>
    <rect x="30" y="26" width="6" height="8" rx="1" fill="url(#bimodal-footer-gradient)"/>
    <rect x="22" y="20" width="14" height="4" rx="1" fill="url(#bimodal-footer-gradient)" opacity="0.7"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-primary)]/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[var(--color-primary)]/5 to-transparent blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <BiModalLogoFooter />
              <span className="text-lg font-bold gradient-text">BiModal Group</span>
            </Link>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6">
              A trusted IT consulting firm delivering solutions across DevOps, DevSecOps, AI, and Platform Engineering.
            </p>
            <div className="flex gap-4">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[var(--color-surface-light)] flex items-center justify-center text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all"
                >
                  <SocialIcon name={link.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[var(--color-primary)] font-semibold mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-text-muted)] hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[var(--color-primary)] font-semibold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-text-muted)] hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[var(--color-primary)] font-semibold mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-[var(--color-text-muted)]">
              <li className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-primary)]">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                info@bimodalgroup.com
              </li>
              <li className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-primary)]">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                United States
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[var(--color-primary)]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-text-muted)] text-sm">
            © {new Date().getFullYear()} BiModal Group, LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-[var(--color-text-muted)] hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[var(--color-text-muted)] hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
