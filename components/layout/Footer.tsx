import { SITE_NAME, NAV_LINKS } from '@/lib/constants'
import { IconShield } from '@/components/ui/Icons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] bg-dark-900">
      <div className="container-wide">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-brand-400 flex items-center justify-center">
                <IconShield size={16} className="text-dark-900" />
              </div>
              <span className="font-heading text-lg font-bold tracking-tight">
                {SITE_NAME}
              </span>
            </a>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
              Comprehensive vehicle history reports trusted by millions of buyers, dealers, and automotive professionals worldwide.
            </p>
          </div>

          {/* Product column */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wide uppercase text-text-primary mb-5">
              Product
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Sample Report
                </a>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wide uppercase text-text-primary mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wide uppercase text-text-primary mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-text-tertiary flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
              SSL Secured
            </span>
            <span className="text-xs text-text-tertiary flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              GDPR Compliant
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
