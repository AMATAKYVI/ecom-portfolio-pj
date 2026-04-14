import { NextRequest } from "next/server";
import Stripe from "stripe";
import { fail, ok } from "@/lib/api";

const stripeKey = process.env.STRIPE_SECRET_KEY;
const stripe = stripeKey ? new Stripe(stripeKey) : null;

export async function POST(req: NextRequest) {
  try {
    if (!stripe) {
      return fail("Stripe is not configured", 500);
    }

    const payload = await req.json();
    const amount = Number(payload?.amount || 0);
    const currency = payload?.currency || "usd";

    if (amount <= 0) {
      return fail("Invalid amount", 422);
    }

    const intent = await stripe.paymentIntents.create({
      amount,
      currency,
      metadata: payload?.metadata || {},
      automatic_payment_methods: { enabled: true },
    });

    return ok({
      clientSecret: intent.client_secret,
      paymentIntentId: intent.id,
    });
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to create payment intent", 500);
  }
}
