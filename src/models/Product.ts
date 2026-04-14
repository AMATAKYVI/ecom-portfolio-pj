import { Schema, model, models, type InferSchemaType } from "mongoose";

const ProductImageSchema = new Schema(
  {
    url: { type: String, required: true },
    alt: { type: String, default: "" },
    isPrimary: { type: Boolean, default: false },
  },
  { _id: false },
);

const ProductVariantOptionSchema = new Schema(
  {
    label: { type: String, required: true },
    value: { type: String, required: true },
    priceModifier: { type: Number, default: 0 },
    stock: { type: Number, default: 0 },
    sku: { type: String, required: true },
  },
  { _id: false },
);

const ProductVariantSchema = new Schema(
  {
    name: { type: String, required: true },
    options: { type: [ProductVariantOptionSchema], default: [] },
  },
  { _id: false },
);

const ProductAttributeSchema = new Schema(
  {
    key: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false },
);

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: true },
    shortDescription: { type: String },
    price: { type: Number, required: true },
    comparePrice: { type: Number },
    costPrice: { type: Number },
    sku: { type: String, required: true, unique: true },
    barcode: { type: String },
    stock: { type: Number, default: 0 },
    lowStockThreshold: { type: Number, default: 5 },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    brand: { type: String },
    tags: { type: [String], default: [] },
    images: { type: [ProductImageSchema], default: [] },
    variants: { type: [ProductVariantSchema], default: [] },
    attributes: { type: [ProductAttributeSchema], default: [] },
    ratings: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },
    isActive: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
    seoTitle: { type: String },
    seoDescription: { type: String },
  },
  { timestamps: true },
);

ProductSchema.index({ name: "text", description: "text", tags: "text" });

export type ProductDocument = InferSchemaType<typeof ProductSchema>;
export const ProductModel = models.Product || model("Product", ProductSchema);
