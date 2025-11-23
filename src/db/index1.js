import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URL) {
      throw new Error("MONGODB_URL not found in environment variables");
    }

    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );

    console.log("✅ Connected to MongoDB:");
    console.log(`Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("❌ Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDB;
