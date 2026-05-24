import { TESTIMONIALS } from '@/lib/constants'
import { IconStar } from '@/components/ui/Icons'

export default function TestimonialsSection() {
  return (
    <section className="section bg-gradient-section">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label justify-center">Testimonials</p>
          <h2 className="section-title">Trusted by buyers worldwide</h2>
          <p className="section-subtitle mx-auto">
            Real stories from people who used our reports to make better decisions.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {TESTIMONIALS.map((testimonial, i) => (
            <div key={i} className="card p-6 flex flex-col">
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <IconStar key={j} size={14} className="text-brand-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-text-secondary leading-relaxed flex-1 mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-9 h-9 rounded-full bg-surface-2 border border-white/[0.06] flex items-center justify-center text-xs font-semibold text-text-secondary">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-xs text-text-tertiary">{testimonial.role} &middot; {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
