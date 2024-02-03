import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  categoryName: String,
});

const Category =
  mongoose.connection.models.Category ||
  mongoose.model('Category', categorySchema);

export default Category;
