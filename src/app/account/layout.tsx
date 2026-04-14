import { ReactNode } from "react";
import Link from "next/link";

const accountNav = [
  { href: "/account", label: "Dashboard" },
  { href: "/account/orders", label: "Orders" },
  { href: "/account/profile", label: "Profile" },
  { href: "/account/addresses", label: "Addresses" },
  { href: "/account/wishlist", label: "Wishlist" },
];

export default function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-[220px_1fr]">
      <aside className="surface h-fit p-4">
        <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500">Account Center</h2>
        <nav className="space-y-2">
          {accountNav.map((item) => (
            <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <section>{children}</section>
    </main>
  );
}
