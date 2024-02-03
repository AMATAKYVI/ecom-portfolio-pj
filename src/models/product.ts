import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  images: String,
  stockQuantity: Number,
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
});

const Product =
  mongoose.connection.models.Product ||
  mongoose.model('Product', productSchema);

export default Product;
