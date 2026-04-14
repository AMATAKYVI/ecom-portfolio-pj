import { getAuthSession } from "@/lib/auth/session";

export async function requireAuth() {
  const session = await getAuthSession();
  if (!session?.user?.id) {
    return null;
  }
  return session;
}

export async function requireAdmin() {
  const session = await getAuthSession();
  if (!session?.user?.id || session.user.role !== "admin") {
    return null;
  }
  return session;
}
