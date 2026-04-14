import { z } from "zod";

export const addressSchema = z.object({
  label: z.string().optional(),
  street: z.string().min(2),
  city: z.string().min(2),
  state: z.string().min(2),
  zip: z.string().min(2),
  country: z.string().min(2),
});

export const orderInputSchema = z.object({
  guestEmail: z.email().optional(),
  items: z.array(
    z.object({
      product: z.string(),
      variant: z.string().optional(),
      name: z.string(),
      image: z.string().optional(),
      price: z.number().nonnegative(),
      quantity: z.number().int().positive(),
      subtotal: z.number().nonnegative(),
    }),
  ),
  subtotal: z.number().nonnegative(),
  shipping: z.number().nonnegative(),
  tax: z.number().nonnegative(),
  discount: z.number().nonnegative(),
  total: z.number().nonnegative(),
  coupon: z.string().optional(),
  shippingAddress: addressSchema,
  billingAddress: addressSchema,
  paymentMethod: z.string().optional(),
  paymentIntentId: z.string().optional(),
  notes: z.string().optional(),
});
