import { connectToDb } from "@/lib/db";
import { CategoryModel } from "@/models/Category";
import { fail, ok } from "@/lib/api";

export async function GET() {
  try {
    await connectToDb();
    const categories = await CategoryModel.find({ isActive: true }).sort({ sortOrder: 1, name: 1 }).lean();
    return ok(categories);
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to fetch categories", 500);
  }
}
