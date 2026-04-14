const addresses = [
  {
    id: "home",
    label: "Home",
    street: "123 Market Street",
    city: "Seattle",
    state: "WA",
    zip: "98101",
    country: "USA",
    isDefault: true,
  },
];

export default function AccountAddressesPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black">Saved Addresses</h1>
        <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Add Address</button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {addresses.map((address) => (
          <article key={address.id} className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-sm font-bold text-slate-900">{address.label}</p>
            {address.isDefault && (
              <span className="mt-2 inline-flex rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">
                Default
              </span>
            )}
            <p className="mt-3 text-sm text-slate-600">
              {address.street}
              <br />
              {address.city}, {address.state} {address.zip}
              <br />
              {address.country}
            </p>
            <div className="mt-4 flex gap-2">
              <button className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700">Edit</button>
              <button className="rounded-lg border border-rose-200 px-3 py-1.5 text-xs font-semibold text-rose-700">Delete</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
