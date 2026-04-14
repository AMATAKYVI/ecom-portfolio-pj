import { NextRequest } from "next/server";
import { nanoid } from "nanoid";
import { connectToDb } from "@/lib/db";
import { OrderModel } from "@/models/Order";
import { orderInputSchema } from "@/lib/validations/order";
import { fail, ok } from "@/lib/api";
import { getAuthSession } from "@/lib/auth/session";

export async function GET() {
  try {
    await connectToDb();
    const session = await getAuthSession();
    if (!session?.user?.id) {
      return fail("Unauthorized", 401);
    }

    const orders = await OrderModel.find({ user: session.user.id }).sort({ createdAt: -1 }).lean();
    return ok(orders);
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to fetch orders", 500);
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDb();
    const payload = await req.json();
    const parsed = orderInputSchema.safeParse(payload);
    if (!parsed.success) {
      return fail(parsed.error.issues[0]?.message || "Invalid payload", 422);
    }

    const session = await getAuthSession();
    const order = await OrderModel.create({
      ...parsed.data,
      user: session?.user?.id,
      orderNumber: `ORD-${new Date().getFullYear()}-${nanoid(8).toUpperCase()}`,
    });

    return ok(order, 201);
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to create order", 500);
  }
}
