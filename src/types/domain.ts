export type UserRole = "customer" | "admin";

export interface Address {
  label: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  isDefault: boolean;
}

export interface ProductImage {
  url: string;
  alt: string;
  isPrimary: boolean;
}

export interface ProductRating {
  average: number;
  count: number;
}

export interface ProductVariantOption {
  label: string;
  value: string;
  priceModifier: number;
  stock: number;
  sku: string;
}

export interface ProductVariant {
  name: string;
  options: ProductVariantOption[];
}

export interface ProductAttribute {
  key: string;
  value: string;
}

export interface CartItem {
  product: string;
  variant?: string;
  name: string;
  image?: string;
  price: number;
  quantity: number;
}

export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded";

export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

export interface OrderTimelineEntry {
  status: OrderStatus;
  timestamp: Date;
  note?: string;
}
