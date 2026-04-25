import { connectToDb } from "@/lib/db";
import { ProductModel } from "@/models/Product";
import { FilterSidebar } from "@/components/product/FilterSidebar";
import { ProductGrid } from "@/components/product/ProductGrid";

interface ProductsPageProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const query = typeof searchParams?.q === "string" ? searchParams.q : "";

  let products: any[] = [];
  let hasDataError = false;

  try {
    await connectToDb();
    products = await ProductModel.find(
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
  } catch {
    hasDataError = true;
  }

  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-[280px_1fr]">
      <FilterSidebar />
      <section className="space-y-4">
        <h1 className="text-2xl font-black text-slate-900">Products</h1>
        {hasDataError ? (
          <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700">
            Unable to load products right now. Please verify production
            environment variables.
          </p>
        ) : null}
        <ProductGrid
          products={products.map((item: any) => ({
            ...item,
            _id: String(item._id),
          }))}
        />
      </section>
    </main>
  );
}
