import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: Number,
  subtotal: Number,
});

const OrderItem =
  mongoose.connection.models.OrderItem ||
  mongoose.model('OrderItem', orderItemSchema);

export default OrderItem;
