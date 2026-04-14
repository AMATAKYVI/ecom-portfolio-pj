"use client";

import { FormEvent, useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main className="mx-auto flex min-h-[75vh] max-w-xl items-center px-4 py-10">
      <section className="surface-strong w-full p-6 sm:p-8">
        <p className="eyebrow">Password Recovery</p>
        <h1 className="mt-2 font-[var(--font-space-grotesk)] text-3xl font-black text-slate-900">Reset your password</h1>
        <p className="mt-3 text-sm text-slate-600">Enter your account email and we will send reset instructions.</p>
        <form onSubmit={onSubmit} className="mt-5 space-y-3">
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
            placeholder="you@example.com"
          />
          <button className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">Send Reset Link</button>
        </form>
        {sent ? <p className="mt-4 text-sm font-semibold text-emerald-700">Reset instructions sent. Check your inbox.</p> : null}
      </section>
    </main>
  );
}
