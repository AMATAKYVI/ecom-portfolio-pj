import { connectToDb } from "@/lib/db";
import { ProductModel } from "@/models/Product";
import { fail, ok } from "@/lib/api";

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  try {
    await connectToDb();
    const product = await ProductModel.findOne({ slug: params.slug, isActive: true }).lean();
    if (!product) {
      return fail("Product not found", 404);
    }

    const related = await ProductModel.find({
      _id: { $ne: product._id },
      category: product.category,
      isActive: true,
    })
      .limit(8)
      .lean();

    return ok({ product, related });
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to fetch product", 500);
  }
}
