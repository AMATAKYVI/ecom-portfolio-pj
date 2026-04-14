"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const body = await response.json();
    setLoading(false);

    if (!response.ok || !body.ok) {
      setError(body.error || "Registration failed");
      return;
    }

    router.push("/login");
  }

  return (
    <main className="mx-auto grid min-h-[75vh] max-w-5xl items-center gap-6 px-4 py-10 md:grid-cols-2">
      <section className="surface-strong hidden p-8 md:block">
        <p className="eyebrow">New Membership</p>
        <h1 className="mt-3 font-[var(--font-space-grotesk)] text-4xl font-black text-slate-900">Create your account.</h1>
        <p className="mt-4 text-slate-600">Save addresses, track orders, and unlock faster repeat checkout.</p>
      </section>
      <div className="surface w-full p-6">
        <h1 className="font-[var(--font-space-grotesk)] text-2xl font-black">Create Account</h1>
        <form onSubmit={onSubmit} className="mt-5 space-y-3">
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
            required
          />
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
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>
        <p className="mt-4 text-sm text-slate-600">
          Already have an account? <Link href="/login" className="font-semibold text-cyan-700">Sign in</Link>
        </p>
      </div>
    </main>
  );
}
