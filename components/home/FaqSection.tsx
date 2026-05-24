'use client'

import { useState } from 'react'
import { FAQ_ITEMS } from '@/lib/constants'
import { IconChevronDown } from '@/components/ui/Icons'

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/[0.06] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-text-primary group-hover:text-brand-400 transition-colors pr-4">
          {question}
        </span>
        <IconChevronDown
          size={18}
          className={`text-text-tertiary flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-text-secondary leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  )
}

export default function FaqSection() {
  return (
    <section id="faq" className="section">
      <div className="container-tight">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="section-label justify-center">FAQ</p>
            <h2 className="section-title">Common questions</h2>
            <p className="section-subtitle mx-auto">
              Everything you need to know before purchasing a report.
            </p>
          </div>

          {/* FAQ list */}
          <div className="card rounded-2xl p-2">
            <div className="px-4">
              {FAQ_ITEMS.map((item, i) => (
                <FaqItem key={i} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
