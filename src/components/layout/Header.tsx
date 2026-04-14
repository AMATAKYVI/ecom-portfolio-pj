import Link from "next/link";

const nav = [
  { href: "/products", label: "Shop" },
  { href: "/search", label: "Discover" },
  { href: "/account", label: "Account" },
  { href: "/admin/dashboard", label: "Admin" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-black tracking-tight text-slate-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-sm text-white">A</span>
          <span className="font-[var(--font-space-grotesk)]">Ama</span>
        </Link>
        <nav className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-2 py-1 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3 py-1.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/login" className="hidden rounded-full px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 sm:inline-flex">
            Sign In
          </Link>
          <Link href="/cart" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm">
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
}
