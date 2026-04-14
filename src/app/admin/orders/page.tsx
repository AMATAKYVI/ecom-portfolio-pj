import Link from "next/link";

const orders = [
  { id: "ORD-1042", customer: "Mia Reed", total: "$189", status: "Shipped" },
  { id: "ORD-1031", customer: "Leo Kim", total: "$72", status: "Delivered" },
  { id: "ORD-0994", customer: "Nora Patel", total: "$240", status: "Processing" },
];

export default function AdminOrdersPage() {
  return (
    <div className="space-y-4">
      <h1 className="font-[var(--font-space-grotesk)] text-3xl font-black">Manage Orders</h1>
      <div className="surface overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-4 py-3">Order</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-slate-100">
                <td className="px-4 py-3 font-semibold text-slate-900">{order.id}</td>
                <td className="px-4 py-3 text-slate-600">{order.customer}</td>
                <td className="px-4 py-3 text-slate-600">{order.status}</td>
                <td className="px-4 py-3 text-slate-600">{order.total}</td>
                <td className="px-4 py-3">
                  <Link href={`/admin/orders/${order.id}`} className="font-semibold text-cyan-700">
                    Open
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
