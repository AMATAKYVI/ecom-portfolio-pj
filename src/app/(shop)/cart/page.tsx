"use client";

import { CartSummary } from "@/components/cart/CartSummary";
import { useCartStore } from "@/store/cartStore";
import { formatMoney } from "@/lib/utils";

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCartStore();

  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-[1fr_320px]">
      <section className="space-y-4">
        <h1 className="font-[var(--font-space-grotesk)] text-3xl font-black">Your Cart</h1>
        {items.length === 0 ? (
          <p className="surface border-dashed p-8 text-center text-slate-500">Your cart is empty.</p>
        ) : (
          items.map((item) => (
            <article key={item.id} className="surface p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-slate-600">{formatMoney(item.price)}</p>
                </div>
                <button className="text-sm text-rose-600" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <button
                  className="rounded border border-slate-300 px-2"
                  onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                >
                  -
                </button>
                <span className="text-sm font-semibold">{item.quantity}</span>
                <button className="rounded border border-slate-300 px-2" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>
            </article>
          ))
        )}
      </section>
      <CartSummary />
    </main>
  );
}
