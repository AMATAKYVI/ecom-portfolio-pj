import { connectToDb } from "@/lib/db";
import { ProductModel } from "@/models/Product";
import { FilterSidebar } from "@/components/product/FilterSidebar";
import { ProductGrid } from "@/components/product/ProductGrid";

interface ProductsPageProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const query = typeof searchParams?.q === "string" ? searchParams.q : "";

  await connectToDb();
  const products = await ProductModel.find(
    query
      ? {
          isActive: true,
          $text: { $search: query },
        }
      : { isActive: true },
  )
    .sort({ createdAt: -1 })
    .limit(24)
    .lean();

  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-[280px_1fr]">
      <FilterSidebar />
      <section className="space-y-4">
        <h1 className="text-2xl font-black text-slate-900">Products</h1>
        <ProductGrid products={products.map((item: any) => ({ ...item, _id: String(item._id) }))} />
      </section>
    </main>
  );
}
