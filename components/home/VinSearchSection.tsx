'use client'

import { useState, useRef, useEffect } from 'react'
import { IconSearch, IconShield, IconLock } from '@/components/ui/Icons'

const EXAMPLE_VIN = 'WBA5R1C05MCJ12345'

export default function VinSearchSection() {
  const [vin, setVin] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Autofill demo animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!vin && !isFocused) {
        setIsAnimating(true)
        let i = 0
        const interval = setInterval(() => {
          setVin(EXAMPLE_VIN.slice(0, i + 1))
          i++
          if (i >= EXAMPLE_VIN.length) {
            clearInterval(interval)
            setTimeout(() => {
              setVin('')
              setIsAnimating(false)
            }, 2000)
          }
        }, 80)
        return () => clearInterval(interval)
      }
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (vin.length === 17) {
      window.location.href = `/check/${vin}`
    }
  }

  return (
    <section id="vin-search" className="section-sm bg-gradient-section relative">
      <div className="container-tight">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <p className="section-label justify-center">Vehicle Lookup</p>
            <h2 className="section-title">Check any vehicle instantly</h2>
            <p className="section-subtitle mx-auto">
              Enter a 17-digit VIN to access the full vehicle history report.
            </p>
          </div>

          {/* Search form */}
          <form onSubmit={handleSubmit} className="relative">
            <div className={`relative rounded-2xl border transition-all duration-200 ${
              isFocused
                ? 'border-brand-400/50 shadow-glow bg-surface-elevated'
                : 'border-white/[0.08] bg-surface'
            }`}>
              <div className="flex items-center">
                <div className="pl-6 text-text-tertiary">
                  <IconSearch size={20} />
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={vin}
                  onChange={(e) => {
                    if (!isAnimating) {
                      setVin(e.target.value.toUpperCase().replace(/[^A-HJ-NPR-Z0-9]/g, '').slice(0, 17))
                    }
                  }}
                  onFocus={() => {
                    setIsFocused(true)
                    if (isAnimating) {
                      setIsAnimating(false)
                      setVin('')
                    }
                  }}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Enter 17-digit VIN number"
                  className="flex-1 bg-transparent border-none outline-none text-text-primary font-heading text-lg tracking-[0.12em] uppercase py-5 px-4 placeholder:text-text-tertiary placeholder:tracking-[0.06em] placeholder:normal-case placeholder:font-body placeholder:text-base placeholder:font-normal"
                  maxLength={17}
                  aria-label="Vehicle Identification Number"
                  autoComplete="off"
                  spellCheck={false}
                />
                <div className="pr-3">
                  <button
                    type="submit"
                    disabled={vin.length !== 17}
                    className="btn btn-primary rounded-xl px-6 py-3.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none"
                  >
                    Check VIN
                  </button>
                </div>
              </div>
            </div>

            {/* Character count */}
            <div className="flex items-center justify-between mt-3 px-2">
              <div className="flex items-center gap-4">
                <span className="text-xs text-text-tertiary flex items-center gap-1.5">
                  <IconLock size={12} />
                  Secure & encrypted
                </span>
                <span className="text-xs text-text-tertiary flex items-center gap-1.5">
                  <IconShield size={12} />
                  GDPR compliant
                </span>
              </div>
              <span className={`text-xs font-mono transition-colors ${
                vin.length === 17 ? 'text-success' : 'text-text-tertiary'
              }`}>
                {vin.length}/17
              </span>
            </div>
          </form>

          {/* VIN help */}
          <div className="mt-8 text-center">
            <p className="text-xs text-text-tertiary">
              Example: <span className="font-mono text-text-secondary tracking-wider">WBA5R1C05MCJ12345</span>
              <span className="mx-2 text-white/10">|</span>
              Find the VIN on dashboard, door jamb, or registration
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
