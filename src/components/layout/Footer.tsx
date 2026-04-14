export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/80 bg-white/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-[var(--font-space-grotesk)] text-lg font-bold text-slate-900">Ama Storefront</p>
          <p className="mt-2 text-sm text-slate-600">Built for modern commerce workflows with clean conversions and fast checkout.</p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-slate-700">Explore</p>
          <div className="mt-2 space-y-1 text-sm text-slate-600">
            <p>Products</p>
            <p>Categories</p>
            <p>Account</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-slate-700">Support</p>
          <p className="mt-2 text-sm text-slate-600">help@amastore.com</p>
          <p className="text-sm text-slate-600">Mon-Fri, 9:00-18:00</p>
        </div>
      </div>
    </footer>
  );
}
