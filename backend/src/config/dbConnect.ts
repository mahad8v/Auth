import dotenv from "dotenv";
import mongoose from "mongoose";
import * as colors from "colors";

dotenv.config();

export const dbConnect = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("***** db connection successfully!! *****".cyan);
  } catch (error: any) {
    console.log("DB connection failed", error.message.red);
  }
};
