const steps = ["Contact", "Shipping", "Payment", "Review", "Confirmation"];

export function CheckoutSteps({ current = 1 }: { current?: number }) {
  return (
    <ol className="grid grid-cols-2 gap-3 md:grid-cols-5">
      {steps.map((step, index) => {
        const active = index + 1 <= current;
        return (
          <li
            key={step}
            className={active ? "rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white" : "rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-500"}
          >
            {index + 1}. {step}
          </li>
        );
      })}
    </ol>
  );
}
