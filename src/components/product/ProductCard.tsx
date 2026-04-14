import Link from "next/link";
import Image from "next/image";
import { PriceDisplay } from "@/components/product/PriceDisplay";
import { RatingStars } from "@/components/product/RatingStars";

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    slug: string;
    price: number;
    comparePrice?: number;
    images?: { url: string; alt?: string }[];
    ratings?: { average: number; count: number };
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const image = product.images?.[0]?.url || "https://via.placeholder.com/600x600?text=Product";

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg">
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={product.images?.[0]?.alt || product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            unoptimized
          />
        </div>
      </Link>
      <div className="space-y-2 p-4">
        <Link href={`/products/${product.slug}`} className="line-clamp-2 text-sm font-semibold text-slate-900">
          {product.name}
        </Link>
        <RatingStars rating={product.ratings?.average || 0} count={product.ratings?.count || 0} />
        <PriceDisplay price={product.price} comparePrice={product.comparePrice} />
      </div>
    </article>
  );
}
