import { formatMoney } from "@/lib/utils";

interface PriceDisplayProps {
  price: number;
  comparePrice?: number;
}

export function PriceDisplay({ price, comparePrice }: PriceDisplayProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg font-bold text-slate-900">{formatMoney(price)}</span>
      {comparePrice && comparePrice > price ? (
        <span className="text-sm text-slate-400 line-through">{formatMoney(comparePrice)}</span>
      ) : null}
    </div>
  );
}
