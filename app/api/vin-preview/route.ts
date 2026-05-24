import { NextRequest, NextResponse } from 'next/server'
import { getVinPreview } from '@/lib/vinaudit'

export async function GET(req: NextRequest) {
  const vin = req.nextUrl.searchParams.get('vin')?.toUpperCase()

  if (!vin || vin.length !== 17) {
    return NextResponse.json({ error: 'Invalid VIN' }, { status: 400 })
  }

  try {
    const preview = await getVinPreview(vin)
    return NextResponse.json(preview)
  } catch (err) {
    console.error('VIN preview error:', err)
    return NextResponse.json({ error: 'Lookup failed' }, { status: 500 })
  }
}
