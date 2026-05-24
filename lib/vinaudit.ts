// lib/vinaudit.ts
// Docs: https://www.vinaudit.com/api-documentation

const API_KEY = process.env.VINAUDIT_API_KEY!
const BASE = 'https://api.vinaudit.com'

export interface VinPreview {
  vin: string
  year: string
  make: string
  model: string
  trim: string
  engine: string
  country: string
  valid: boolean
}

export interface VinReport {
  vin: string
  vehicle: {
    year: string
    make: string
    model: string
    trim: string
    engine: string
    transmission: string
    drivetrain: string
    body: string
    color: string
  }
  history: {
    accidents: number
    owners: number
    lastReportedMileage: number
    titleProblems: boolean
    salvage: boolean
    flood: boolean
    theft: boolean
    lemon: boolean
  }
  records: Array<{
    date: string
    mileage: number
    source: string
    event: string
    location: string
  }>
  recalls: Array<{
    date: string
    component: string
    description: string
    remedy: string
  }>
}

// Step 1: Free preview — just decode VIN (no charge)
export async function getVinPreview(vin: string): Promise<VinPreview> {
  const url = `${BASE}/v1/attributes/?key=${API_KEY}&vin=${vin}&format=json`
  const res = await fetch(url, { next: { revalidate: 3600 } })
  if (!res.ok) throw new Error('VIN lookup failed')
  const data = await res.json()

  if (!data.success) {
    return { vin, year: '', make: '', model: '', trim: '', engine: '', country: '', valid: false }
  }

  return {
    vin,
    year:    data.attributes?.model_year    || '',
    make:    data.attributes?.make           || '',
    model:   data.attributes?.model          || '',
    trim:    data.attributes?.trim_level     || '',
    engine:  data.attributes?.engine_cylinders || '',
    country: data.attributes?.manufacturer_country || '',
    valid:   true,
  }
}

// Step 2: Full history report — called after payment confirmed
export async function getFullReport(vin: string): Promise<VinReport> {
  const url = `${BASE}/v1/history/?key=${API_KEY}&vin=${vin}&format=json`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Report fetch failed')
  const data = await res.json()
  return mapReport(vin, data)
}

function mapReport(vin: string, data: any): VinReport {
  return {
    vin,
    vehicle: {
      year:         data.attributes?.model_year || '',
      make:         data.attributes?.make || '',
      model:        data.attributes?.model || '',
      trim:         data.attributes?.trim_level || '',
      engine:       data.attributes?.engine_configuration || '',
      transmission: data.attributes?.transmission_style || '',
      drivetrain:   data.attributes?.drive_type || '',
      body:         data.attributes?.body_class || '',
      color:        '',
    },
    history: {
      accidents:           data.history?.accident_count        || 0,
      owners:              data.history?.owner_count            || 0,
      lastReportedMileage: data.history?.last_reported_mileage  || 0,
      titleProblems:       data.history?.title_problem           || false,
      salvage:             data.history?.salvage                 || false,
      flood:               data.history?.flood_damage            || false,
      theft:               data.history?.theft                   || false,
      lemon:               data.history?.lemon                   || false,
    },
    records: (data.history?.records || []).map((r: any) => ({
      date:     r.date     || '',
      mileage:  r.odometer || 0,
      source:   r.source   || '',
      event:    r.event    || '',
      location: r.location || '',
    })),
    recalls: (data.recalls || []).map((r: any) => ({
      date:        r.report_received_date || '',
      component:   r.component            || '',
      description: r.summary              || '',
      remedy:      r.remedy               || '',
    })),
  }
}
