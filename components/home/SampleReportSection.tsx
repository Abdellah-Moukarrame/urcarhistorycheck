'use client'

import { useState } from 'react'
import { SAMPLE_REPORT } from '@/lib/constants'
import { IconAlertTriangle, IconUsers, IconGauge, IconLock, IconCar, IconCheck, IconRefreshCw } from '@/components/ui/Icons'

const TABS = [
  { id: 'overview', label: 'Overview', icon: IconCar },
  { id: 'accidents', label: 'Accidents', icon: IconAlertTriangle },
  { id: 'ownership', label: 'Ownership', icon: IconUsers },
  { id: 'mileage', label: 'Mileage', icon: IconGauge },
  { id: 'theft', label: 'Theft & Title', icon: IconLock },
]

function ScoreRingLarge({ score }: { score: number }) {
  const circumference = 2 * Math.PI * 54
  const progress = ((100 - score) / 100) * circumference
  const color = score >= 80 ? '#3ecf8e' : score >= 60 ? '#f5a623' : '#e5484d'
  const label = score >= 80 ? 'Good' : score >= 60 ? 'Fair' : 'Poor'

  return (
    <div className="relative w-[140px] h-[140px]">
      <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
        <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="8" />
        <circle
          cx="60" cy="60" r="54" fill="none"
          stroke={color} strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-heading font-bold" style={{ color }}>{score}</span>
        <span className="text-xs text-text-tertiary uppercase tracking-wider mt-0.5">{label}</span>
      </div>
    </div>
  )
}

function OverviewTab() {
  const r = SAMPLE_REPORT

  return (
    <div className="grid md:grid-cols-[1fr_auto] gap-8">
      <div className="space-y-6">
        {/* Vehicle info */}
        <div>
          <h3 className="text-xs text-text-tertiary uppercase tracking-wider mb-4">Vehicle Specifications</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Year', value: r.vehicle.year },
              { label: 'Make', value: r.vehicle.make },
              { label: 'Model', value: `${r.vehicle.model} ${r.vehicle.trim}` },
              { label: 'Engine', value: r.vehicle.engine },
              { label: 'Transmission', value: r.vehicle.transmission },
              { label: 'Drivetrain', value: r.vehicle.drivetrain },
              { label: 'Exterior', value: r.vehicle.color },
              { label: 'Mileage', value: r.vehicle.mileage },
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-xs text-text-tertiary">{item.label}</span>
                <span className="text-sm font-medium mt-0.5">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts summary */}
        <div>
          <h3 className="text-xs text-text-tertiary uppercase tracking-wider mb-4">Quick Summary</h3>
          <div className="space-y-2">
            {[
              { label: 'Accidents', value: `${r.alerts.accidents} record found`, ok: r.alerts.accidents === 0 },
              { label: 'Title Status', value: r.alerts.titleIssues ? 'Issues found' : 'Clean title', ok: !r.alerts.titleIssues },
              { label: 'Theft Record', value: r.alerts.theftRecord ? 'Record found' : 'No records', ok: !r.alerts.theftRecord },
              { label: 'Mileage', value: r.alerts.mileageOk ? 'Verified consistent' : 'Inconsistency detected', ok: r.alerts.mileageOk },
              { label: 'Open Recalls', value: `${r.alerts.recalls} open recall(s)`, ok: r.alerts.recalls === 0 },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2.5 border-b border-white/[0.04] last:border-0">
                <span className="text-sm text-text-secondary">{item.label}</span>
                <span className={`text-sm font-medium flex items-center gap-1.5 ${item.ok ? 'text-success' : 'text-warning'}`}>
                  {item.ok ? <IconCheck size={14} /> : <IconAlertTriangle size={14} />}
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Score */}
      <div className="flex flex-col items-center justify-start gap-4 md:border-l md:border-white/[0.06] md:pl-8">
        <ScoreRingLarge score={r.score} />
        <div className="text-center">
          <p className="text-xs text-text-tertiary uppercase tracking-wider">Vehicle Health Score</p>
          <p className="text-xs text-text-tertiary mt-1 max-w-[160px]">Based on history, title, and maintenance records</p>
        </div>
      </div>
    </div>
  )
}

function AccidentsTab() {
  const accidents = SAMPLE_REPORT.timeline.filter(t => t.type === 'warning')

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 p-4 rounded-xl bg-warning/10 border border-warning/20">
        <IconAlertTriangle size={20} className="text-warning flex-shrink-0" />
        <p className="text-sm text-warning">1 accident record found for this vehicle</p>
      </div>

      <div className="space-y-4">
        {accidents.map((item, i) => (
          <div key={i} className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono text-text-tertiary">{item.date}</span>
              <span className="badge badge-warn text-[11px]">{item.event}</span>
            </div>
            <p className="text-sm text-text-secondary">{item.detail}</p>
          </div>
        ))}
      </div>

      {/* Damage severity chart mockup */}
      <div className="border border-white/[0.06] rounded-xl p-5">
        <h3 className="text-xs text-text-tertiary uppercase tracking-wider mb-4">Estimated Damage Severity</h3>
        <div className="space-y-3">
          {[
            { label: 'Structural', pct: 0, color: 'bg-success' },
            { label: 'Body/Paint', pct: 35, color: 'bg-warning' },
            { label: 'Mechanical', pct: 0, color: 'bg-success' },
            { label: 'Airbag Deploy', pct: 0, color: 'bg-success' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-xs text-text-secondary w-24">{item.label}</span>
              <div className="flex-1 h-2 bg-white/[0.04] rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${item.color} transition-all duration-700`} style={{ width: `${item.pct}%` }} />
              </div>
              <span className="text-xs text-text-tertiary w-8 text-right">{item.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function OwnershipTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
        <IconUsers size={20} className="text-text-secondary flex-shrink-0" />
        <p className="text-sm text-text-secondary">2 owners recorded for this vehicle</p>
      </div>

      {/* Ownership timeline */}
      <div className="relative pl-6">
        <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-white/[0.06]" />

        {[
          { owner: 'Owner 1', period: 'Mar 2021 — Nov 2021', type: 'Personal', location: 'Munich, DE', mileage: '0 — 8,200 mi' },
          { owner: 'Owner 2', period: 'Nov 2021 — Present', type: 'Personal', location: 'Berlin, DE', mileage: '8,200 — 34,218 mi' },
        ].map((item, i) => (
          <div key={i} className="relative pb-8 last:pb-0">
            <div className="absolute -left-6 top-1 w-[15px] h-[15px] rounded-full border-2 border-brand-400 bg-dark-900" />
            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <div className="flex items-start justify-between mb-2">
                <span className="font-heading font-bold text-sm">{item.owner}</span>
                <span className="text-xs text-text-tertiary">{item.period}</span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div>
                  <span className="text-text-tertiary">Type</span>
                  <p className="text-text-secondary mt-0.5">{item.type}</p>
                </div>
                <div>
                  <span className="text-text-tertiary">Location</span>
                  <p className="text-text-secondary mt-0.5">{item.location}</p>
                </div>
                <div>
                  <span className="text-text-tertiary">Mileage</span>
                  <p className="text-text-secondary mt-0.5">{item.mileage}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MileageTab() {
  const dataPoints = [
    { date: 'Mar 21', miles: 0 },
    { date: 'Jun 21', miles: 5000 },
    { date: 'Nov 21', miles: 8200 },
    { date: 'Feb 22', miles: 14500 },
    { date: 'Sep 22', miles: 21000 },
    { date: 'Jan 23', miles: 26800 },
    { date: 'Aug 23', miles: 31400 },
    { date: 'Dec 23', miles: 34218 },
  ]

  const maxMiles = 40000
  const chartWidth = 100
  const chartHeight = 60

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 p-4 rounded-xl bg-success/10 border border-success/20">
        <IconCheck size={20} className="text-success flex-shrink-0" />
        <p className="text-sm text-success">Mileage readings are consistent — no rollback detected</p>
      </div>

      {/* Chart */}
      <div className="border border-white/[0.06] rounded-xl p-5">
        <h3 className="text-xs text-text-tertiary uppercase tracking-wider mb-4">Odometer History</h3>
        <div className="relative h-48 overflow-hidden">
          <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full" preserveAspectRatio="none">
            {/* Grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => (
              <line key={i} x1="0" y1={chartHeight * (1 - pct)} x2={chartWidth} y2={chartHeight * (1 - pct)}
                stroke="rgba(255,255,255,0.04)" strokeWidth="0.3" />
            ))}
            {/* Line */}
            <polyline
              fill="none"
              stroke="#3ecf8e"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={dataPoints.map((p, i) => {
                const x = (i / (dataPoints.length - 1)) * chartWidth
                const y = chartHeight - (p.miles / maxMiles) * chartHeight
                return `${x},${y}`
              }).join(' ')}
            />
            {/* Area fill */}
            <polygon
              fill="url(#mileageGrad)"
              points={`0,${chartHeight} ${dataPoints.map((p, i) => {
                const x = (i / (dataPoints.length - 1)) * chartWidth
                const y = chartHeight - (p.miles / maxMiles) * chartHeight
                return `${x},${y}`
              }).join(' ')} ${chartWidth},${chartHeight}`}
            />
            <defs>
              <linearGradient id="mileageGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3ecf8e" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#3ecf8e" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Data points */}
            {dataPoints.map((p, i) => {
              const x = (i / (dataPoints.length - 1)) * chartWidth
              const y = chartHeight - (p.miles / maxMiles) * chartHeight
              return <circle key={i} cx={x} cy={y} r="1.5" fill="#3ecf8e" />
            })}
          </svg>
        </div>
        {/* X-axis labels */}
        <div className="flex justify-between mt-2">
          {dataPoints.filter((_, i) => i % 2 === 0).map((p, i) => (
            <span key={i} className="text-[10px] text-text-tertiary">{p.date}</span>
          ))}
        </div>
      </div>

      {/* Readings table */}
      <div className="border border-white/[0.06] rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] bg-white/[0.02]">
              <th className="text-left text-xs text-text-tertiary uppercase tracking-wider font-medium py-3 px-4">Date</th>
              <th className="text-left text-xs text-text-tertiary uppercase tracking-wider font-medium py-3 px-4">Mileage</th>
              <th className="text-left text-xs text-text-tertiary uppercase tracking-wider font-medium py-3 px-4">Source</th>
              <th className="text-right text-xs text-text-tertiary uppercase tracking-wider font-medium py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {dataPoints.map((p, i) => (
              <tr key={i} className="border-b border-white/[0.04] last:border-0">
                <td className="py-3 px-4 text-text-secondary">{p.date}</td>
                <td className="py-3 px-4 font-mono text-text-primary">{p.miles.toLocaleString()} mi</td>
                <td className="py-3 px-4 text-text-secondary">{i % 2 === 0 ? 'Service Record' : 'Registration'}</td>
                <td className="py-3 px-4 text-right">
                  <span className="badge badge-safe text-[11px]">
                    <IconCheck size={10} />
                    Consistent
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function TheftTitleTab() {
  return (
    <div className="space-y-6">
      {/* Title status */}
      <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
        <h3 className="text-xs text-text-tertiary uppercase tracking-wider mb-4">Title Status</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: 'Salvage', status: false },
            { label: 'Flood Damage', status: false },
            { label: 'Rebuilt', status: false },
            { label: 'Lemon Law', status: false },
            { label: 'Junk', status: false },
            { label: 'Theft', status: false },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className={`w-5 h-5 rounded-md flex items-center justify-center ${
                item.status ? 'bg-red-bg text-danger' : 'bg-success/10 text-success'
              }`}>
                {item.status ? <IconAlertTriangle size={12} /> : <IconCheck size={12} />}
              </div>
              <div>
                <span className="text-sm text-text-secondary">{item.label}</span>
                <span className={`block text-[11px] ${item.status ? 'text-danger' : 'text-success'}`}>
                  {item.status ? 'Alert' : 'Clear'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Theft check */}
      <div className="flex items-center gap-3 p-4 rounded-xl bg-success/10 border border-success/20">
        <IconLock size={20} className="text-success flex-shrink-0" />
        <div>
          <p className="text-sm font-medium text-success">No theft records found</p>
          <p className="text-xs text-success/70 mt-0.5">Checked against NICB, Interpol, and national databases</p>
        </div>
      </div>

      {/* Recall info */}
      <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
        <div className="flex items-center gap-2 mb-4">
          <IconRefreshCw size={16} className="text-warning" />
          <h3 className="text-xs text-text-tertiary uppercase tracking-wider">Open Recalls</h3>
        </div>
        <div className="p-4 rounded-lg border border-warning/20 bg-warning/5">
          <div className="flex items-start justify-between mb-1">
            <span className="text-sm font-medium text-text-primary">Rearview Camera Software Update</span>
            <span className="text-xs text-text-tertiary">Sep 2022</span>
          </div>
          <p className="text-xs text-text-secondary">NHTSA Campaign: 22V-456. Software update required for rearview camera display. Contact authorized dealer for free repair.</p>
          <span className="badge badge-warn text-[11px] mt-3">Repair Pending</span>
        </div>
      </div>
    </div>
  )
}

export default function SampleReportSection() {
  const [activeTab, setActiveTab] = useState('overview')

  const renderTab = () => {
    switch (activeTab) {
      case 'overview': return <OverviewTab />
      case 'accidents': return <AccidentsTab />
      case 'ownership': return <OwnershipTab />
      case 'mileage': return <MileageTab />
      case 'theft': return <TheftTitleTab />
      default: return <OverviewTab />
    }
  }

  return (
    <section id="sample-report" className="section relative">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label justify-center">Sample Report</p>
          <h2 className="section-title">See what&apos;s inside a report</h2>
          <p className="section-subtitle mx-auto">
            Preview a real vehicle history report with accident records, mileage verification, ownership timeline, and more.
          </p>
        </div>

        {/* Report card */}
        <div className="card-glass rounded-2xl overflow-hidden max-w-4xl mx-auto">
          {/* Report header bar */}
          <div className="bg-white/[0.02] border-b border-white/[0.06] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-400" />
              <span className="text-sm font-heading font-semibold">
                {SAMPLE_REPORT.vehicle.year} {SAMPLE_REPORT.vehicle.make} {SAMPLE_REPORT.vehicle.model}
              </span>
              <span className="text-xs text-text-tertiary font-mono">{SAMPLE_REPORT.vehicle.vin}</span>
            </div>
            <span className="badge badge-neutral text-[11px]">Sample Report</span>
          </div>

          {/* Tabs */}
          <div className="border-b border-white/[0.06] px-4 py-2 flex items-center gap-1 overflow-x-auto">
            {TABS.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab flex items-center gap-2 flex-shrink-0 ${activeTab === tab.id ? 'tab-active' : ''}`}
                  aria-label={`View ${tab.label}`}
                >
                  <Icon size={14} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Tab content */}
          <div className="p-6 lg:p-8">
            {renderTab()}
          </div>
        </div>
      </div>
    </section>
  )
}
