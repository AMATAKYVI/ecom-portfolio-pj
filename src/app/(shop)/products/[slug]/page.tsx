import { notFound } from "next/navigation";
import Image from "next/image";
import { connectToDb } from "@/lib/db";
import { ProductModel } from "@/models/Product";
import { PriceDisplay } from "@/components/product/PriceDisplay";
import { RatingStars } from "@/components/product/RatingStars";

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  let product: any = null;

  try {
    await connectToDb();
    product = await ProductModel.findOne({
      slug: params.slug,
      isActive: true,
    }).lean();
  } catch {
    notFound();
  }

  if (!product) {
    notFound();
  }

  const image = product.images?.[0]?.url || "https://via.placeholder.com/1200x1200?text=Product";

  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-4 py-8 lg:grid-cols-2">
      <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <Image src={image} alt={product.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="h-full w-full object-cover" unoptimized />
      </div>
      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6">
        <h1 className="text-3xl font-black text-slate-900">{product.name}</h1>
        <RatingStars rating={product.ratings?.average || 0} count={product.ratings?.count || 0} />
        <PriceDisplay price={product.price} comparePrice={product.comparePrice} />
        <p className="text-slate-600">{product.description}</p>
        <div className="flex gap-3">
          <button className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">Add to Cart</button>
          <button className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700">
            Add to Wishlist
          </button>
        </div>
      </section>
    </main>
  );
}
