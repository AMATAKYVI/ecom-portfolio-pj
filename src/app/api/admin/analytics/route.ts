import { connectToDb } from "@/lib/db";
import { requireAdmin } from "@/lib/auth/guards";
import { ProductModel } from "@/models/Product";
import { UserModel } from "@/models/User";
import { OrderModel } from "@/models/Order";
import { fail, ok } from "@/lib/api";

export async function GET() {
  const admin = await requireAdmin();
  if (!admin) {
    return fail("Unauthorized", 401);
  }

  try {
    await connectToDb();

    const [products, customers, orders, paidOrders] = await Promise.all([
      ProductModel.countDocuments({}),
      UserModel.countDocuments({ role: "customer" }),
      OrderModel.countDocuments({}),
      OrderModel.find({ paymentStatus: "paid" }).lean(),
    ]);

    const revenue = paidOrders.reduce((sum, order) => sum + order.total, 0);

    return ok({
      revenue,
      orders,
      customers,
      products,
    });
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to fetch analytics", 500);
  }
}
