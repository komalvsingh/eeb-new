import { Router } from 'express';
import Stripe from 'stripe';
const router = Router();

const stripe = Stripe('your_stripe_secret_key');

router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Premium Subscription',
        },
        unit_amount: 999, // amount in cents
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: 'http://localhost:5173/success',  // Frontend success page
    cancel_url: 'http://localhost:5173/cancel',   // Frontend cancel page
  });

  res.json({ id: session.id });
});

export default router;
