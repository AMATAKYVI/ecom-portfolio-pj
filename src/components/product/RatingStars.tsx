interface RatingStarsProps {
  rating: number;
  count?: number;
}

export function RatingStars({ rating, count }: RatingStarsProps) {
  const full = Math.round(rating);

  return (
    <div className="flex items-center gap-2 text-sm text-slate-600">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className={index < full ? "text-amber-500" : "text-slate-300"}>
            ★
          </span>
        ))}
      </div>
      <span>{rating.toFixed(1)}</span>
      {typeof count === "number" ? <span>({count})</span> : null}
    </div>
  );
}
