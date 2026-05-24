import { HOW_IT_WORKS_STEPS } from '@/lib/constants'
import { IconSearch, IconFileText, IconCheck } from '@/components/ui/Icons'

const STEP_ICONS = [IconSearch, IconFileText, IconCheck]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section bg-gradient-section relative">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label justify-center">How It Works</p>
          <h2 className="section-title">Three steps to a safer purchase</h2>
          <p className="section-subtitle mx-auto">
            Get a comprehensive vehicle history report in under a minute.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[52px] left-[16.67%] right-[16.67%] h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const Icon = STEP_ICONS[i]
            return (
              <div key={i} className="relative text-center group">
                {/* Step number + icon */}
                <div className="relative inline-flex items-center justify-center w-[104px] h-[104px] mb-8">
                  <div className="absolute inset-0 rounded-2xl border border-white/[0.06] bg-surface transition-all duration-300 group-hover:border-brand-400/30 group-hover:bg-surface-2" />
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-[10px] font-heading font-bold text-brand-400 tracking-[0.2em] uppercase mb-1">{step.step}</span>
                    <Icon size={28} className="text-text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
