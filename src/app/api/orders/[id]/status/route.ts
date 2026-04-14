import { NextRequest } from "next/server";
import { connectToDb } from "@/lib/db";
import { OrderModel } from "@/models/Order";
import { fail, ok } from "@/lib/api";
import { requireAdmin } from "@/lib/auth/guards";

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const admin = await requireAdmin();
  if (!admin) {
    return fail("Unauthorized", 401);
  }

  try {
    const payload = await req.json();
    const status = payload?.status as string | undefined;
    if (!status) {
      return fail("Missing status", 422);
    }

    await connectToDb();
    const order = await OrderModel.findById(params.id);
    if (!order) {
      return fail("Order not found", 404);
    }

    order.status = status as any;
    order.timeline.push({ status: status as any, timestamp: new Date(), note: payload?.note || "" });
    await order.save();

    return ok(order);
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to update order status", 500);
  }
}
