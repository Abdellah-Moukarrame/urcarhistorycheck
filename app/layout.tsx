import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://urcarhistorycheck.com'),
  title: 'urCarHistoryCheck — Vehicle History Reports You Can Trust',
  description: 'Check any vehicle\'s complete history before buying. Accident records, mileage verification, theft status, title checks, and more. Trusted by 2.4M+ buyers worldwide.',
  keywords: 'VIN check, vehicle history report, car history, used car check, accident history, mileage fraud, title check, theft records, odometer rollback',
  authors: [{ name: 'urCarHistoryCheck' }],
  creator: 'urCarHistoryCheck',
  publisher: 'urCarHistoryCheck',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'urCarHistoryCheck — Vehicle History Reports You Can Trust',
    description: 'Comprehensive vehicle history reports. Accidents, mileage, ownership, theft, recalls — all in one report.',
    url: 'https://urcarhistorycheck.com',
    siteName: 'urCarHistoryCheck',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'urCarHistoryCheck — Vehicle History Reports',
    description: 'Check any vehicle\'s complete history before buying. Trusted by 2.4M+ buyers.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  themeColor: '#0c0c10',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-dark-900 text-text-primary font-body">{children}</body>
    </html>
  )
}
