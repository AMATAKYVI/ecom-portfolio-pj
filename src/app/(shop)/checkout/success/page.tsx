import Link from "next/link";

export default function OrderConfirmationPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <section className="surface-strong p-8 text-center">
        <p className="eyebrow">Order Confirmed</p>
        <h1 className="mt-3 font-[var(--font-space-grotesk)] text-4xl font-black text-slate-900">Thank you for your purchase.</h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">Your order has been received and is now being processed. A confirmation email has been sent.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/account/orders" className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
            View My Orders
          </Link>
          <Link href="/products" className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700">
            Continue Shopping
          </Link>
        </div>
      </section>
    </main>
  );
}
