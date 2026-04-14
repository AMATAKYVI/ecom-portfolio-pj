"use client";

import { create } from "zustand";

export interface CartItemState {
  id: string;
  product: string;
  name: string;
  image?: string;
  price: number;
  quantity: number;
  variant?: string;
}

interface CartStore {
  items: CartItemState[];
  setItems: (items: CartItemState[]) => void;
  addItem: (item: CartItemState) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  setItems: (items) => set({ items }),
  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.product === item.product && i.variant === item.variant);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product === item.product && i.variant === item.variant
              ? { ...i, quantity: i.quantity + item.quantity }
              : i,
          ),
        };
      }
      return { items: [...state.items, item] };
    }),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((item) => (item.id === id ? { ...item, quantity } : item)),
    })),
  removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  clearCart: () => set({ items: [] }),
}));
