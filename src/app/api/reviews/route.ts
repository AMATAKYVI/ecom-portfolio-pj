import { NextRequest } from "next/server";
import { connectToDb } from "@/lib/db";
import { ReviewModel } from "@/models/Review";
import { ProductModel } from "@/models/Product";
import { getAuthSession } from "@/lib/auth/session";
import { fail, ok } from "@/lib/api";

export async function POST(req: NextRequest) {
  try {
    const session = await getAuthSession();
    if (!session?.user?.id) {
      return fail("Unauthorized", 401);
    }

    const payload = await req.json();
    if (!payload?.product || !payload?.rating || !payload?.title || !payload?.body) {
      return fail("Missing required fields", 422);
    }

    await connectToDb();
    const review = await ReviewModel.create({
      ...payload,
      user: session.user.id,
      isApproved: false,
    });

    const approvedReviews = await ReviewModel.find({
      product: payload.product,
      isApproved: true,
    }).lean();

    const avg =
      approvedReviews.length > 0
        ? approvedReviews.reduce((sum, item) => sum + item.rating, 0) / approvedReviews.length
        : 0;

    await ProductModel.findByIdAndUpdate(payload.product, {
      ratings: {
        average: Number(avg.toFixed(2)),
        count: approvedReviews.length,
      },
    });

    return ok(review, 201);
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to create review", 500);
  }
}
