"use client";

import { useFilterStore } from "@/store/filterStore";

export function FilterSidebar() {
  const { query, sort, setFilter, reset } = useFilterStore();

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-4">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-600">Filters</h3>
      <div className="space-y-3">
        <input
          value={query}
          onChange={(event) => setFilter({ query: event.target.value })}
          placeholder="Search products"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
        <select
          value={sort}
          onChange={(event) => setFilter({ sort: event.target.value })}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        >
          <option value="newest">Newest</option>
          <option value="price-asc">Price low to high</option>
          <option value="price-desc">Price high to low</option>
          <option value="rating">Best rated</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
      <button
        onClick={reset}
        className="mt-4 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700"
      >
        Clear filters
      </button>
    </aside>
  );
}
