// ─── Site-wide constants ─── //

export const SITE_NAME = 'urCarHistoryCheck'
export const SITE_URL = 'https://urcarhistorycheck.com'
export const SITE_TAGLINE = 'Know the real history before buying a used car'

export const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Reports', href: '#sample-report' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const

export const STATS = [
  { value: '2.4M+', label: 'Reports Generated' },
  { value: '98.7%', label: 'Accuracy Rate' },
  { value: '180+', label: 'Countries Covered' },
  { value: '4.9/5', label: 'Customer Rating' },
] as const

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Enter VIN Number',
    description: 'Locate the 17-digit VIN on the dashboard, door frame, or vehicle documents and enter it in our search.',
  },
  {
    step: '02',
    title: 'Generate Full Report',
    description: 'Our system cross-references 100+ databases to compile a comprehensive vehicle history report in seconds.',
  },
  {
    step: '03',
    title: 'Buy with Confidence',
    description: 'Review accident records, ownership history, mileage data, and more to make an informed purchase decision.',
  },
] as const

export const FEATURES = [
  {
    title: 'Accident History',
    description: 'Complete collision and damage records from insurance claims and police reports.',
    icon: 'accident',
  },
  {
    title: 'Title Status',
    description: 'Salvage, rebuilt, flood, lemon law, and other critical title brand alerts.',
    icon: 'title',
  },
  {
    title: 'Mileage Verification',
    description: 'Detect odometer rollbacks and inconsistencies across historical records.',
    icon: 'mileage',
  },
  {
    title: 'Theft Records',
    description: 'Active and historical theft reports from law enforcement databases.',
    icon: 'theft',
  },
  {
    title: 'Ownership History',
    description: 'Number of previous owners, registration types, and usage patterns.',
    icon: 'ownership',
  },
  {
    title: 'Open Recalls',
    description: 'Manufacturer safety recalls and whether repairs have been completed.',
    icon: 'recalls',
  },
  {
    title: 'Service Records',
    description: 'Maintenance history from dealerships and independent repair shops.',
    icon: 'service',
  },
  {
    title: 'Market Value',
    description: 'Current fair market valuation based on condition, mileage, and region.',
    icon: 'value',
  },
] as const

export const PRICING_PLANS = [
  {
    id: 'single',
    name: 'Single Report',
    price: 9.99,
    period: 'one-time',
    description: 'Perfect for checking one specific vehicle',
    features: [
      'Full vehicle history report',
      'Accident & damage records',
      'Title status verification',
      'Mileage verification',
      'Theft check',
      'Recall information',
      'PDF download',
    ],
    popular: false,
    cta: 'Get Report',
  },
  {
    id: 'bundle',
    name: '3 Reports',
    price: 19.99,
    period: 'one-time',
    description: 'Best for comparing multiple vehicles',
    features: [
      'Everything in Single Report',
      '3 full vehicle reports',
      'Market value comparison',
      'Side-by-side comparison tool',
      'Priority processing',
      '30-day access to update',
      'Email support',
    ],
    popular: true,
    cta: 'Best Value',
  },
  {
    id: 'unlimited',
    name: 'Unlimited',
    price: 39.99,
    period: '/month',
    description: 'For dealers, mechanics, and power buyers',
    features: [
      'Everything in 3 Reports',
      'Unlimited vehicle checks',
      'API access',
      'Bulk VIN processing',
      'White-label reports',
      'Dedicated account manager',
      'Phone & email support',
    ],
    popular: false,
    cta: 'Go Unlimited',
  },
] as const

export const TESTIMONIALS = [
  {
    name: 'Marcus R.',
    role: 'First-time buyer',
    location: 'Berlin, Germany',
    text: 'I was about to buy a BMW 3 Series that looked immaculate. The report revealed two major accidents and an odometer rollback of 40,000 km. Saved me from a terrible deal.',
    rating: 5,
  },
  {
    name: 'Sofia L.',
    role: 'Used car dealer',
    location: 'Madrid, Spain',
    text: "We run every vehicle through urCarHistoryCheck before listing. It's become essential to our business. Customers trust us more because we include the report with every sale.",
    rating: 5,
  },
  {
    name: 'James W.',
    role: 'Private buyer',
    location: 'London, UK',
    text: 'Clean report on a Golf R I was looking at. Gave me the confidence to pull the trigger. The seller even appreciated that I did my due diligence.',
    rating: 5,
  },
] as const

export const FAQ_ITEMS = [
  {
    question: 'How accurate are the reports?',
    answer: 'Our reports are compiled from 100+ authoritative data sources including insurance companies, law enforcement databases, service records, and government agencies. We maintain a 98.7% accuracy rate. However, we always recommend using our report as one part of your due diligence alongside a physical inspection.',
  },
  {
    question: 'Which countries and vehicles are covered?',
    answer: 'We cover vehicles from over 180 countries with the most comprehensive data available for vehicles in the United States, Canada, and the European Union. Our database includes cars, trucks, motorcycles, and commercial vehicles manufactured from 1981 onwards (when VIN standardization began).',
  },
  {
    question: 'What if the VIN is invalid or not found?',
    answer: 'If our system cannot validate your VIN or returns no data, you will not be charged. We verify VIN validity before processing payment. If data is insufficient after payment, we offer a full refund within 14 days.',
  },
  {
    question: 'What is your refund policy?',
    answer: 'We offer a 14-day money-back guarantee. If you are unsatisfied with your report for any reason, or if the data provided is materially incomplete, contact our support team for a full refund. No questions asked.',
  },
  {
    question: 'How quickly do I receive the report?',
    answer: 'Most reports are generated within 30 seconds of payment confirmation. Complex cases involving older vehicles or international records may take up to 5 minutes. You will receive an email with a link to your full report.',
  },
  {
    question: 'Can I check a vehicle from another country?',
    answer: 'Yes. Our global database covers vehicles registered in 180+ countries. The depth of information may vary by region, but core checks like accident history, theft status, and VIN decoding are available worldwide.',
  },
] as const

export const SAMPLE_REPORT = {
  vehicle: {
    year: '2021',
    make: 'BMW',
    model: '330i',
    trim: 'M Sport',
    vin: 'WBA5R1C05M•••••12',
    color: 'Alpine White',
    engine: '2.0L Turbo I4',
    transmission: '8-Speed Automatic',
    drivetrain: 'Rear-Wheel Drive',
    mileage: '34,218 mi',
  },
  score: 82,
  alerts: {
    accidents: 1,
    owners: 2,
    titleIssues: false,
    theftRecord: false,
    mileageOk: true,
    recalls: 1,
  },
  timeline: [
    { date: 'Mar 2021', event: 'First sold', detail: 'New vehicle sold at authorized BMW dealer', type: 'info' },
    { date: 'Jun 2021', event: 'Service record', detail: 'First scheduled maintenance at 5,000 mi', type: 'info' },
    { date: 'Nov 2021', event: 'Ownership change', detail: 'Title transferred to second owner', type: 'neutral' },
    { date: 'Feb 2022', event: 'Minor accident', detail: 'Rear-end collision reported. Estimated damage $2,400', type: 'warning' },
    { date: 'Apr 2022', event: 'Repair completed', detail: 'Body repair completed at certified shop', type: 'info' },
    { date: 'Sep 2022', event: 'Recall issued', detail: 'NHTSA recall: rearview camera software update', type: 'warning' },
    { date: 'Jan 2023', event: 'Inspection passed', detail: 'Annual state inspection — all systems pass', type: 'success' },
    { date: 'Aug 2023', event: 'Service record', detail: 'Major service at 28,000 mi — brakes and fluids', type: 'info' },
  ],
}
