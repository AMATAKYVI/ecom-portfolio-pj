import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  address: String,
  phoneNumber: String,
});
const Customer =
  mongoose.connection.models.Customer ||
  mongoose.model('Customer', customerSchema);

export default Customer;
