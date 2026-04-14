const coupons = [
  { code: "SPRING20", type: "percentage", value: "20%", uses: "12 / 200", active: true },
  { code: "SAVE15", type: "fixed", value: "$15", uses: "41 / 500", active: true },
];

export default function AdminCouponsPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black">Coupon Management</h1>
        <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Create Coupon</button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {coupons.map((coupon) => (
          <article key={coupon.code} className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{coupon.type}</p>
            <h2 className="mt-1 text-lg font-black text-slate-900">{coupon.code}</h2>
            <p className="mt-2 text-sm text-slate-600">Discount: {coupon.value}</p>
            <p className="text-sm text-slate-600">Usage: {coupon.uses}</p>
            <span className="mt-3 inline-flex rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
              {coupon.active ? "Active" : "Inactive"}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
