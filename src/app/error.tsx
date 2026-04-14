"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="bg-background px-4 py-12 text-foreground">
        <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center">
          <section className="surface-strong w-full p-8 text-center">
            <p className="eyebrow">500</p>
            <h1 className="mt-3 font-[var(--font-space-grotesk)] text-4xl font-black text-slate-900">Something went wrong</h1>
            <p className="mt-4 text-slate-600">An unexpected error occurred. Try again or return to the homepage.</p>
            <button onClick={reset} className="mt-6 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white">
              Try again
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
