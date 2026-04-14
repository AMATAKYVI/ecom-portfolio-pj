import Link from "next/link";

const products = [
  { id: "prd_001", name: "Performance Hoodie", stock: 24, price: "$89" },
  { id: "prd_002", name: "Trail Sneakers", stock: 11, price: "$120" },
  { id: "prd_003", name: "Everyday Backpack", stock: 42, price: "$64" },
];

export default function AdminProductsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-[var(--font-space-grotesk)] text-3xl font-black">Manage Products</h1>
        <Link href="/admin/products/new" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
          New Product
        </Link>
      </div>
      <div className="surface overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t border-slate-100">
                <td className="px-4 py-3 font-semibold text-slate-900">{product.name}</td>
                <td className="px-4 py-3 text-slate-600">{product.stock}</td>
                <td className="px-4 py-3 text-slate-600">{product.price}</td>
                <td className="px-4 py-3">
                  <Link href={`/admin/products/${product.id}`} className="font-semibold text-cyan-700">
                    Edit
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
