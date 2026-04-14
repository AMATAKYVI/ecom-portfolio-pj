import { AdminStatCard } from "@/components/admin/AdminStatCard";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-black">Admin Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard label="Revenue" value="$0.00" />
        <AdminStatCard label="Orders" value="0" />
        <AdminStatCard label="Customers" value="0" />
        <AdminStatCard label="Products" value="0" />
      </div>
    </div>
  );
}
