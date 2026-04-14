import Link from "next/link";

const orders = [
  { id: "ORD-1042", date: "2026-04-08", total: "$189.00", status: "Shipped" },
  { id: "ORD-1031", date: "2026-04-02", total: "$72.00", status: "Delivered" },
  { id: "ORD-0994", date: "2026-03-21", total: "$240.00", status: "Processing" },
];

export default function AccountOrdersPage() {
  return (
    <div className="space-y-4">
      <h1 className="font-[var(--font-space-grotesk)] text-3xl font-black">Order History</h1>
      <article className="surface overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-4 py-3">Order</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-slate-100">
                <td className="px-4 py-3 font-semibold text-slate-900">{order.id}</td>
                <td className="px-4 py-3 text-slate-600">{order.date}</td>
                <td className="px-4 py-3 text-slate-600">{order.status}</td>
                <td className="px-4 py-3 text-slate-700">{order.total}</td>
                <td className="px-4 py-3">
                  <Link href={`/account/orders/${order.id}`} className="font-semibold text-cyan-700">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
      <Link href="/api/orders" className="inline-block text-sm font-semibold text-cyan-700">
        API: /api/orders
      </Link>
    </div>
  );
}
