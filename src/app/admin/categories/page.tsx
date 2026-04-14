const categories = [
  { name: "Electronics", slug: "electronics", products: 24, isActive: true },
  { name: "Apparel", slug: "apparel", products: 15, isActive: true },
  { name: "Accessories", slug: "accessories", products: 8, isActive: true },
];

export default function AdminCategoriesPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black">Category Management</h1>
        <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">New Category</button>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Slug</th>
              <th className="px-4 py-3">Products</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.slug} className="border-t border-slate-100">
                <td className="px-4 py-3 font-semibold text-slate-900">{category.name}</td>
                <td className="px-4 py-3 text-slate-600">{category.slug}</td>
                <td className="px-4 py-3 text-slate-600">{category.products}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
                    {category.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
