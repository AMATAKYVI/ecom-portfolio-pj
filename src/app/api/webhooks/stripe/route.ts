import Stripe from "stripe";
import { headers } from "next/headers";
import { connectToDb } from "@/lib/db";
import { OrderModel } from "@/models/Order";
import { fail, ok } from "@/lib/api";

const stripeKey = process.env.STRIPE_SECRET_KEY;
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
const stripe = stripeKey ? new Stripe(stripeKey) : null;

export async function POST(req: Request) {
  try {
    if (!stripe || !endpointSecret) {
      return fail("Stripe webhook not configured", 500);
    }

    const rawBody = await req.text();
    const signature = (await headers()).get("stripe-signature");
    if (!signature) {
      return fail("Missing signature", 400);
    }

    const event = stripe.webhooks.constructEvent(rawBody, signature, endpointSecret);

    await connectToDb();

    if (event.type === "payment_intent.succeeded") {
      const intent = event.data.object as Stripe.PaymentIntent;
      await OrderModel.findOneAndUpdate(
        { paymentIntentId: intent.id },
        { paymentStatus: "paid", status: "confirmed" },
      );
    }

    if (event.type === "payment_intent.payment_failed") {
      const intent = event.data.object as Stripe.PaymentIntent;
      await OrderModel.findOneAndUpdate(
        { paymentIntentId: intent.id },
        { paymentStatus: "failed" },
      );
    }

    if (event.type === "charge.refunded") {
      const charge = event.data.object as Stripe.Charge;
      await OrderModel.findOneAndUpdate(
        { paymentIntentId: charge.payment_intent },
        { paymentStatus: "refunded", status: "refunded" },
      );
    }

    return ok({ received: true });
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Webhook handling failed", 400);
  }
}
