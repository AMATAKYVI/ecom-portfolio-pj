import { NextRequest } from "next/server";
import { connectToDb } from "@/lib/db";
import { registerSchema } from "@/lib/validations/auth";
import { UserModel } from "@/models/User";
import { hashPassword } from "@/lib/auth/password";
import { fail, ok } from "@/lib/api";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    const parsed = registerSchema.safeParse(payload);

    if (!parsed.success) {
      return fail(parsed.error.issues[0]?.message || "Invalid registration payload", 422);
    }

    await connectToDb();

    const existing = await UserModel.findOne({ email: parsed.data.email }).lean();
    if (existing) {
      return fail("Email already exists", 409);
    }

    const user = await UserModel.create({
      ...parsed.data,
      password: hashPassword(parsed.data.password),
      role: "customer",
    });

    return ok({ id: String(user._id), email: user.email }, 201);
  } catch (error) {
    return fail(error instanceof Error ? error.message : "Failed to register", 500);
  }
}
