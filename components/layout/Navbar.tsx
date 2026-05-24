'use client'

import { useState, useEffect } from 'react'
import { NAV_LINKS, SITE_NAME } from '@/lib/constants'
import { IconMenu, IconX } from '@/components/ui/Icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-blur' : 'bg-transparent'
      }`}
    >
      <nav className="container-wide" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group" aria-label={`${SITE_NAME} home`}>
            <div className="w-8 h-8 rounded-lg bg-brand-400 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0c0c10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="font-heading text-lg font-bold tracking-tight text-text-primary">
              {SITE_NAME}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/[0.03]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors px-4 py-2"
            >
              Sign In
            </a>
            <a
              href="#vin-search"
              className="btn btn-primary btn-sm"
            >
              Check VIN
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <IconX size={24} /> : <IconMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-dark-900/98 z-40">
          <div className="flex flex-col p-6 gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-text-secondary hover:text-text-primary transition-colors py-3 border-b border-white/[0.06]"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a href="#" className="btn btn-secondary text-center">
                Sign In
              </a>
              <a
                href="#vin-search"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary text-center"
              >
                Check VIN
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
