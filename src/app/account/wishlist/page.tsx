"use client";

import { useWishlistStore } from "@/store/wishlistStore";

export default function WishlistPage() {
  const { ids } = useWishlistStore();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-black">Wishlist</h1>
      <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-600">
        {ids.length ? `Saved products: ${ids.length}` : "No saved products yet."}
      </div>
    </div>
  );
}
