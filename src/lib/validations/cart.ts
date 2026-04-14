import { z } from "zod";

export const addCartItemSchema = z.object({
  product: z.string(),
  variant: z.string().optional(),
  name: z.string().min(1),
  image: z.string().optional(),
  price: z.number().nonnegative(),
  quantity: z.number().int().positive(),
});

export const updateCartItemSchema = z.object({
  quantity: z.number().int().positive(),
});
