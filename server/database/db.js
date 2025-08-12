import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" }); // or ".env"

let cached = global.mongoose || { conn: null, promise: null };

export default async function connectDB() {
  try {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
      cached.promise = mongoose.connect(process.env.MONGODB_URL);
      cached.conn = await cached.promise;
      console.log("MongoDB connection successful");
    }
  } catch (error) {
    console.log("MongoDB connection failed");
  }

  return cached.conn;
}
