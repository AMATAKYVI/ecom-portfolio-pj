export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-black">Analytics</h1>
      <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-600">
        Hook this dashboard to GET /api/admin/analytics for live metrics.
      </div>
    </div>
  );
}
