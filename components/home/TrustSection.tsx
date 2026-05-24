import { STATS } from '@/lib/constants'

export default function TrustSection() {
  return (
    <section className="section-sm border-y border-white/[0.04]">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl lg:text-4xl font-heading font-bold text-text-primary tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
