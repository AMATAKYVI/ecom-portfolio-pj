import { Schema, model, models, type InferSchemaType } from "mongoose";

const CartItemSchema = new Schema(
  {
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    variant: { type: String },
    name: { type: String, required: true },
    image: { type: String },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, min: 1 },
  },
  { _id: true },
);

const CartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", index: true },
    sessionId: { type: String, index: true },
    items: { type: [CartItemSchema], default: [] },
    expiresAt: { type: Date },
  },
  { timestamps: true },
);

export type CartDocument = InferSchemaType<typeof CartSchema>;
export const CartModel = models.Cart || model("Cart", CartSchema);
