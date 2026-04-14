import Link from "next/link";
import { connectToDb } from "@/lib/db";
import { ProductModel } from "@/models/Product";
import { ProductGrid } from "@/components/product/ProductGrid";

interface SearchPageProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = typeof searchParams?.q === "string" ? searchParams.q : "";

  await connectToDb();
  const products = query
    ? await ProductModel.find({
        isActive: true,
        $text: { $search: query },
      })
        .limit(24)
        .lean()
    : [];

  return (
    <main className="mx-auto max-w-7xl space-y-6 px-4 py-8">
      <h1 className="text-2xl font-black">Search</h1>
      <form className="flex gap-2" action="/search" method="get">
        <input name="q" defaultValue={query} className="w-full rounded-xl border border-slate-300 px-4 py-3" placeholder="Search products..." />
        <button type="submit" className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
          Search
        </button>
      </form>
      {query ? (
        <>
          <p className="text-sm text-slate-600">Results for &quot;{query}&quot;</p>
          <ProductGrid products={products.map((item: any) => ({ ...item, _id: String(item._id) }))} />
        </>
      ) : (
        <p className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500">
          Start by typing a query above, or explore the <Link href="/products" className="font-semibold text-cyan-700">products catalog</Link>.
        </p>
      )}
    </main>
  );
}
