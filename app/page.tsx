import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import VinSearchSection from '@/components/home/VinSearchSection'
import TrustSection from '@/components/home/TrustSection'
import HowItWorksSection from '@/components/home/HowItWorksSection'
import SampleReportSection from '@/components/home/SampleReportSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import PricingSection from '@/components/home/PricingSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import FaqSection from '@/components/home/FaqSection'
import FinalCtaSection from '@/components/home/FinalCtaSection'

import { FAQ_ITEMS } from '@/lib/constants'

export default function Home() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'urCarHistoryCheck',
    url: 'https://urcarhistorycheck.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://urcarhistorycheck.com/check/{search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'urCarHistoryCheck',
    url: 'https://urcarhistorycheck.com',
    logo: 'https://urcarhistorycheck.com/logo.png', // Add a real logo path if you have one
    description: 'Comprehensive vehicle history reports trusted by millions of buyers, dealers, and automotive professionals worldwide.',
    sameAs: [
      // Add social links here if available
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <VinSearchSection />
        <TrustSection />
        <HowItWorksSection />
        <SampleReportSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  )
}
