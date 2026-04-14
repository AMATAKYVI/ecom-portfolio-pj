import { NextRequest } from "next/server";
import { connectToDb } from "@/lib/db";
import { ProductModel } from "@/models/Product";
import { productInputSchema } from "@/lib/validations/product";
import { fail, ok } from "@/lib/api";
import { requireAdmin } from "@/lib/auth/guards";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const admin = await requireAdmin();
  if (!admin) {
    return fail("Unauthorized", 401);
  }

  try {
    const payload = await req.json();
    const parsed = productInputSchema.partial().safeParse(payload);
    if (!parsed.success) {
      return fail(parsed.error.issues[0]?.message || "Invalid payload", 422);
    }

    await connectToDb();
    const updated = await ProductModel.findByIdAndUpdate(params.id, parsed.data, { new: true }).lean();
    if (!updated) {
      return fail("Product not found", 404);
    }
    return ok(updated);
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to update product", 500);
  }
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const admin = await requireAdmin();
  if (!admin) {
    return fail("Unauthorized", 401);
  }

  try {
    await connectToDb();
    const deleted = await ProductModel.findByIdAndDelete(params.id).lean();
    if (!deleted) {
      return fail("Product not found", 404);
    }
    return ok({ deleted: true });
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to delete product", 500);
  }
}
