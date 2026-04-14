import Link from "next/link";
import { connectToDb } from "@/lib/db";
import { ProductModel } from "@/models/Product";
import { ProductGrid } from "@/components/product/ProductGrid";

export default async function HomePage() {
  await connectToDb();
  const featured = await ProductModel.find({ isFeatured: true, isActive: true }).limit(8).lean();

  return (
    <main className="mx-auto max-w-7xl space-y-10 px-4 py-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-8">
        <p className="text-sm font-bold uppercase tracking-wider text-cyan-700">Spring Commerce Collection</p>
        <h1 className="mt-2 max-w-2xl text-4xl font-black text-slate-900">Build, launch, and scale your digital storefront.</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Curated product experiences, fast checkout, and account-first shopping flows.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/products" className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
            Shop All Products
          </Link>
          <Link href="/search" className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700">
            Explore Search
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-black">Featured Products</h2>
          <Link href="/products" className="text-sm font-semibold text-cyan-700">
            View all
          </Link>
        </div>
        <ProductGrid products={featured.map((item: any) => ({ ...item, _id: String(item._id) }))} />
      </section>
    </main>
  );
}
