import Link from "next/link";

export default function AccountOrderDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-[var(--font-space-grotesk)] text-3xl font-black">Order {params.id}</h1>
        <Link href="/account/orders" className="text-sm font-semibold text-cyan-700">
          Back to orders
        </Link>
      </div>
      <section className="surface p-5">
        <p className="text-sm text-slate-500">Status</p>
        <p className="mt-1 text-lg font-bold text-slate-900">Processing</p>
        <p className="mt-4 text-sm text-slate-600">Tracking details, shipment timeline, and line-item detail can be loaded from the order API.</p>
      </section>
      <section className="surface p-5">
        <h2 className="text-lg font-bold text-slate-900">Items</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li>Performance Hoodie x1</li>
          <li>Trail Sneakers x1</li>
        </ul>
      </section>
    </div>
  );
}
