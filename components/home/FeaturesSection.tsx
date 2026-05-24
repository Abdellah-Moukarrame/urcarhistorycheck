import { FEATURES } from '@/lib/constants'
import { FeatureIcon } from '@/components/ui/Icons'

export default function FeaturesSection() {
  return (
    <section id="features" className="section bg-gradient-section">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label justify-center">What We Check</p>
          <h2 className="section-title">Comprehensive vehicle intelligence</h2>
          <p className="section-subtitle mx-auto">
            Every report covers critical data points from 100+ authoritative sources to give you the full picture.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="card card-interactive p-6 group"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-400/10 border border-brand-400/20 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-brand-400/20">
                <FeatureIcon icon={feature.icon} size={20} className="text-brand-400" />
              </div>
              <h3 className="font-heading text-base font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
