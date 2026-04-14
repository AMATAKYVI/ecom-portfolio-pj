import Link from "next/link";

export default function AdminCustomerDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-[var(--font-space-grotesk)] text-3xl font-black">Customer {params.id}</h1>
        <Link href="/admin/customers" className="text-sm font-semibold text-cyan-700">
          Back to customers
        </Link>
      </div>
      <section className="surface p-5">
        <h2 className="text-lg font-bold text-slate-900">Profile Snapshot</h2>
        <p className="mt-2 text-sm text-slate-600">Contact info, addresses, and order volume summary.</p>
      </section>
      <section className="surface p-5">
        <h2 className="text-lg font-bold text-slate-900">Recent Orders</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li>ORD-1042</li>
          <li>ORD-1031</li>
        </ul>
      </section>
    </div>
  );
}
