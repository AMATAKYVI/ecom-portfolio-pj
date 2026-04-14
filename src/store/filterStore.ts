"use client";

import { create } from "zustand";

interface FilterStore {
  query: string;
  category?: string;
  sort: string;
  minPrice?: number;
  maxPrice?: number;
  setFilter: (input: Partial<Omit<FilterStore, "setFilter" | "reset">>) => void;
  reset: () => void;
}

const initialState = {
  query: "",
  category: undefined,
  sort: "newest",
  minPrice: undefined,
  maxPrice: undefined,
};

export const useFilterStore = create<FilterStore>((set) => ({
  ...initialState,
  setFilter: (input) => set((state) => ({ ...state, ...input })),
  reset: () => set(initialState),
}));
