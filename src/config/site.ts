export const siteConfig = {
  name: "Ama Store",
  description: "Modern e-commerce storefront built with Next.js and TypeScript.",
  currency: "USD",
  locale: "en-US",
  taxRate: 0.08,
  freeShippingThreshold: 100,
  shippingFlatRate: 7.99,
} as const;

export const orderStatus = [
  "pending",
  "confirmed",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
  "refunded",
] as const;

export const paymentStatus = ["pending", "paid", "failed", "refunded"] as const;

export const userRoles = ["customer", "admin"] as const;
