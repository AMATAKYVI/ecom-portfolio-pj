import Link from "next/link";

export default function AdminProductEditPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-[var(--font-space-grotesk)] text-3xl font-black">Edit Product {params.id}</h1>
        <Link href="/admin/products" className="text-sm font-semibold text-cyan-700">
          Back to products
        </Link>
      </div>
      <section className="surface p-5">
        <p className="mb-4 text-sm text-slate-600">Product edit form template. Connect fields to existing product API by id.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <input className="rounded-xl border border-slate-300 px-4 py-3" defaultValue="Performance Hoodie" />
          <input className="rounded-xl border border-slate-300 px-4 py-3" defaultValue="performance-hoodie" />
          <input className="rounded-xl border border-slate-300 px-4 py-3" defaultValue="89" />
          <input className="rounded-xl border border-slate-300 px-4 py-3" defaultValue="24" />
        </div>
        <button className="mt-4 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">Update Product</button>
      </section>
    </div>
  );
}
