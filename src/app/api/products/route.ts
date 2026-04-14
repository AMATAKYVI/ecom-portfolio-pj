import { NextRequest } from "next/server";
import { connectToDb } from "@/lib/db";
import { ProductModel } from "@/models/Product";
import { productInputSchema } from "@/lib/validations/product";
import { fail, ok } from "@/lib/api";
import { requireAdmin } from "@/lib/auth/guards";

export async function GET(req: NextRequest) {
  try {
    await connectToDb();

    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q") || "";
    const page = Number(searchParams.get("page") || "1");
    const limit = Math.min(Number(searchParams.get("limit") || "12"), 48);
    const skip = (page - 1) * limit;
    const sort = searchParams.get("sort") || "newest";
    const category = searchParams.get("category");
    const minPrice = Number(searchParams.get("minPrice") || "0");
    const maxPrice = Number(searchParams.get("maxPrice") || String(Number.MAX_SAFE_INTEGER));

    const filter: Record<string, unknown> = {
      isActive: true,
      price: { $gte: minPrice, $lte: maxPrice },
    };

    if (q) {
      filter.$text = { $search: q };
    }

    if (category) {
      filter.category = category;
    }

    const sortMap: Record<string, Record<string, 1 | -1>> = {
      newest: { createdAt: -1 },
      "price-asc": { price: 1 },
      "price-desc": { price: -1 },
      rating: { "ratings.average": -1 },
      popularity: { "ratings.count": -1 },
    };

    const [items, total] = await Promise.all([
      ProductModel.find(filter)
        .sort(sortMap[sort] || sortMap.newest)
        .skip(skip)
        .limit(limit)
        .lean(),
      ProductModel.countDocuments(filter),
    ]);

    return ok({ items, page, limit, total, pages: Math.ceil(total / limit) });
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to fetch products", 500);
  }
}

export async function POST(req: NextRequest) {
  const admin = await requireAdmin();
  if (!admin) {
    return fail("Unauthorized", 401);
  }

  try {
    const payload = await req.json();
    const parsed = productInputSchema.safeParse(payload);
    if (!parsed.success) {
      return fail(parsed.error.issues[0]?.message || "Invalid payload", 422);
    }

    await connectToDb();
    const created = await ProductModel.create(parsed.data);
    return ok(created, 201);
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to create product", 500);
  }
}
