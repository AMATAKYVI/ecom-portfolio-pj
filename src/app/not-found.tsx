import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-4 py-12">
      <section className="surface-strong w-full p-8 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-[var(--font-space-grotesk)] text-4xl font-black text-slate-900">Page not found</h1>
        <p className="mt-4 text-slate-600">The page you requested does not exist or may have been moved.</p>
        <Link href="/" className="mt-6 inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
          Go to homepage
        </Link>
      </section>
    </main>
  );
}
