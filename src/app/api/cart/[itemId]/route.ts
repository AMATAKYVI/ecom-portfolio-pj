import { NextRequest } from "next/server";
import { connectToDb } from "@/lib/db";
import { CartModel } from "@/models/Cart";
import { updateCartItemSchema } from "@/lib/validations/cart";
import { fail, ok } from "@/lib/api";
import { getAuthSession } from "@/lib/auth/session";

async function getCurrentCart(req: NextRequest) {
  const session = await getAuthSession();
  const sessionId = req.headers.get("x-session-id") || undefined;

  const query = session?.user?.id ? { user: session.user.id } : { sessionId };
  return CartModel.findOne(query);
}

export async function PUT(req: NextRequest, { params }: { params: { itemId: string } }) {
  try {
    await connectToDb();
    const payload = await req.json();
    const parsed = updateCartItemSchema.safeParse(payload);
    if (!parsed.success) {
      return fail(parsed.error.issues[0]?.message || "Invalid payload", 422);
    }

    const cart = await getCurrentCart(req);
    if (!cart) {
      return fail("Cart not found", 404);
    }

    const item = cart.items.id(params.itemId);
    if (!item) {
      return fail("Item not found", 404);
    }

    item.quantity = parsed.data.quantity;
    await cart.save();

    return ok(cart);
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to update cart item", 500);
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { itemId: string } }) {
  try {
    await connectToDb();
    const cart = await getCurrentCart(req);
    if (!cart) {
      return fail("Cart not found", 404);
    }

    cart.items.pull({ _id: params.itemId });
    await cart.save();

    return ok(cart);
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to remove cart item", 500);
  }
}
