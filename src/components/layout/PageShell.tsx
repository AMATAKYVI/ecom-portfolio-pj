import { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen text-slate-900">
      <Header />
      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-cyan-100/60 to-transparent" />
        {children}
      </div>
      <Footer />
    </div>
  );
}
