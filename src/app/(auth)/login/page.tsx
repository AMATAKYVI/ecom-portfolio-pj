"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid credentials");
      return;
    }

    router.push("/");
  }

  return (
    <main className="mx-auto grid min-h-[75vh] max-w-5xl items-center gap-6 px-4 py-10 md:grid-cols-2">
      <section className="surface-strong hidden p-8 md:block">
        <p className="eyebrow">Account Access</p>
        <h1 className="mt-3 font-[var(--font-space-grotesk)] text-4xl font-black text-slate-900">Welcome back to your storefront.</h1>
        <p className="mt-4 text-slate-600">Track orders, manage wishlists, and complete checkout in seconds.</p>
      </section>
      <div className="surface w-full p-6">
        <h1 className="font-[var(--font-space-grotesk)] text-2xl font-black">Sign In</h1>
        <form onSubmit={onSubmit} className="mt-5 space-y-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
            required
          />
          {error ? <p className="text-sm text-rose-600">{error}</p> : null}
          <button type="submit" disabled={loading} className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm">
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <div className="mt-4 flex items-center justify-between text-sm">
          <Link href="/forgot-password" className="font-semibold text-slate-700 hover:text-slate-900">
            Forgot password?
          </Link>
        </div>
        <p className="mt-3 text-sm text-slate-600">
          New here? <Link href="/register" className="font-semibold text-cyan-700">Create an account</Link>
        </p>
      </div>
    </main>
  );
}
