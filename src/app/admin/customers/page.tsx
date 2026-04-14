import Link from "next/link";

const customers = [
  { id: "usr_001", name: "Mia Reed", email: "mia@example.com", orders: 8 },
  { id: "usr_002", name: "Leo Kim", email: "leo@example.com", orders: 3 },
  { id: "usr_003", name: "Nora Patel", email: "nora@example.com", orders: 11 },
];

export default function AdminCustomersPage() {
  return (
    <div className="space-y-4">
      <h1 className="font-[var(--font-space-grotesk)] text-3xl font-black">Customers</h1>
      <div className="surface overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Orders</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-t border-slate-100">
                <td className="px-4 py-3 font-semibold text-slate-900">{customer.name}</td>
                <td className="px-4 py-3 text-slate-600">{customer.email}</td>
                <td className="px-4 py-3 text-slate-600">{customer.orders}</td>
                <td className="px-4 py-3">
                  <Link href={`/admin/customers/${customer.id}`} className="font-semibold text-cyan-700">
                    Detail
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
