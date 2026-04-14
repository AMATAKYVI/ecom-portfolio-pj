import { Schema, model, models, type InferSchemaType } from "mongoose";

const AddressSchema = new Schema(
  {
    label: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    isDefault: { type: Boolean, default: false },
  },
  { _id: false },
);

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String },
    name: { type: String, required: true },
    role: { type: String, enum: ["customer", "admin"], default: "customer" },
    avatar: { type: String },
    phone: { type: String },
    addresses: { type: [AddressSchema], default: [] },
    wishlist: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true },
);

export type UserDocument = InferSchemaType<typeof UserSchema>;
export const UserModel = models.User || model("User", UserSchema);
