'use client'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SuccessContent() {
  const params = useSearchParams()
  const vin = params.get('vin')

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: 'var(--bg)' }}>
      <div className="card p-12 text-center max-w-lg glow-amber" style={{ border: '1px solid rgba(245,158,11,0.25)' }}>
        <div style={{ fontSize: '4rem', marginBottom: 24 }}>✅</div>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: 12 }}>
          Payment Confirmed!
        </h1>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: 8 }}>
          Your vehicle history report for
        </p>
        <div style={{ fontFamily: 'monospace', color: '#f59e0b', fontSize: '1.1rem', letterSpacing: '0.15em', marginBottom: 16 }}>
          {vin}
        </div>
        <p style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: 32 }}>
          is being generated and will be sent to your email within <strong style={{ color: 'var(--text)' }}>60 seconds</strong>.
          Check your spam folder if you don't see it.
        </p>
        <a href="/" className="btn-primary px-10 py-4 rounded-xl inline-block">
          Check Another VIN
        </a>
        <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: 24 }}>
          Questions? Contact support@urcarhistorycheck.com
        </p>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  )
}
