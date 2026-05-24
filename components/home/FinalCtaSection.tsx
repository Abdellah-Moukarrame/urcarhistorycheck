import { IconArrowRight } from '@/components/ui/Icons'

export default function FinalCtaSection() {
  return (
    <section className="section relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[300px] bg-brand-400/[0.06] rounded-full blur-[100px]" />
      </div>

      <div className="container-tight relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl lg:text-[2.75rem] font-heading font-bold leading-tight tracking-tight mb-5">
            Don&apos;t buy a used car blindly
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-lg mx-auto">
            Every year, millions of buyers inherit hidden problems because they didn&apos;t check. 
            A report costs less than 1% of the car&apos;s price — and can save you thousands.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="#vin-search" className="btn btn-primary btn-lg group">
              Check Vehicle Now
              <IconArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <p className="mt-6 text-xs text-text-tertiary">
            Results in under 30 seconds &middot; 14-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  )
}
