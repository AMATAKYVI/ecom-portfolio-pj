import { connectToDb } from "@/lib/db";
import { OrderModel } from "@/models/Order";
import { fail, ok } from "@/lib/api";
import { getAuthSession } from "@/lib/auth/session";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    await connectToDb();
    const session = await getAuthSession();
    if (!session?.user?.id) {
      return fail("Unauthorized", 401);
    }

    const order = await OrderModel.findById(params.id).lean();
    if (!order) {
      return fail("Order not found", 404);
    }

    if (String(order.user) !== session.user.id && session.user.role !== "admin") {
      return fail("Forbidden", 403);
    }

    return ok(order);
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to fetch order", 500);
  }
}
