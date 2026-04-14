"use client";

import { create } from "zustand";

interface WishlistStore {
  ids: string[];
  toggle: (id: string) => void;
  has: (id: string) => boolean;
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  ids: [],
  toggle: (id) =>
    set((state) => ({
      ids: state.ids.includes(id) ? state.ids.filter((item) => item !== id) : [...state.ids, id],
    })),
  has: (id) => get().ids.includes(id),
}));
