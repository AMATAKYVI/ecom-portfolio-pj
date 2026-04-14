import { ProductCard } from "@/components/product/ProductCard";

interface ProductGridProps {
  products: {
    _id: string;
    name: string;
    slug: string;
    price: number;
    comparePrice?: number;
    images?: { url: string; alt?: string }[];
    ratings?: { average: number; count: number };
  }[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (!products.length) {
    return <p className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
