import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

const connectDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.DATABASE_URI);
		console.log("Database connected");
	} catch (error) {
		console.log(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
