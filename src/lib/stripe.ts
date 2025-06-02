import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
  typescript: true,
})

import { loadStripe } from '@stripe/stripe-js'

export const getStripe = () => {
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set')
  }
  
  return loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  )
}

// Pricing plans configuration
export const PRICING_PLANS = {
  free: {
    name: 'Free',
    description: 'Perfect for getting started',
    price: 0,
    priceId: '',
    popular: false,
    features: [
      'Basic features',
      'Community support',
      'Limited usage',
    ],
  },
  pro: {
    name: 'Pro',
    description: 'For growing businesses',
    price: 29,
    priceId: process.env.STRIPE_PRO_PRICE_ID || '',
    popular: true,
    features: [
      'All basic features',
      'Priority support',
      'Advanced analytics',
      'Custom integrations',
      'Premium templates',
    ],
  },
  enterprise: {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 99,
    priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID || '',
    popular: false,
    features: [
      'All pro features',
      'Dedicated support',
      'Custom solutions',
      'SLA guarantee',
      'White-label options',
    ],
  },
} as const

export type PricingPlan = keyof typeof PRICING_PLANS

export type PricingPlanDetails = {
  name: string
  description: string
  price: number
  priceId: string
  popular: boolean
  features: string[]
}