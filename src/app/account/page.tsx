export default function AccountDashboardPage() {
  return (
    <div className="space-y-5">
      <h1 className="font-[var(--font-space-grotesk)] text-3xl font-black">Account Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        <article className="surface p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Open Orders</p>
          <p className="mt-2 text-3xl font-black text-slate-900">2</p>
        </article>
        <article className="surface p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Wishlist</p>
          <p className="mt-2 text-3xl font-black text-slate-900">7</p>
        </article>
        <article className="surface p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Saved Addresses</p>
          <p className="mt-2 text-3xl font-black text-slate-900">1</p>
        </article>
      </div>
      <article className="surface p-5 text-slate-600">
        Quick links to recent orders, addresses, and profile preferences.
      </article>
    </div>
  );
}
