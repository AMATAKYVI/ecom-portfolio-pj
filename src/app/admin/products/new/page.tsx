import Link from "next/link";

export default function AdminProductCreatePage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-[var(--font-space-grotesk)] text-3xl font-black">Create Product</h1>
        <Link href="/admin/products" className="text-sm font-semibold text-cyan-700">
          Back to products
        </Link>
      </div>
      <section className="surface p-5">
        <p className="mb-4 text-sm text-slate-600">Use this template for create and edit flows with React Hook Form + Zod.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Product name" />
          <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Slug" />
          <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Price" />
          <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Stock" />
        </div>
        <textarea className="mt-3 w-full rounded-xl border border-slate-300 px-4 py-3" rows={5} placeholder="Description" />
        <button className="mt-4 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">Save Product</button>
      </section>
    </div>
  );
}
