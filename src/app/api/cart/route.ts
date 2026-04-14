import { NextRequest } from "next/server";
import { nanoid } from "nanoid";
import { connectToDb } from "@/lib/db";
import { CartModel } from "@/models/Cart";
import { addCartItemSchema } from "@/lib/validations/cart";
import { fail, ok } from "@/lib/api";
import { getAuthSession } from "@/lib/auth/session";

async function findOrCreateCart(userId?: string, sessionId?: string) {
  const query = userId ? { user: userId } : { sessionId };
  let cart = await CartModel.findOne(query);

  if (!cart) {
    cart = await CartModel.create({
      user: userId,
      sessionId: sessionId || nanoid(12),
      items: [],
    });
  }

  return cart;
}

export async function GET(req: NextRequest) {
  try {
    await connectToDb();
    const session = await getAuthSession();
    const sessionId = req.headers.get("x-session-id") || undefined;

    const cart = await CartModel.findOne(
      session?.user?.id ? { user: session.user.id } : { sessionId },
    ).lean();

    return ok({
      cart,
      sessionId: cart?.sessionId || sessionId,
    });
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to fetch cart", 500);
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectToDb();
    const payload = await req.json();
    const parsed = addCartItemSchema.safeParse(payload);
    if (!parsed.success) {
      return fail(parsed.error.issues[0]?.message || "Invalid payload", 422);
    }

    const session = await getAuthSession();
    const sessionId = req.headers.get("x-session-id") || undefined;
    const cart = await findOrCreateCart(session?.user?.id, sessionId);

    const existing = cart.items.find(
      (item: any) =>
        String(item.product) === parsed.data.product && (item.variant || "") === (parsed.data.variant || ""),
    );

    if (existing) {
      existing.quantity += parsed.data.quantity;
    } else {
      cart.items.push(parsed.data as any);
    }

    await cart.save();

    return ok({ cart, sessionId: cart.sessionId });
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to update cart", 500);
  }
}
