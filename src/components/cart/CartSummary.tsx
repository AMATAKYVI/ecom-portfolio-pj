"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { formatMoney } from "@/lib/utils";

export function CartSummary() {
  const { items } = useCartStore();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <h3 className="mb-3 text-lg font-bold">Order Summary</h3>
      <div className="mb-4 flex items-center justify-between text-sm text-slate-600">
        <span>Subtotal</span>
        <span className="font-semibold text-slate-900">{formatMoney(subtotal)}</span>
      </div>
      <Link
        href="/checkout"
        className="block rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white"
      >
        Continue to Checkout
      </Link>
    </div>
  );
}
