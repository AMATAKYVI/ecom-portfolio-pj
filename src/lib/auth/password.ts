import { randomBytes, scryptSync, timingSafeEqual } from "crypto";

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, hashedValue: string) {
  const [salt, key] = hashedValue.split(":");
  if (!salt || !key) {
    return false;
  }

  const provided = scryptSync(password, salt, 64);
  const existing = Buffer.from(key, "hex");

  if (provided.length !== existing.length) {
    return false;
  }

  return timingSafeEqual(provided, existing);
}
