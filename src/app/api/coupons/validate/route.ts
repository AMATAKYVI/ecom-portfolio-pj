import { NextRequest } from "next/server";
import { connectToDb } from "@/lib/db";
import { CouponModel } from "@/models/Coupon";
import { fail, ok } from "@/lib/api";

export async function POST(req: NextRequest) {
  try {
    await connectToDb();
    const payload = await req.json();

    const code = String(payload?.code || "").trim().toUpperCase();
    const amount = Number(payload?.amount || 0);

    if (!code) {
      return fail("Coupon code is required", 422);
    }

    const coupon = await CouponModel.findOne({ code, isActive: true }).lean();
    if (!coupon) {
      return fail("Invalid coupon", 404);
    }

    const now = new Date();
    if (coupon.startDate && coupon.startDate > now) {
      return fail("Coupon is not active yet", 422);
    }

    if (coupon.endDate && coupon.endDate < now) {
      return fail("Coupon has expired", 422);
    }

    if (amount < coupon.minOrderAmount) {
      return fail("Order does not meet minimum amount", 422);
    }

    let discount = 0;
    if (coupon.type === "percentage") {
      discount = amount * (coupon.value / 100);
      if (coupon.maxDiscountAmount) {
        discount = Math.min(discount, coupon.maxDiscountAmount);
      }
    } else if (coupon.type === "fixed") {
      discount = coupon.value;
    }

    return ok({ valid: true, discount, coupon });
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to validate coupon", 500);
  }
}
