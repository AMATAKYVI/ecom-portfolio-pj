import { notFound } from "next/navigation";
import { connectToDb } from "@/lib/db";
import { CategoryModel } from "@/models/Category";
import { ProductModel } from "@/models/Product";
import { ProductGrid } from "@/components/product/ProductGrid";

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  await connectToDb();
  const category = await CategoryModel.findOne({ slug: params.slug, isActive: true }).lean();
  if (!category) {
    notFound();
  }

  const products = await ProductModel.find({ category: category._id, isActive: true }).lean();

  return (
    <main className="mx-auto max-w-7xl space-y-6 px-4 py-8">
      <h1 className="text-3xl font-black text-slate-900">{category.name}</h1>
      <p className="max-w-3xl text-slate-600">{category.description}</p>
      <ProductGrid products={products.map((item: any) => ({ ...item, _id: String(item._id) }))} />
    </main>
  );
}
