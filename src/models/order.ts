import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  orderDate: Date,
  totalAmount: Number,
  orderItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderItem' }],
});

const Order =
  mongoose.connection.models.Order || mongoose.model('Order', orderSchema);

export default Order;
