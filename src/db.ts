import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost/faztstore");
  } catch (error) {
    console.error(error);
  }
}
