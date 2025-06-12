import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        const ConnectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`);
        console.log(`MongoDB connected! DB: ${DB_NAME}`);
    } catch (error) {
        console.error("DB Connection Error", error);
        process.exit(1);
    }
};

export default connectDB;