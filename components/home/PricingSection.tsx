import { PRICING_PLANS } from '@/lib/constants'
import { IconCheck, IconShield, IconLock } from '@/components/ui/Icons'

export default function PricingSection() {
  return (
    <section id="pricing" className="section relative">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label justify-center">Pricing</p>
          <h2 className="section-title">Simple, transparent pricing</h2>
          <p className="section-subtitle mx-auto">
            No hidden fees. No subscriptions required. Pay only for what you need.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative card rounded-2xl p-7 flex flex-col ${
                plan.popular
                  ? 'border-brand-400/40 bg-brand-400/[0.03] shadow-glow'
                  : ''
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-400 text-dark-900 text-xs font-semibold px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="font-heading text-lg font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-text-secondary">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-heading font-bold">${plan.price}</span>
                  <span className="text-sm text-text-tertiary">{plan.period}</span>
                </div>
              </div>

              {/* CTA */}
              <button
                className={`w-full mb-6 ${
                  plan.popular
                    ? 'btn btn-primary py-3.5 rounded-xl'
                    : 'btn btn-secondary py-3.5 rounded-xl'
                }`}
              >
                {plan.cta}
              </button>

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <IconCheck size={16} className={`flex-shrink-0 mt-0.5 ${plan.popular ? 'text-brand-400' : 'text-text-tertiary'}`} />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
          <div className="flex items-center gap-2 text-xs text-text-tertiary">
            <IconLock size={14} />
            <span>Secure payment via Stripe</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-tertiary">
            <IconShield size={14} />
            <span>14-day money-back guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-text-tertiary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
              <line x1="1" y1="10" x2="23" y2="10" />
            </svg>
            <span>Visa, Mastercard, Amex accepted</span>
          </div>
        </div>
      </div>
    </section>
  )
}
