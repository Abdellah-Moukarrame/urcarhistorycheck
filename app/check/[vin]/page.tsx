'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Preview {
  vin: string
  year: string
  make: string
  model: string
  trim: string
  engine: string
  country: string
  valid: boolean
}

const HIDDEN = [
  { icon: '💥', label: 'Accident records' },
  { icon: '👤', label: 'Ownership history' },
  { icon: '📍', label: 'Odometer check' },
  { icon: '🔧', label: 'Service records' },
  { icon: '⚠️', label: 'Open recalls' },
  { icon: '📋', label: 'Title problems' },
]

export default function CheckPage({ params }: { params: { vin: string } }) {
  const vin = params.vin.toUpperCase()
  const [preview, setPreview] = useState<Preview | null>(null)
  const [loading, setLoading] = useState(true)
  const [paying, setPaying] = useState(false)
  const [email, setEmail] = useState('')
  const router = useRouter()

  useEffect(() => {
    fetch(`/api/vin-preview?vin=${vin}`)
      .then(r => r.json())
      .then(d => { setPreview(d); setLoading(false) })
      .catch(() => setLoading(false))
  }, [vin])

  async function handlePay() {
    setPaying(true)
    const res  = await fetch('/api/vin-report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ vin, email }),
    })
    const data = await res.json()
    if (data.url) window.location.href = data.url
    else setPaying(false)
  }

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg)' }}>
      <div className="text-center">
        <div className="text-4xl mb-4 animate-pulse-slow">🔍</div>
        <p style={{ color: 'var(--muted)', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', letterSpacing: '0.1em' }}>
          DECODING VIN...
        </p>
      </div>
    </div>
  )

  if (!preview?.valid) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg)' }}>
      <div className="card p-10 text-center max-w-md">
        <div className="text-4xl mb-4">⚠️</div>
        <h2 className="text-2xl mb-3">VIN not found</h2>
        <p style={{ color: 'var(--muted)', marginBottom: 24 }}>We couldn't decode <code style={{ color: '#f59e0b' }}>{vin}</code>. Please double-check the number.</p>
        <button onClick={() => router.push('/')} className="btn-primary px-8 py-3 rounded-xl w-full">
          Try another VIN
        </button>
      </div>
    </div>
  )

  return (
    <main className="min-h-screen bg-grid" style={{ background: 'var(--bg)' }}>
      <div className="max-w-2xl mx-auto px-6 py-16">

        {/* BACK */}
        <button onClick={() => router.push('/')} style={{ color: 'var(--muted)', fontSize: '0.875rem', marginBottom: 32, display: 'flex', alignItems: 'center', gap: 6 }}>
          ← Back to search
        </button>

        {/* FREE PREVIEW CARD */}
        <div className="card p-8 mb-6" style={{ border: '1px solid rgba(34,197,94,0.2)' }}>
          <div className="flex items-center gap-2 mb-6">
            <span className="badge-safe px-3 py-1 rounded-full text-xs font-medium">✓ VIN VERIFIED</span>
          </div>

          <div className="grid grid-cols-2 gap-5 mb-6">
            {[
              { label: 'Make',    val: preview.make    },
              { label: 'Model',   val: preview.model   },
              { label: 'Year',    val: preview.year    },
              { label: 'Country', val: preview.country },
            ].map(r => (
              <div key={r.label}>
                <div style={{ fontSize: '0.7rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>{r.label}</div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--text)' }}>{r.val || 'N/A'}</div>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.15)', borderRadius: 8, padding: '12px 16px', fontSize: '0.85rem', color: 'var(--muted)' }}>
            VIN: <span style={{ color: '#f59e0b', fontFamily: 'monospace', letterSpacing: '0.1em' }}>{vin}</span>
          </div>
        </div>

        {/* LOCKED SECTIONS */}
        <div className="card p-8 mb-6" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 30%, var(--surface) 100%)', zIndex: 1 }} />
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: 16, color: 'var(--muted)' }}>
            🔒 FULL REPORT INCLUDES
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {HIDDEN.map(h => (
              <div key={h.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: 'rgba(255,255,255,0.02)', borderRadius: 8, filter: 'blur(0.5px)' }}>
                <span>{h.icon}</span>
                <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{h.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PAY SECTION */}
        <div className="card p-8 glow-amber" style={{ border: '1px solid rgba(245,158,11,0.25)' }}>
          <div className="flex items-baseline justify-between mb-2">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>Get Full Report</h3>
            <div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: '#f59e0b' }}>€24.99</span>
              <span style={{ color: 'var(--muted)', fontSize: '0.8rem', marginLeft: 6 }}>one-time</span>
            </div>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '0.875rem', marginBottom: 20 }}>
            Instant delivery. 30-day money-back guarantee.
          </p>

          <input
            type="email"
            placeholder="your@email.com (report sent here)"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              width: '100%', padding: '12px 16px', borderRadius: 10, marginBottom: 12,
              background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)',
              color: 'var(--text)', fontSize: '0.95rem',
            }}
          />

          <button
            onClick={handlePay}
            disabled={paying}
            className="btn-primary w-full py-4 rounded-xl text-base"
          >
            {paying ? 'Redirecting to payment...' : '🔒 Get Full Report — €24.99'}
          </button>

          <div className="flex items-center justify-center gap-4 mt-4" style={{ color: 'var(--muted)', fontSize: '0.75rem' }}>
            <span>💳 Card & PayPal</span>
            <span>🔒 SSL Secured</span>
            <span>↩️ 30-day refund</span>
          </div>
        </div>

      </div>
    </main>
  )
}
