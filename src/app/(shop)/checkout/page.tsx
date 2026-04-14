import Link from "next/link";
import { CheckoutSteps } from "@/components/checkout/CheckoutSteps";

export default function CheckoutPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-6 px-4 py-8">
      <h1 className="font-[var(--font-space-grotesk)] text-3xl font-black">Checkout</h1>
      <CheckoutSteps current={2} />
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="surface space-y-4 p-5">
          <h2 className="text-lg font-bold">Contact and Shipping</h2>
          <p className="text-sm text-slate-600">Collect customer info, addresses, and shipping method selection.</p>
        </div>
        <div className="surface space-y-4 p-5">
          <h2 className="text-lg font-bold">Payment</h2>
          <p className="text-sm text-slate-600">Stripe Elements integration point for payment confirmation.</p>
          <Link href="/checkout/success" className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
            Simulate Successful Payment
          </Link>
        </div>
      </section>
    </main>
  );
}
