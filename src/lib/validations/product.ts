import { z } from "zod";

export const productInputSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  description: z.string().min(10),
  shortDescription: z.string().optional(),
  price: z.number().nonnegative(),
  comparePrice: z.number().nonnegative().optional(),
  costPrice: z.number().nonnegative().optional(),
  sku: z.string().min(2),
  barcode: z.string().optional(),
  stock: z.number().int().nonnegative(),
  lowStockThreshold: z.number().int().nonnegative().default(5),
  category: z.string().optional(),
  brand: z.string().optional(),
  tags: z.array(z.string()).default([]),
  images: z
    .array(
      z.object({
        url: z.url(),
        alt: z.string().default(""),
        isPrimary: z.boolean().default(false),
      }),
    )
    .default([]),
  isActive: z.boolean().default(true),
  isFeatured: z.boolean().default(false),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});
