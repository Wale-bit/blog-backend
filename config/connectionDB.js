import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    mongoose.connection.on('error', err => console.error('DB error:', err));  // Add here
    console.log("DB connected");
  } catch (error) {
    console.log("error to connect DB");
  }
};
