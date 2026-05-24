import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' })

export async function POST(req: NextRequest) {
  const { vin, email } = await req.json()

  if (!vin || vin.length !== 17) {
    return NextResponse.json({ error: 'Invalid VIN' }, { status: 400 })
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'paypal'],
      mode: 'payment',
      customer_email: email || undefined,
      line_items: [
        {
          price_data: {
            currency: 'eur',
            unit_amount: Number(process.env.REPORT_PRICE_CENTS) || 2499,
            product_data: {
              name: 'Vehicle History Report',
              description: `Full VIN report for ${vin}`,
              images: [],
            },
          },
          quantity: 1,
        },
      ],
      metadata: { vin },
      success_url: `${appUrl}/report/success?session_id={CHECKOUT_SESSION_ID}&vin=${vin}`,
      cancel_url:  `${appUrl}/check/${vin}?cancelled=true`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe error:', err)
    return NextResponse.json({ error: 'Payment setup failed' }, { status: 500 })
  }
}
