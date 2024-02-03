import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    conn.connection.on('connection', () => {
      console.log('connection successful');
    });
    conn.connection.on('error', () => {
      console.log('connection fails');
    });
  } catch (error) {
    console.log('connection failed');
  }
};

export default connectDB;
