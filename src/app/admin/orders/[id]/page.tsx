import Link from "next/link";

export default function AdminOrderDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-[var(--font-space-grotesk)] text-3xl font-black">Order {params.id}</h1>
        <Link href="/admin/orders" className="text-sm font-semibold text-cyan-700">
          Back to list
        </Link>
      </div>
      <section className="surface p-5">
        <h2 className="text-lg font-bold text-slate-900">Fulfillment</h2>
        <p className="mt-2 text-sm text-slate-600">Update order status, add tracking number, and log timeline updates.</p>
      </section>
      <section className="surface p-5">
        <h2 className="text-lg font-bold text-slate-900">Payment</h2>
        <p className="mt-2 text-sm text-slate-600">Payment status: Paid. Method: Card (Stripe).</p>
      </section>
    </div>
  );
}
