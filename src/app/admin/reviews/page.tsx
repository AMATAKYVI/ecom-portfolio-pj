const reviewQueue = [
  {
    id: "rv-1001",
    product: "Performance Hoodie",
    user: "mia@example.com",
    rating: 5,
    title: "Great quality",
    body: "Comfortable fit and premium material.",
  },
  {
    id: "rv-1002",
    product: "Trail Sneakers",
    user: "leo@example.com",
    rating: 3,
    title: "Good but narrow",
    body: "Solid build, but sizing runs narrow.",
  },
];

export default function AdminReviewsPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-black">Review Moderation</h1>
      <div className="space-y-3">
        {reviewQueue.map((review) => (
          <article key={review.id} className="rounded-2xl border border-slate-200 bg-white p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{review.product}</p>
            <h2 className="mt-1 text-base font-black text-slate-900">{review.title}</h2>
            <p className="text-sm text-slate-600">{review.body}</p>
            <p className="mt-2 text-xs text-slate-500">By {review.user} • {review.rating}/5</p>
            <div className="mt-3 flex gap-2">
              <button className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white">Approve</button>
              <button className="rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-semibold text-white">Reject</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
