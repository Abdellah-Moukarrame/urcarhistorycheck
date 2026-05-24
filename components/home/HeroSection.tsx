'use client'

import { SAMPLE_REPORT } from '@/lib/constants'
import { IconShield, IconAlertTriangle, IconCheck, IconUsers, IconGauge } from '@/components/ui/Icons'

function ScoreRing({ score }: { score: number }) {
  const circumference = 2 * Math.PI * 42
  const progress = ((100 - score) / 100) * circumference
  const color = score >= 80 ? '#3ecf8e' : score >= 60 ? '#f5a623' : '#e5484d'

  return (
    <div className="relative w-[100px] h-[100px]">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
        <circle
          cx="50" cy="50" r="42" fill="none"
          stroke={color} strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-heading font-bold" style={{ color }}>{score}</span>
        <span className="text-[10px] text-text-tertiary uppercase tracking-wider">Score</span>
      </div>
    </div>
  )
}

export default function HeroSection() {
  const report = SAMPLE_REPORT

  return (
    <section className="relative pt-[72px] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-400/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-72px)] py-16 lg:py-0">
          {/* Left column — Copy */}
          <div className="max-w-xl">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-text-secondary mb-8">
              <IconShield size={14} className="text-brand-400" />
              <span>Trusted by 2.4M+ vehicle buyers worldwide</span>
            </div>

            {/* Headline */}
            <h1 className="text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.08] tracking-tight">
              Know the real history
              <span className="block text-brand-400 mt-1">before buying a used car</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-md">
              Detect accidents, mileage fraud, hidden damage and ownership history in seconds. Make informed decisions, not expensive mistakes.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#vin-search" className="btn btn-primary btn-lg">
                Check Vehicle
              </a>
              <a href="#sample-report" className="btn btn-secondary">
                View Sample Report
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-dark-900 bg-surface-2 flex items-center justify-center text-[10px] font-semibold text-text-secondary"
                    >
                      {['MR', 'SL', 'JW', 'AK', 'NP'][i-1]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#c9963a" className="text-brand-400">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-text-tertiary">4.9/5 from 12,400+ reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — Report mockup */}
          <div className="relative">
            <div className="card-glass p-6 lg:p-8 rounded-2xl">
              {/* Report header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-xs text-text-tertiary uppercase tracking-wider mb-1">Vehicle Report</p>
                  <h2 className="font-heading text-xl font-bold">
                    {report.vehicle.year} {report.vehicle.make} {report.vehicle.model}
                  </h2>
                  <p className="text-sm text-text-secondary mt-0.5">{report.vehicle.trim} &middot; {report.vehicle.vin}</p>
                </div>
                <ScoreRing score={report.score} />
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <IconAlertTriangle size={14} className="text-warning" />
                    <span className="text-xs text-text-tertiary uppercase tracking-wider">Accidents</span>
                  </div>
                  <p className="text-xl font-heading font-bold text-warning">{report.alerts.accidents} Found</p>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <IconUsers size={14} className="text-text-secondary" />
                    <span className="text-xs text-text-tertiary uppercase tracking-wider">Owners</span>
                  </div>
                  <p className="text-xl font-heading font-bold">{report.alerts.owners}</p>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <IconGauge size={14} className="text-success" />
                    <span className="text-xs text-text-tertiary uppercase tracking-wider">Mileage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-heading font-bold text-success">Verified</p>
                    <IconCheck size={14} className="text-success" />
                  </div>
                </div>
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <IconShield size={14} className="text-success" />
                    <span className="text-xs text-text-tertiary uppercase tracking-wider">Title</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-heading font-bold text-success">Clean</p>
                    <IconCheck size={14} className="text-success" />
                  </div>
                </div>
              </div>

              {/* Mini timeline */}
              <div className="border-t border-white/[0.06] pt-5">
                <p className="text-xs text-text-tertiary uppercase tracking-wider mb-3">Recent Activity</p>
                <div className="space-y-3">
                  {report.timeline.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                        item.type === 'warning' ? 'bg-warning' :
                        item.type === 'success' ? 'bg-success' :
                        'bg-text-tertiary'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm font-medium">{item.event}</span>
                          <span className="text-xs text-text-tertiary">{item.date}</span>
                        </div>
                        <p className="text-xs text-text-secondary mt-0.5">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative blur */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-400/10 rounded-full blur-[60px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
