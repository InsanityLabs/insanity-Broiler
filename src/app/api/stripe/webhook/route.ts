import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const headersList = headers()
  const signature = (await headersList).get('stripe-signature')

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature provided' },
      { status: 400 }
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error) {
    console.error('Webhook signature verification failed:', error)
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    )
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        
        // Handle successful payment
        console.log('Payment successful:', {
          sessionId: session.id,
          customerId: session.customer,
          customerEmail: session.customer_email,
          subscriptionId: session.subscription,
          metadata: session.metadata,
        })
        
        // TODO: Update user subscription in database
        // await updateUserSubscription({
        //   userId: session.metadata?.userId,
        //   subscriptionId: session.subscription as string,
        //   planType: session.metadata?.planType,
        //   customerId: session.customer as string,
        // })
        
        break
      }
      
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        
        console.log('Subscription updated:', {
          subscriptionId: subscription.id,
          customerId: subscription.customer,
          status: subscription.status,
          metadata: subscription.metadata,
        })
        
        // TODO: Update subscription status in database
        // await updateSubscriptionStatus({
        //   subscriptionId: subscription.id,
        //   status: subscription.status,
        // })
        
        break
      }
      
      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        
        console.log('Subscription canceled:', {
          subscriptionId: subscription.id,
          customerId: subscription.customer,
          metadata: subscription.metadata,
        })
        
        // TODO: Handle subscription cancellation
        // await cancelUserSubscription({
        //   subscriptionId: subscription.id,
        //   userId: subscription.metadata?.userId,
        // })
        
        break
      }
      
      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice
        
        console.log('Invoice payment succeeded:', {
          invoiceId: invoice.id,
          customerId: invoice.customer,
          amountPaid: invoice.amount_paid,
        })
        
        // TODO: Record successful payment
        // await recordPayment({
        //   invoiceId: invoice.id,
        //   subscriptionId: typeof invoice.subscription === 'string' ? invoice.subscription : invoice.subscription?.id || '',
        //   amount: invoice.amount_paid,
        // })
        
        break
      }
      
      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        
        console.log('Invoice payment failed:', {
          invoiceId: invoice.id,
          customerId: invoice.customer,
        })
        
        // TODO: Handle failed payment
        // await handleFailedPayment({
        //   invoiceId: invoice.id,
        //   subscriptionId: typeof invoice.subscription === 'string' ? invoice.subscription : invoice.subscription?.id || '',
        // })
        
        break
      }
      
      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}